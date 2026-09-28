<script setup lang="ts">
import page from '~/generated/pages/what__wasm.json'

useSeoMeta({
  title: page.title,
  description: page.description,
  ogTitle: page.title,
  ogDescription: page.description,
  ogUrl: '/what/wasm',
})
</script>

<template>
  <RustPage :html="page.html" />
</template>
