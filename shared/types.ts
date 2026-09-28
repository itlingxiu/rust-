// —— 导航与链接 ——
export interface NavLink {
  label: string
  to: string
}

export interface LocaleOption {
  label: string
  path: string
}

export type ExternalLinkKey
  = | 'rustLangHome'
    | 'installPage'
    | 'learnPage'
    | 'theBookZh'
    | 'rustByExample'
    | 'rustlings'
    | 'stdDocs'
    | 'cliBook'
    | 'wasmBook'
    | 'embeddedBook'
    | 'cargo'
    | 'cratesIo'
    | 'docsRs'
    | 'rustup'
    | 'clippy'
    | 'rustfmt'
    | 'rustAnalyzer'
    | 'areWeIdeYet'
    | 'forge'
    | 'usersForum'
    | 'githubOrg'
    | 'x'
    | 'youtube'
    | 'discord'
    | 'codeOfConduct'
    | 'licenses'
    | 'logosPolicy'
    | 'security'
    | 'mediaGuide'
    | 'npmCase'
    | 'discordCase'
    | 'cloudflareCase'
    | 'dropboxCase'

export interface ExternalLinkTarget {
  url: string
  rel: 'noopener noreferrer' | 'noopener noreferrer nofollow'
}

export type IconId
  = 'performance' | 'reliability' | 'productivity'
    | 'github' | 'x' | 'youtube' | 'discord'

export type InternalRoute = '/' | '/learn' | '/tools'

// —— 首页五大区块（C1–C5） ——
export interface HeroContent {
  tagline: string
  description?: string
  cta: CtaLink
}

export interface CtaLink {
  label: string
  target: ExternalLinkKey
}

export interface FeatureItem {
  icon: IconId
  title: string
  description: string
}

export interface ProductionUser {
  name: string
  caseUrl?: ExternalLinkKey
}

export interface EcosystemTool {
  name: string
  description: string
  detail: ExternalLinkKey
}

export interface GetStartedContent {
  heading: string
  description?: string
  buttons: CtaLink[]
}

// —— 学习页（D1–D3） ——
export interface LearnSection {
  id: string
  heading: string
  intro?: string
  resources: LearnResource[]
}

export interface LearnResource {
  title: string
  description: string
  href: ExternalLinkKey
}

// —— 工具页（E1–E2） ——
export interface ToolGroup {
  heading: string
  intro?: string
  tools: ToolEntry[]
}

export interface ToolEntry {
  name: string
  description: string
  href: ExternalLinkKey
}

// —— 页脚（H1–H3） ——
export interface FooterLinkGroup {
  title: string
  links: FooterLink[]
}

export interface FooterLink {
  label: string
  target: ExternalLinkKey | InternalRoute
}

export interface SocialLink {
  platform: string
  icon: IconId
  href: ExternalLinkKey
}
