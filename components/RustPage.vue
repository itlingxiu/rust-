<script setup lang="ts">
defineProps<{
  html: string
}>()
</script>

<template>
  <!-- 正文来自构建时写入的官网中文快照 -->
  <!-- eslint-disable vue/no-v-html -->
  <div
    class="rust-page"
    v-html="html"
  />
</template>
