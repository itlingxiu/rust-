<template>
  <div class="layout-root">
    <a
      class="skip-link"
      href="#main-content"
    >跳转到主要内容</a>
    <AppHeader />
    <main id="main-content">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
