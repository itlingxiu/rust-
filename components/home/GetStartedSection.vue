<script setup lang="ts">
import type { GetStartedContent } from '~/shared/types'

defineProps<{ content: GetStartedContent }>()
</script>

<template>
  <section
    class="get-started"
    aria-labelledby="get-started-heading"
  >
    <div class="container get-started__inner">
      <h2
        id="get-started-heading"
        class="get-started__heading"
      >
        {{ content.heading }}
      </h2>
      <p
        v-if="content.description"
        class="get-started__description"
      >
        {{ content.description }}
      </p>
      <div class="get-started__actions">
        <ExternalLink
          v-for="button in content.buttons"
          :key="button.label"
          :to="button.target"
          class="btn btn--primary"
        >
          {{ button.label }}
        </ExternalLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.get-started {
  padding-block: var(--space-8);
  background: var(--color-hero-bg);
  color: var(--color-hero-text);
  text-align: center;
}

.get-started__heading {
  color: var(--color-hero-text);
}

.get-started__description {
  color: var(--color-hero-muted);
  max-width: 46ch;
  margin-inline: auto;
}

.get-started__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-3);
  margin-top: var(--space-5);
}
</style>
