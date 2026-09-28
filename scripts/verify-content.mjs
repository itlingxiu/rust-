import { readFileSync } from 'node:fs'

const checks = [
  ['index.html', '首页', ['一门让每个人', '为什么选择', '性能', '可靠性', '生产力', '生产环境中的 Rust', 'Amazon Web Services', 'Rust 工具链生态', 'Cargo', 'crates.io', 'Docs.rs', 'Rustup', '准备好开始了吗', '安装 Rust']],
  ['learn/index.html', '学习页', ['学习 Rust', '入门资源', '《Rust 程序设计语言》', 'Rust by Example', 'Rustlings', '标准库文档', '延伸领域', '命令行工具', 'WebAssembly', '嵌入式设备', '前往阅读']],
  ['tools/index.html', '工具页', ['核心工具链', 'Cargo', 'Rustup', 'crates.io', 'Docs.rs', 'Clippy', 'Rustfmt', '编辑器生态', 'rust-analyzer', '访问官网']],
  ['index.html', '页脚', ['开始使用', '政策', '社区', '社交账号', 'GitHub', 'Discord', 'Mozilla Foundation', 'MIT 或 Apache-2.0']],
]

let failed = 0
for (const [file, label, keywords] of checks) {
  const html = readFileSync(`.output/public/${file}`, 'utf8')
  const missing = keywords.filter(k => !html.includes(k))
  if (missing.length === 0) {
    console.log(`[OK] ${label}: ${keywords.length} 个关键内容全部渲染`)
  }
  else {
    failed++
    console.log(`[FAIL] ${label}: 缺失 ${missing.join(' / ')}`)
  }
}

const ext = readFileSync('.output/public/index.html', 'utf8')
const extLinks = (ext.match(/target="_blank"/g) ?? []).length
console.log(`首页外链数(target=_blank): ${extLinks}`)
process.exit(failed > 0 ? 1 : 0)
