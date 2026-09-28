import { readonly, ref, watch } from 'vue'

type ThemeMode = 'light' | 'dark'
type UserPreference = ThemeMode | null

const STORAGE_KEY = 'rust-lang-nuxt:theme'

const userPreference = ref<UserPreference>(null)
const mode = ref<ThemeMode>('light')

let initialized = false
let systemQuery: MediaQueryList | null = null
let systemHandler: ((event: MediaQueryListEvent) => void) | null = null

function readStoredPreference(): UserPreference {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'dark' || value === 'light' ? value : null
  }
  catch {
    return null
  }
}

function writeStoredPreference(value: UserPreference) {
  try {
    if (value === null) {
      localStorage.removeItem(STORAGE_KEY)
    }
    else {
      localStorage.setItem(STORAGE_KEY, value)
    }
  }
  catch {
    return undefined
  }
}

function applyTheme(value: ThemeMode) {
  if (import.meta.client) {
    document.documentElement.setAttribute('data-theme', value)
  }
}

function bindSystemPreference() {
  if (!import.meta.client || systemQuery || !window.matchMedia) return
  systemQuery = window.matchMedia('(prefers-color-scheme: dark)')
  systemHandler = (event: MediaQueryListEvent) => {
    if (userPreference.value === null) {
      mode.value = event.matches ? 'dark' : 'light'
      applyTheme(mode.value)
    }
  }
  systemQuery.addEventListener('change', systemHandler)
}

function unbindSystemPreference() {
  if (systemQuery && systemHandler) {
    systemQuery.removeEventListener('change', systemHandler)
    systemQuery = null
    systemHandler = null
  }
}

function syncSystemListener() {
  if (userPreference.value === null) {
    bindSystemPreference()
  }
  else {
    unbindSystemPreference()
  }
}

watch(userPreference, (value) => {
  if (!import.meta.client) return
  mode.value = value ?? (systemQuery?.matches ? 'dark' : 'light')
  applyTheme(mode.value)
  writeStoredPreference(value)
  syncSystemListener()
})

function toggle() {
  userPreference.value = mode.value === 'dark' ? 'light' : 'dark'
}

export function useTheme() {
  if (import.meta.client && !initialized) {
    initialized = true
    userPreference.value = readStoredPreference()
    const current = document.documentElement.getAttribute('data-theme')
    mode.value = userPreference.value ?? (current === 'dark' ? 'dark' : 'light')
    syncSystemListener()
  }

  return {
    mode: readonly(mode),
    userPreference: readonly(userPreference),
    toggle,
  }
}
