<script setup lang="ts">
import page from '~/generated/pages/policies__security.json'

useSeoMeta({
  title: page.title,
  description: page.description,
  ogTitle: page.title,
  ogDescription: page.description,
  ogUrl: '/policies/security',
})
</script>

<template>
  <RustPage :html="page.html" />
</template>
