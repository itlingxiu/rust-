<script setup lang="ts">
import page from '~/generated/pages/governance__people.json'

useSeoMeta({
  title: page.title,
  description: page.description,
  ogTitle: page.title,
  ogDescription: page.description,
  ogUrl: '/governance/people',
})
</script>

<template>
  <RustPage :html="page.html" />
</template>
