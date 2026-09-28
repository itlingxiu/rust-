import { EXTERNAL_LINKS } from '../shared/external-links.ts'

const entries = Object.entries(EXTERNAL_LINKS)
const results = []

for (const [key, { url }] of entries) {
  try {
    const res = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: AbortSignal.timeout(15000),
    })
    results.push({ key, url, status: res.status, ok: res.ok })
  }
  catch (err) {
    results.push({ key, url, status: null, ok: false, error: err.cause?.code ?? err.message })
  }
}

let unreachable = 0
for (const r of results) {
  if (r.ok) {
    console.log(`[OK]   ${r.key}  ${r.url} (${r.status})`)
  }
  else {
    unreachable++
    console.warn(`[FAIL] ${r.key}  ${r.url} (${r.status ?? r.error ?? 'unreachable'})`)
  }
}

console.log(`\nTotal: ${results.length}, reachable: ${results.length - unreachable}, unreachable: ${unreachable}`)

if (unreachable > 0) {
  console.warn('Warning: unreachable links reported above; build is not blocked.')
}
