export default defineNuxtPlugin(() => {
  document.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0)
      return
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
      return
    const target = event.target
    if (!(target instanceof Element))
      return

    const copyButton = target.closest('.copy-code-btn')
    if (copyButton) {
      event.preventDefault()
      void copyCommand(copyButton)
      return
    }

    const anchor = target.closest('a')
    if (!anchor)
      return
    const href = anchor.getAttribute('href')
    if (!href || anchor.getAttribute('target') === '_blank' || anchor.hasAttribute('download'))
      return
    if (/^(https?:|mailto:|tel:)/i.test(href) || href.startsWith('#'))
      return
    event.preventDefault()
    void navigateTo(href)
  })
})

async function copyCommand(button: Element) {
  const code = button.parentElement?.querySelector('code')?.textContent?.trim()
  const label = button.querySelector('.copy-code-btn__text')
  if (!code || !label)
    return
  try {
    await navigator.clipboard.writeText(code)
    button.classList.add('copied')
    label.textContent = '已复制'
    window.setTimeout(() => {
      button.classList.remove('copied')
      label.textContent = '复制'
    }, 2000)
  }
  catch {
    label.textContent = '复制失败'
  }
}
