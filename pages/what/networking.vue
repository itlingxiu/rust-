<script setup lang="ts">
import page from '~/generated/pages/what__networking.json'

useSeoMeta({
  title: page.title,
  description: page.description,
  ogTitle: page.title,
  ogDescription: page.description,
  ogUrl: '/what/networking',
})
</script>

<template>
  <RustPage :html="page.html" />
</template>
