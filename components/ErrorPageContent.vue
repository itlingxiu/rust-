<script setup lang="ts">
defineProps<{ code: number }>()
</script>

<template>
  <div class="error-panel">
    <p
      class="error-panel__code"
      aria-hidden="true"
    >
      {{ code }}
    </p>
    <h1 class="error-panel__title">
      页面未找到
    </h1>
    <p class="error-panel__description">
      您访问的地址不存在或已被移动，请从页头导航或首页继续浏览。
    </p>
    <slot />
  </div>
</template>
