<script setup lang="ts">
import { EXTERNAL_LINKS } from '~/shared/external-links'
import type { ExternalLinkKey } from '~/shared/types'

const props = defineProps<{ to: ExternalLinkKey }>()

const target = EXTERNAL_LINKS[props.to]
</script>

<template>
  <a
    :href="target.url"
    target="_blank"
    :rel="target.rel"
  >
    <slot />
  </a>
</template>
