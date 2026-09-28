<script setup lang="ts">
import type { EcosystemTool } from '~/shared/types'

defineProps<{ tools: EcosystemTool[] }>()
</script>

<template>
  <section
    class="ecosystem"
    aria-labelledby="ecosystem-heading"
  >
    <div class="container">
      <h2
        id="ecosystem-heading"
        class="ecosystem__heading"
      >
        Rust 工具链生态
      </h2>
      <div class="grid grid--desktop-4 grid--tablet-2 ecosystem__grid">
        <article
          v-for="tool in tools"
          :key="tool.name"
          class="ecosystem__card"
        >
          <h3 class="ecosystem__name">
            {{ tool.name }}
          </h3>
          <p class="ecosystem__description">
            {{ tool.description }}
          </p>
          <ExternalLink
            :to="tool.detail"
            class="ecosystem__link"
          >
            了解更多 →
          </ExternalLink>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ecosystem {
  padding-block: var(--space-7);
}

.ecosystem__heading {
  text-align: center;
  margin-block-end: var(--space-6);
}

.ecosystem__card {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-5);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.ecosystem__name {
  color: var(--color-accent);
}

.ecosystem__description {
  flex-grow: 1;
  margin: 0;
  color: var(--color-text-muted);
  font-size: var(--fs-sm);
}

.ecosystem__link {
  font-weight: 600;
}
</style>
