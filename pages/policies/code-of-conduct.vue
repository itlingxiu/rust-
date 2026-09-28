<script setup lang="ts">
import page from '~/generated/pages/policies__code-of-conduct.json'

useSeoMeta({
  title: page.title,
  description: page.description,
  ogTitle: page.title,
  ogDescription: page.description,
  ogUrl: '/policies/code-of-conduct',
})
</script>

<template>
  <RustPage :html="page.html" />
</template>
