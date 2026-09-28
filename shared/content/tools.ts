import type { ToolEntry, ToolGroup } from '../types'

export const TOOL_GROUPS: ToolGroup[] = [
  {
    heading: '核心工具链',
    intro: '从安装到发布，Rust 官方与社区提供了一套完整且风格统一的工具链。',
    tools: [
      {
        name: 'Cargo',
        description:
          'Rust 官方的包管理器与构建系统：声明式管理依赖，运行测试、生成文档与发布软件包一应俱全。',
        href: 'cargo',
      },
      {
        name: 'Rustup',
        description:
          '官方工具链安装器，负责安装与维护 Rust 编译器及配套组件，支持多版本并存与随时切换。',
        href: 'rustup',
      },
      {
        name: 'crates.io',
        description:
          'Rust 社区的中央包注册中心，托管着数十万个开源软件包（crate），是生态发现与分发的枢纽。',
        href: 'cratesIo',
      },
      {
        name: 'Docs.rs',
        description:
          '为 crates.io 上的每个软件包自动构建并托管 API 文档的免费服务，无需任何配置。',
        href: 'docsRs',
      },
      {
        name: 'Clippy',
        description:
          '官方 Linter，内置数百条检查规则，帮助你写出更符合习惯用法的高质量 Rust 代码。',
        href: 'clippy',
      },
      {
        name: 'Rustfmt',
        description:
          '官方代码格式化工具，让整个社区的 Rust 代码保持统一而整洁的排版风格。',
        href: 'rustfmt',
      },
    ],
  },
]

export const EDITOR_INTRO
  = '借助 Rust Language Server 的官方实现 rust-analyzer，主流编辑器与 IDE 都能为 Rust 提供补全、跳转与重构等一等开发体验。'

export const EDITORS: ToolEntry[] = [
  {
    name: 'rust-analyzer',
    description:
      '官方推荐的 Rust Language Server，为各类编辑器提供智能补全、定义跳转与内联错误提示等能力。',
    href: 'rustAnalyzer',
  },
  {
    name: 'IDE 支持总览',
    description:
      '查看 Visual Studio Code、IntelliJ IDEA、Vim、Emacs、Zed 等编辑器的 Rust 插件与配置指引。',
    href: 'areWeIdeYet',
  },
]
