<script setup lang="ts">
defineProps<{
  selectId: string
}>()

const route = useRoute()
const current = ref('zh-CN')

const locales = [
  { value: 'en-US', label: 'English (en-US)' },
  { value: 'es', label: 'Español (es)' },
  { value: 'fr', label: 'Français (fr)' },
  { value: 'it', label: 'Italiano (it)' },
  { value: 'ja', label: '日本語 (ja)' },
  { value: 'pt-BR', label: 'Português (pt-BR)' },
  { value: 'ru', label: 'Русский (ru)' },
  { value: 'tr', label: 'Türkçe (tr)' },
  { value: 'zh-CN', label: '简体中文 (zh-CN)' },
  { value: 'zh-TW', label: '正體中文 (zh-TW)' },
]

function onChange() {
  if (current.value === 'zh-CN')
    return
  const path = route.path === '/' ? '/' : route.path
  window.location.href = `https://www.rust-lang.org/${current.value}${path}`
}
</script>

<template>
  <div class="select">
    <label
      class="hidden"
      :for="selectId"
    >语言</label>
    <select
      :id="selectId"
      v-model="current"
      data-current-lang="zh-CN"
      @change="onChange"
    >
      <option
        v-for="locale in locales"
        :key="locale.value"
        :value="locale.value"
        :title="locale.label"
      >
        {{ locale.label }}
      </option>
    </select>
  </div>
</template>
