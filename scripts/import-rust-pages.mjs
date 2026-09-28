import { mkdir, readFile, writeFile, access, rm } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const htmlDir = join(process.env.TEMP || '/tmp', 'rust-pages')
const outDir = join(root, 'generated', 'pages')
const imageDir = join(root, 'public', 'images')

const sources = [
  ['home.html', '/'],
  ['learn.html', '/learn'],
  ['get-started.html', '/learn/get-started'],
  ['hometools.html', '/tools'],
  ['hometools_install.html', '/tools/install'],
  ['homegovernance.html', '/governance'],
  ['gov-teams.html', '/governance/teams'],
  ['gov-people.html', '/governance/people'],
  ['team-compiler.html', '/governance/teams/compiler'],
  ['team-dev-tools.html', '/governance/teams/dev-tools'],
  ['team-infra.html', '/governance/teams/infra'],
  ['team-lang.html', '/governance/teams/lang'],
  ['team-launching-pad.html', '/governance/teams/launching-pad'],
  ['team-leadership-council.html', '/governance/teams/leadership-council'],
  ['team-library.html', '/governance/teams/library'],
  ['team-moderation.html', '/governance/teams/moderation'],
  ['homefunding.html', '/funding'],
  ['funding-mir.html', '/funding/mir'],
  ['homecommunity.html', '/community'],
  ['homepolicies.html', '/policies'],
  ['homepolicies_code-of-conduct.html', '/policies/code-of-conduct'],
  ['homepolicies_licenses.html', '/policies/licenses'],
  ['homepolicies_security.html', '/policies/security'],
  ['what-cli.html', '/what/cli'],
  ['what-wasm.html', '/what/wasm'],
  ['what-networking.html', '/what/networking'],
  ['what-embedded.html', '/what/embedded'],
]

const phrases = [
  ['Copy install command to clipboard', '将安装命令复制到剪贴板'],
  ['Copy WSL install command to clipboard', '将 WSL 安装命令复制到剪贴板'],
  ['>Copy<', '>复制<'],
  ['alt="github logo"', 'alt="GitHub 标志"'],
  ['alt="youtube 标志"', 'alt="YouTube 标志"'],
  ['alt="Mastodon"', 'alt="Mastodon 标志"'],
  ['alt="Bluesky"', 'alt="Bluesky 标志"'],
  ['All Rust Teams', '全部 Rust 团队'],
  ['Active Rust Teams', '现役 Rust 团队'],
  ['This section lists the 125 teams currently active in the Rust project.', '本节列出目前在 Rust 项目中活跃的 125 个团队。'],
  ['Maintainers in Residence', '驻场维护者'],
  ['Infrastructure team', '基础设施团队'],
  ['Compiler team', '编译器团队'],
  ['Language team', '语言团队'],
  ['Library team', '库团队'],
  ['Dev tools team', '开发工具团队'],
  ['Moderation team', '社区管理团队'],
  ['Launching pad team', '孵化团队'],
  ['Leadership council', '领导议会'],
]

function applyPhrases(value) {
  let next = value
  for (const [from, to] of phrases)
    next = next.replaceAll(from, to)
  return next
}

function mapUrl(url) {
  const hashAt = url.indexOf('#')
  const hash = hashAt >= 0 ? url.slice(hashAt) : ''
  const base = (hashAt >= 0 ? url.slice(0, hashAt) : url).trim()

  if (base.startsWith('/static/images/'))
    return `/images/${base.slice('/static/images/'.length).split('?')[0]}${hash}`

  if (/^\/zh-CN\/governance\/people\/[^/]+/.test(base))
    return `https://www.rust-lang.org${base}${hash}`

  if (base === '/zh-CN' || base === '/zh-CN/')
    return `/${hash}`

  if (base.startsWith('/zh-CN/')) {
    let path = base.slice('/zh-CN'.length).replace(/\.html$/, '')
    if (path.length > 1 && path.endsWith('/'))
      path = path.slice(0, -1)
    return `${path}${hash}`
  }

  if (base === 'learn' || base === 'learn/')
    return `/learn${hash}`

  return url
}

function rewriteMarkup(html) {
  let next = html.replace(/<script\b[\s\S]*?<\/script>/gi, '')
  next = next.replace(/(href|src)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/gi, (_match, attr, doubleQuoted, singleQuoted, unquoted) => {
    const value = doubleQuoted ?? singleQuoted ?? unquoted
    return `${attr}="${mapUrl(value)}"`
  })
  next = next.replace(/<a\b([^>]*?)>/gi, (full, attrs) => {
    if (!/target="_blank"/.test(attrs) || /\srel=/.test(attrs))
      return full
    return `<a${attrs} rel="noopener noreferrer">`
  })
  return applyPhrases(next).trim()
}

function fileName(route) {
  if (route === '/')
    return 'index.json'
  return `${route.slice(1).replaceAll('/', '__')}.json`
}

function pageVuePath(route, allRoutes) {
  if (route === '/')
    return 'pages/index.vue'
  const hasChild = allRoutes.some(item => item.startsWith(`${route}/`))
  const segments = route.slice(1).split('/')
  if (hasChild)
    return join('pages', ...segments, 'index.vue')
  if (segments.length === 1)
    return join('pages', `${segments[0]}.vue`)
  return join('pages', ...segments.slice(0, -1), `${segments.at(-1)}.vue`)
}

function pageVueSource(jsonFile, route) {
  return `<script setup lang="ts">
import page from '~/generated/pages/${jsonFile}'

useSeoMeta({
  title: page.title,
  description: page.description,
  ogTitle: page.title,
  ogDescription: page.description,
  ogUrl: '${route}',
})
</script>

<template>
  <RustPage :html="page.html" />
</template>
`
}

async function downloadImages(html) {
  const urls = new Set()
  for (const match of html.matchAll(/\/static\/images\/([^"')\s]+)/g)) {
    const name = match[1].split('?')[0].split('#')[0]
    if (name)
      urls.add(name)
  }
  for (const name of urls) {
    const dest = join(imageDir, name)
    try {
      await access(dest)
      continue
    }
    catch {
      // download below
    }
    const response = await fetch(`https://www.rust-lang.org/static/images/${name}`)
    if (!response.ok) {
      console.warn(`image miss ${name} ${response.status}`)
      continue
    }
    const bytes = Buffer.from(await response.arrayBuffer())
    await mkdir(dirname(dest), { recursive: true })
    await writeFile(dest, bytes)
    console.log(`image ${name}`)
  }
}

console.log('import start', htmlDir)
await mkdir(outDir, { recursive: true })
const routes = []

for (const [file, route] of sources) {
  const raw = await readFile(join(htmlDir, file), 'utf8')
  const main = raw.match(/<main[^>]*>([\s\S]*?)<\/main>/i)
  if (!main)
    throw new Error(`no main in ${file}`)
  await downloadImages(main[1])
  const title = applyPhrases((raw.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? 'Rust 程序设计语言').replace(/\s+/g, ' ').trim())
  const description = (raw.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] ?? '一门帮助每个人构建可靠且高效软件的语言。').trim()
  const page = {
    title,
    description,
    html: rewriteMarkup(main[1]),
  }
  await writeFile(join(outDir, fileName(route)), JSON.stringify(page))
  routes.push(route)
  console.log(`${route} ${page.html.length}`)
}

await writeFile(join(root, 'generated', 'routes.json'), `${JSON.stringify(routes, null, 2)}\n`)
await rm(join(root, 'pages', '[[...slug]].vue'), { force: true })

for (const route of routes) {
  const vuePath = pageVuePath(route, routes)
  const vueFile = join(root, vuePath)
  await mkdir(dirname(vueFile), { recursive: true })
  await writeFile(vueFile, pageVueSource(fileName(route), route))
  console.log(`vue ${vuePath}`)
}

console.log(`wrote ${routes.length} pages`)
