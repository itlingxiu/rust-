<script setup lang="ts">
import page from '~/generated/pages/community.json'

useSeoMeta({
  title: page.title,
  description: page.description,
  ogTitle: page.title,
  ogDescription: page.description,
  ogUrl: '/community',
})
</script>

<template>
  <RustPage :html="page.html" />
</template>
