<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

useSeoMeta({
  title: '页面未找到 - Rust 程序设计语言',
  description: '您访问的页面不存在。',
  robots: 'noindex',
})

function goHome() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div>
    <a
      class="skip-link"
      href="#main-content"
    >跳转到主要内容</a>
    <AppHeader />
    <main id="main-content">
      <ErrorPageContent :code="props.error.statusCode">
        <button
          type="button"
          class="button-home"
          @click="goHome()"
        >
          返回首页
        </button>
      </ErrorPageContent>
    </main>
    <AppFooter />
  </div>
</template>
