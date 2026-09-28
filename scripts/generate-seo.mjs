import { readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

const siteUrl = (process.env.SITE_URL || 'https://rust-lang-nuxt.example.com').replace(/\/+$/, '')

const paths = JSON.parse(readFileSync(join(__dirname, '..', 'generated', 'routes.json'), 'utf8'))

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map(path => `  <url><loc>${siteUrl}${path === '/' ? '/' : path}</loc></url>`).join('\n')}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

writeFileSync(join(publicDir, 'sitemap.xml'), sitemap, 'utf8')
writeFileSync(join(publicDir, 'robots.txt'), robots, 'utf8')

console.log(`[generate-seo] sitemap.xml / robots.txt generated for ${siteUrl}`)
