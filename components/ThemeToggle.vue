<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { mode, toggle } = useTheme()

const label = computed(() =>
  mode.value === 'dark' ? '切换到亮色主题' : '切换到暗色主题',
)
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    :aria-label="label"
    @click="toggle()"
  >
    <svg
      v-if="mode === 'dark'"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    >
      <circle
        cx="12"
        cy="12"
        r="4.5"
      />
      <line
        x1="12"
        y1="1.5"
        x2="12"
        y2="3.5"
      />
      <line
        x1="12"
        y1="20.5"
        x2="12"
        y2="22.5"
      />
      <line
        x1="1.5"
        y1="12"
        x2="3.5"
        y2="12"
      />
      <line
        x1="20.5"
        y1="12"
        x2="22.5"
        y2="12"
      />
      <line
        x1="4.6"
        y1="4.6"
        x2="6"
        y2="6"
      />
      <line
        x1="18"
        y1="18"
        x2="19.4"
        y2="19.4"
      />
      <line
        x1="4.6"
        y1="19.4"
        x2="6"
        y2="18"
      />
      <line
        x1="18"
        y1="6"
        x2="19.4"
        y2="4.6"
      />
    </svg>
    <svg
      v-else
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M20.6 14.2A9 9 0 0 1 9.8 3.4a9 9 0 1 0 10.8 10.8Z" />
    </svg>
  </button>
</template>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: var(--radius-full);
  background: transparent;
  color: var(--color-header-text);
}

.theme-toggle:hover {
  background: var(--gray-800);
}
</style>
