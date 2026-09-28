<script setup lang="ts">
import { NAV_ITEMS } from '~/shared/navigation'

const open = ref(false)
const buttonRef = ref<HTMLButtonElement | null>(null)
const panelRef = ref<HTMLElement | null>(null)

const route = useRoute()

function toggleMenu() {
  open.value = !open.value
  if (open.value) {
    nextTick(() => panelRef.value?.focus())
  }
}

function closeMenu(returnFocus = true) {
  open.value = false
  if (returnFocus) {
    buttonRef.value?.focus()
  }
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && open.value) {
    closeMenu()
  }
}

function onClickOutside(event: MouseEvent) {
  const root = buttonRef.value?.closest('.mobile-menu')
  if (open.value && root && event.target instanceof Node && !root.contains(event.target)) {
    closeMenu()
  }
}

watch(() => route.path, () => {
  open.value = false
})

let breakpointQuery: MediaQueryList | null = null
function handleBreakpoint(event: MediaQueryListEvent | MediaQueryList) {
  if (event.matches) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('click', onClickOutside)
  breakpointQuery = window.matchMedia('(min-width: 1024px)')
  handleBreakpoint(breakpointQuery)
  breakpointQuery.addEventListener('change', handleBreakpoint)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.removeEventListener('click', onClickOutside)
  breakpointQuery?.removeEventListener('change', handleBreakpoint)
})
</script>

<template>
  <div class="mobile-menu">
    <button
      ref="buttonRef"
      type="button"
      class="mobile-menu__button"
      aria-label="打开导航菜单"
      :aria-expanded="open ? 'true' : 'false'"
      aria-controls="mobile-menu-panel"
      @click="toggleMenu()"
    >
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      >
        <line
          x1="4"
          y1="7"
          x2="20"
          y2="7"
        />
        <line
          x1="4"
          y1="12"
          x2="20"
          y2="12"
        />
        <line
          x1="4"
          y1="17"
          x2="20"
          y2="17"
        />
      </svg>
    </button>
    <div
      v-if="open"
      id="mobile-menu-panel"
      ref="panelRef"
      class="mobile-menu__panel"
      tabindex="-1"
    >
      <ul class="mobile-menu__list">
        <li
          v-for="item in NAV_ITEMS"
          :key="item.to"
        >
          <NuxtLink
            :to="item.to"
            class="mobile-menu__link"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.mobile-menu {
  position: relative;
}

.mobile-menu__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: var(--radius-md);
  background: transparent;
  color: var(--color-header-text);
}

.mobile-menu__panel {
  position: absolute;
  top: calc(100% + var(--space-2));
  right: 0;
  z-index: 20;
  min-width: 12rem;
  padding: var(--space-2);
  background: var(--color-header-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  outline-offset: -2px;
}

.mobile-menu__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mobile-menu__link {
  display: flex;
  align-items: center;
  min-height: 44px;
  padding-inline: var(--space-3);
  border-radius: var(--radius-sm);
  color: var(--color-header-text);
}

.mobile-menu__link:hover {
  background: var(--gray-800);
  text-decoration: none;
}

@media (min-width: 1024px) {
  .mobile-menu {
    display: none;
  }
}
</style>
