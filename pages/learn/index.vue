<script setup lang="ts">
import page from '~/generated/pages/learn.json'

useSeoMeta({
  title: page.title,
  description: page.description,
  ogTitle: page.title,
  ogDescription: page.description,
  ogUrl: '/learn',
})
</script>

<template>
  <RustPage :html="page.html" />
</template>
