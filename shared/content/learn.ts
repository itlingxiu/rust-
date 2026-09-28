import type { LearnSection } from '../types'

export const LEARN_INTRO
  = '无论你是刚接触编程的新手，还是希望把 Rust 带入生产环境的资深工程师，以下资源都能帮助你循序渐进地掌握这门语言。'

export const LEARN_SECTIONS: LearnSection[] = [
  {
    id: 'getting-started',
    heading: '入门资源',
    intro: '从最全面的官方教程开始，配合动手练习，逐步建立对 Rust 的完整认知。',
    resources: [
      {
        title: '《Rust 程序设计语言》',
        description:
          '被亲切地称为 “the Book” 的官方教程，系统讲解所有权、生命周期与类型系统等核心概念，并提供社区维护的中文译本。',
        href: 'theBookZh',
      },
      {
        title: 'Rust by Example',
        description:
          '通过一系列可直接运行的示例学习 Rust，适合喜欢边读代码边理解概念的读者。',
        href: 'rustByExample',
      },
      {
        title: 'Rustlings',
        description:
          'Rust 团队维护的一组小型练习，引导你通过修复代码逐步上手语法细节与常见陷阱。',
        href: 'rustlings',
      },
      {
        title: '标准库文档',
        description:
          '标准库（std）的完整 API 参考，熟悉标准库是写出地道 Rust 代码的重要一步。',
        href: 'stdDocs',
      },
    ],
  },
  {
    id: 'domains',
    heading: '延伸领域',
    intro: '掌握基础之后，可以从这些专题文档入手，把 Rust 带到更多应用场景。',
    resources: [
      {
        title: '命令行工具',
        description:
          '学习用 Rust 构建快速、可靠的命令行应用，从参数解析、错误处理到打包分发。',
        href: 'cliBook',
      },
      {
        title: 'WebAssembly',
        description:
          '把 Rust 编译为 WebAssembly，在浏览器与边缘计算环境中获得接近原生的性能。',
        href: 'wasmBook',
      },
      {
        title: '嵌入式设备',
        description:
          '在资源受限的微控制器上运行 Rust，以零开销抽象编写安全且高效的固件。',
        href: 'embeddedBook',
      },
    ],
  },
]
