import { readFileSync } from 'node:fs'

const pages = [
  ['index.html', '首页'],
  ['learn/index.html', '学习页'],
  ['tools/index.html', '工具页'],
  ['404.html', '404'],
]

for (const [file, label] of pages) {
  const html = readFileSync(`.output/public/${file}`, 'utf8')
  const h1s = (html.match(/<h1[\s>]/g) ?? []).length
  const h2s = (html.match(/<h2[\s>]/g) ?? []).length
  const lang = html.includes('lang="zh-CN"')
  const og = html.includes('og:title')
  const desc = html.includes('name="description"')
  const nav = html.includes('<nav')
  const footer = html.includes('<footer')
  const themeScript = html.includes('rust-lang-nuxt:theme')
  console.log(
    `${label} (${file}) | h1:${h1s} h2:${h2s} | lang:${lang} og:${og} desc:${desc} | nav:${nav} footer:${footer} | 防闪烁:${themeScript}`,
  )
}
