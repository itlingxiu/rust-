import type {
  EcosystemTool,
  FeatureItem,
  GetStartedContent,
  HeroContent,
  ProductionUser,
} from '../types'

export const HERO: HeroContent = {
  tagline: '一门让每个人都能够构建可靠且高效软件的语言',
  description:
    'Rust 将底层控制力与现代工程体验相结合：没有垃圾回收的负担，却拥有编译期内存安全的保障。',
  cta: { label: '开始使用', target: 'learnPage' },
}

export const FEATURES: FeatureItem[] = [
  {
    icon: 'performance',
    title: '性能',
    description:
      'Rust 速度极快且内存占用低：没有运行时与垃圾回收器，它能胜任性能敏感的服务、运行在嵌入式设备上，并能与多种语言轻松集成。',
  },
  {
    icon: 'reliability',
    title: '可靠性',
    description:
      'Rust 丰富的类型系统与所有权模型让大量内存错误和线程安全错误在编译期就被拦截，程序崩溃更少，行为更可信赖。',
  },
  {
    icon: 'productivity',
    title: '生产力',
    description:
      '完善的文档、报错清晰并给出修复建议的编译器、一体化的包管理与构建工具，以及覆盖主流编辑器的智能支持，让日常开发高效顺畅。',
  },
]

export const PRODUCTION_USERS: ProductionUser[] = [
  { name: 'Amazon Web Services' },
  { name: 'Android' },
  { name: 'Cloudflare', caseUrl: 'cloudflareCase' },
  { name: 'Discord', caseUrl: 'discordCase' },
  { name: 'Dropbox', caseUrl: 'dropboxCase' },
  { name: 'Meta' },
  { name: 'Microsoft' },
  { name: 'npm', caseUrl: 'npmCase' },
  { name: 'Sentry' },
]

export const ECOSYSTEM_TOOLS: EcosystemTool[] = [
  {
    name: 'Cargo',
    description:
      'Rust 官方的包管理器与构建系统：以声明式方式管理依赖，测试、文档与发布开箱即用。',
    detail: 'cargo',
  },
  {
    name: 'crates.io',
    description:
      'Rust 社区的包注册中心，托管着数十万个开源软件包，在这里发现与分享你的成果。',
    detail: 'cratesIo',
  },
  {
    name: 'Docs.rs',
    description:
      '为 crates.io 上发布的每一个软件包自动构建 API 文档，随时可查、无需配置。',
    detail: 'docsRs',
  },
  {
    name: 'Rustup',
    description:
      '官方工具链安装器，一条命令完成 Rust 的安装、升级与多版本管理。',
    detail: 'rustup',
  },
]

export const GET_STARTED: GetStartedContent = {
  heading: '准备好开始了吗？',
  description: '安装 Rust，跟随官方教程写出你的第一个 Rust 程序。',
  buttons: [
    { label: '安装 Rust', target: 'installPage' },
    { label: '开始学习', target: 'learnPage' },
  ],
}
