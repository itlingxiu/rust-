<script setup lang="ts">
import page from '~/generated/pages/funding.json'

useSeoMeta({
  title: page.title,
  description: page.description,
  ogTitle: page.title,
  ogDescription: page.description,
  ogUrl: '/funding',
})
</script>

<template>
  <RustPage :html="page.html" />
</template>
