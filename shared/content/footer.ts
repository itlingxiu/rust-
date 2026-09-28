import type { FooterLinkGroup, SocialLink } from '../types'

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: '开始使用',
    links: [
      { label: '首页', target: '/' },
      { label: '学习', target: '/learn' },
      { label: '工具', target: '/tools' },
      { label: '安装 Rust', target: 'installPage' },
    ],
  },
  {
    title: '政策',
    links: [
      { label: '行为准则', target: 'codeOfConduct' },
      { label: '许可证', target: 'licenses' },
      { label: 'Logo 政策', target: 'logosPolicy' },
      { label: '安全漏洞报告', target: 'security' },
      { label: '媒体指南', target: 'mediaGuide' },
    ],
  },
  {
    title: '社区',
    links: [
      { label: '用户论坛', target: 'usersForum' },
      { label: 'Rust Forge', target: 'forge' },
      { label: 'GitHub 组织', target: 'githubOrg' },
    ],
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', icon: 'github', href: 'githubOrg' },
  { platform: 'X（Twitter）', icon: 'x', href: 'x' },
  { platform: 'YouTube', icon: 'youtube', href: 'youtube' },
  { platform: 'Discord', icon: 'discord', href: 'discord' },
]

export const LICENSE_NOTICE: string[] = [
  '本站为学习性质的原站复刻实现，与 Rust 项目及 Mozilla 基金会无隶属关系。',
  'Rust 和 Rust Logo 是 Mozilla Foundation 的商标。',
  '原站内容采用 MIT 或 Apache-2.0 双许可发布，本项目对其文案与素材的使用遵循该许可，详见 NOTICE.md。',
]
