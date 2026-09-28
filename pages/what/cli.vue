<script setup lang="ts">
import page from '~/generated/pages/what__cli.json'

useSeoMeta({
  title: page.title,
  description: page.description,
  ogTitle: page.title,
  ogDescription: page.description,
  ogUrl: '/what/cli',
})
</script>

<template>
  <RustPage :html="page.html" />
</template>
