<script setup lang="ts">
import type { HeroContent } from '~/shared/types'

defineProps<{ content: HeroContent }>()
</script>

<template>
  <section class="hero">
    <div class="container hero__inner">
      <h1 class="hero__tagline">
        {{ content.tagline }}
      </h1>
      <p
        v-if="content.description"
        class="hero__description"
      >
        {{ content.description }}
      </p>
      <ExternalLink
        :to="content.cta.target"
        class="btn btn--primary hero__cta"
      >
        {{ content.cta.label }}
      </ExternalLink>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: var(--color-hero-bg);
  color: var(--color-hero-text);
  padding-block: var(--space-8);
  text-align: center;
}

.hero__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__tagline {
  max-width: 22ch;
  color: var(--color-hero-text);
  font-size: var(--fs-2xl);
}

.hero__description {
  max-width: 42ch;
  margin-block: var(--space-4) var(--space-6);
  color: var(--color-hero-muted);
}

@media (min-width: 1024px) {
  .hero {
    padding-block: var(--space-8) calc(var(--space-8) + var(--space-2));
  }

  .hero__tagline {
    font-size: var(--fs-3xl);
  }
}
</style>
