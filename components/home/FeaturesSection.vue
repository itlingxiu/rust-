<script setup lang="ts">
import type { FeatureItem } from '~/shared/types'

defineProps<{ items: FeatureItem[] }>()
</script>

<template>
  <section
    class="features"
    aria-labelledby="features-heading"
  >
    <div class="container">
      <h2
        id="features-heading"
        class="features__heading"
      >
        为什么选择 Rust？
      </h2>
      <div class="grid grid--desktop-3 features__grid">
        <article
          v-for="feature in items"
          :key="feature.title"
          class="feature"
        >
          <div class="feature__icon">
            <AppIcon :icon="feature.icon" />
          </div>
          <h3 class="feature__title">
            {{ feature.title }}
          </h3>
          <p class="feature__description">
            {{ feature.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  padding-block: var(--space-7);
}

.features__heading {
  text-align: center;
  margin-block-end: var(--space-6);
}

.feature {
  padding: var(--space-5);
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}

.feature__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-full);
  background: var(--color-bg);
  color: var(--color-accent);
  margin-block-end: var(--space-3);
}

.feature__title {
  margin-block-end: var(--space-2);
}

.feature__description {
  margin: 0;
  color: var(--color-text-muted);
}
</style>
