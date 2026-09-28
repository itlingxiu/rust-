import type { LocaleOption, NavLink } from './types'

export const NAV_ITEMS: NavLink[] = [
  { label: '安装', to: '/tools/install' },
  { label: '学习', to: '/learn' },
  { label: '工具', to: '/tools' },
  { label: '团队', to: '/governance' },
  { label: '赞助', to: '/funding' },
  { label: '社区', to: '/community' },
]

export const LOCALE_OPTIONS: LocaleOption[] = [
  { label: 'English', path: '' },
  { label: 'Deutsch', path: 'de/' },
  { label: 'Español', path: 'es/' },
  { label: 'Français', path: 'fr/' },
  { label: 'Italiano', path: 'it/' },
  { label: '日本語', path: 'ja/' },
  { label: '한국어', path: 'ko/' },
  { label: 'Polski', path: 'pl/' },
  { label: 'Português', path: 'pt-BR/' },
  { label: 'Русский', path: 'ru/' },
  { label: 'Türkçe', path: 'tr/' },
  { label: 'Українська', path: 'uk/' },
  { label: '简体中文', path: 'zh-CN/' },
  { label: '繁體中文', path: 'zh-TW/' },
]
