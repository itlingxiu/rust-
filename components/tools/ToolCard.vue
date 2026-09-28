<script setup lang="ts">
import type { ToolEntry } from '~/shared/types'

defineProps<{ entry: ToolEntry }>()
</script>

<template>
  <article class="tool-card">
    <h3 class="tool-card__name">
      {{ entry.name }}
    </h3>
    <p class="tool-card__description">
      {{ entry.description }}
    </p>
    <ExternalLink
      :to="entry.href"
      class="tool-card__link"
    >
      访问官网 →
    </ExternalLink>
  </article>
</template>

<style scoped>
.tool-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-5);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.tool-card__name {
  font-size: var(--fs-lg);
  color: var(--color-accent);
}

.tool-card__description {
  flex-grow: 1;
  margin: 0;
  color: var(--color-text-muted);
  font-size: var(--fs-sm);
}

.tool-card__link {
  font-weight: 600;
}
</style>
