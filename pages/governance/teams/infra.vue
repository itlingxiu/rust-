<script setup lang="ts">
import page from '~/generated/pages/governance__teams__infra.json'

useSeoMeta({
  title: page.title,
  description: page.description,
  ogTitle: page.title,
  ogDescription: page.description,
  ogUrl: '/governance/teams/infra',
})
</script>

<template>
  <RustPage :html="page.html" />
</template>
