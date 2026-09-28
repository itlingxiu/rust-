<script setup lang="ts">
import page from '~/generated/pages/learn__get-started.json'

useSeoMeta({
  title: page.title,
  description: page.description,
  ogTitle: page.title,
  ogDescription: page.description,
  ogUrl: '/learn/get-started',
})
</script>

<template>
  <RustPage :html="page.html" />
</template>
