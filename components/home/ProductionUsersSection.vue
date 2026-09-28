<script setup lang="ts">
import type { ProductionUser } from '~/shared/types'

defineProps<{ users: ProductionUser[] }>()
</script>

<template>
  <section
    class="production"
    aria-labelledby="production-heading"
  >
    <div class="container">
      <h2
        id="production-heading"
        class="production__heading"
      >
        生产环境中的 Rust
      </h2>
      <p class="production__intro">
        从初创团队到大型企业，许多团队都在生产环境中使用 Rust 完成关键任务。
      </p>
      <ul class="production__list">
        <li
          v-for="user in users"
          :key="user.name"
        >
          <ExternalLink
            v-if="user.caseUrl"
            :to="user.caseUrl"
            class="production__logo production__logo--link"
            :aria-label="`${user.name} 案例`"
          >
            {{ user.name }}
          </ExternalLink>
          <span
            v-else
            class="production__logo"
          >{{ user.name }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.production {
  padding-block: var(--space-7);
  background: var(--color-surface);
}

.production__heading {
  text-align: center;
  margin-block-end: var(--space-3);
}

.production__intro {
  text-align: center;
  color: var(--color-text-muted);
  max-width: 60ch;
  margin-inline: auto;
  margin-block-end: var(--space-5);
}

.production__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-3);
}

.production__logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: var(--space-2) var(--space-5);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-muted);
  font-weight: 700;
  letter-spacing: 0.02em;
}

.production__logo--link:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
  text-decoration: none;
}
</style>
