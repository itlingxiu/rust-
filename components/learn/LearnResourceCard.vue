<script setup lang="ts">
import type { LearnResource } from '~/shared/types'

defineProps<{ resource: LearnResource }>()
</script>

<template>
  <article class="resource-card">
    <h3 class="resource-card__title">
      {{ resource.title }}
    </h3>
    <p class="resource-card__description">
      {{ resource.description }}
    </p>
    <ExternalLink
      :to="resource.href"
      class="resource-card__link"
    >
      前往阅读 →
    </ExternalLink>
  </article>
</template>

<style scoped>
.resource-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-5);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.resource-card__title {
  font-size: var(--fs-lg);
}

.resource-card__description {
  flex-grow: 1;
  margin: 0;
  color: var(--color-text-muted);
  font-size: var(--fs-sm);
}

.resource-card__link {
  font-weight: 600;
}
</style>
