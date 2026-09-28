import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { join, extname } from 'node:path'
import { spawn } from 'node:child_process'

const PORT = 4173
const ROOT = '.output/public'

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
}

const server = createServer(async (req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0])
  if (urlPath === '/') {
    urlPath = '/index.html'
  }
  let fp = join(ROOT, urlPath)
  try {
    const s = await stat(fp)
    if (s.isDirectory()) {
      fp = join(fp, 'index.html')
    }
  } catch {
    fp = join(ROOT, '404.html')
    res.statusCode = 404
  }
  try {
    const data = await readFile(fp)
    res.setHeader('Content-Type', mime[extname(fp)] ?? 'application/octet-stream')
    res.end(data)
  } catch {
    res.statusCode = 404
    res.end('Not Found')
  }
})

await new Promise(resolve => server.listen(PORT, resolve))
console.log(`[serve] static server listening on http://localhost:${PORT}`)

const pages = [['/', 'Home'], ['/learn', 'Learn'], ['/tools', 'Tools']]
const results = []

for (const [path, label] of pages) {
  const url = `http://localhost:${PORT}${path}`
  console.log(`\n[lighthouse] running ${label} ${url}`)
  const out = await new Promise((resolve) => {
    const proc = spawn(
      'npx',
      [
        '--yes',
        'lighthouse',
        url,
        '--output=json',
        '--output-path=stdout',
        '--chrome-flags=--headless --no-sandbox --disable-gpu',
        '--only-categories=performance,accessibility,seo,best-practices',
        '--quiet',
        '--throttling-method=simulate',
      ],
      { shell: true },
    )
    let stdout = ''
    let stderr = ''
    proc.stdout.on('data', d => (stdout += d))
    proc.stderr.on('data', d => (stderr += d))
    proc.on('close', () => resolve({ stdout, stderr }))
  })

  try {
    const report = JSON.parse(out.stdout)
    const scores = {}
    for (const cat of ['performance', 'accessibility', 'seo', 'best-practices']) {
      scores[cat] = Math.round((report.categories[cat]?.score ?? 0) * 100)
    }
    const lcp = report.audits['largest-contentful-paint']?.numericValue ?? null
    const tbt = report.audits['total-blocking-time']?.numericValue ?? null
    const cls = report.audits['cumulative-layout-shift']?.numericValue ?? null
    const fcp = report.audits['first-contentful-paint']?.numericValue ?? null
    results.push({ label, path, scores, lcp, tbt, cls, fcp })
  } catch (err) {
    results.push({ label, path, error: (out.stderr.slice(-400) || err.message) })
  }
}

server.close()

console.log('\n=== Lighthouse scores (mobile simulate throttling) ===')
for (const r of results) {
  if (r.error) {
    console.log(`${r.label} (${r.path}): ERROR — ${r.error}`)
    continue
  }
  const fmt = v => (v == null ? 'n/a' : `${(v / 1000).toFixed(2)}s`)
  console.log(
    `${r.label} (${r.path})\n  性能=${r.scores.performance}  可访问性=${r.scores.accessibility}  SEO=${r.scores.seo}  最佳实践=${r.scores['best-practices']}\n  FCP=${fmt(r.fcp)}  LCP=${fmt(r.lcp)}  TBT=${fmt(r.tbt)}  CLS=${r.cls?.toFixed(3) ?? 'n/a'}`,
  )
}