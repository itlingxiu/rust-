<script setup lang="ts">
import { NAV_ITEMS } from '~/shared/navigation'

const route = useRoute()

function isActive(to: string) {
  if (to === '/') {
    return route.path === '/'
  }
  return route.path === to || route.path.startsWith(`${to}/`)
}
</script>

<template>
  <nav
    aria-label="主导航"
    class="site-nav"
  >
    <ul class="site-nav__list">
      <li
        v-for="item in NAV_ITEMS"
        :key="item.to"
      >
        <NuxtLink
          :to="item.to"
          class="site-nav__link"
          :class="{ 'site-nav__link--active': isActive(item.to) }"
          :aria-current="isActive(item.to) ? 'page' : undefined"
        >
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.site-nav__list {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  list-style: none;
  margin: 0;
  padding: 0;
}

.site-nav__link {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: var(--color-header-text);
  font-weight: 500;
}

.site-nav__link--active {
  color: var(--color-accent);
  font-weight: 700;
}
</style>
