<script setup lang="ts">
import page from '~/generated/pages/policies__licenses.json'

useSeoMeta({
  title: page.title,
  description: page.description,
  ogTitle: page.title,
  ogDescription: page.description,
  ogUrl: '/policies/licenses',
})
</script>

<template>
  <RustPage :html="page.html" />
</template>
