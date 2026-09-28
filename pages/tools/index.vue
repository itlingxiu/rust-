<script setup lang="ts">
import page from '~/generated/pages/tools.json'

useSeoMeta({
  title: page.title,
  description: page.description,
  ogTitle: page.title,
  ogDescription: page.description,
  ogUrl: '/tools',
})
</script>

<template>
  <RustPage :html="page.html" />
</template>
