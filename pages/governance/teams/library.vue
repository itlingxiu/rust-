<script setup lang="ts">
import page from '~/generated/pages/governance__teams__library.json'

useSeoMeta({
  title: page.title,
  description: page.description,
  ogTitle: page.title,
  ogDescription: page.description,
  ogUrl: '/governance/teams/library',
})
</script>

<template>
  <RustPage :html="page.html" />
</template>
