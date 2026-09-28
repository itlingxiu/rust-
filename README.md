# rust-lang-nuxt

使用 Nuxt 3 复刻 [rust-lang.org/zh-CN](https://rust-lang.org/zh-CN/) 的页面结构与视觉呈现的纯静态站点（SSG）。

## 内容基准快照

- **锁定日期**：2026-09-12
- **基准来源**：rust-lang.org/zh-CN/ 线上站点（内容信息架构与外链清单以该快照为唯一基准）
- 原站源码仓库 [rust-lang/www.rust-lang.org](https://github.com/rust-lang/www.rust-lang.org) 采用 MIT / Apache-2.0 双许可，本项目文案与素材的使用遵循该许可，详见 [NOTICE.md](./NOTICE.md)

## 快速开始

```bash
npm install && npm run dev
```

浏览器访问 `http://localhost:3000` 即可预览。

## 构建

```bash
npm run generate
```

产物输出至 `.output/public`，为纯静态文件（含 `index.html`、`learn/index.html`、`tools/index.html`、`404.html`、`robots.txt`、`sitemap.xml`、`favicon.svg`）。

### 质量门禁

```bash
npm run lint        # ESLint 代码质量检查
npm run typecheck   # TypeScript strict 类型检查
npm run generate    # SSG 静态生成
node scripts/audit.mjs   # Lighthouse 三页跑分（需本机安装 Chrome）
npm run check-links # 外链登记表可达性批量校验（仅警告，不阻断）
```

## 部署

将 `.output/public` 整目录上传至任意静态托管（Nginx、对象存储 + CDN、GitHub Pages、Netlify、Vercel 等）。

### 站点 URL 配置

`sitemap.xml` 与 `>robots.txt` 中的站点地址由 `SITE_URL` 环境变量驱动，构建前注入：

```bash
SITE_URL=https://your-domain.com npm run generate
```

### 404 错误页配置

SSG 模式下 404 状态码由托管平台返回。本项目已生成根级 `404.html`（含静态可读内容，无 JS 时亦可正常显示）。各平台将其指定为错误文档：

**Nginx**：
```nginx
error_page 404 /404.html;
```

**对象存储 + CDN（如华为云 OBS / AWS S3）**：在桶的「错误文档」配置中填入 `404.html`。

**Netlify / Vercel**：默认识别根级 `404.html`，无需额外配置。

## 内容更新

所有文案集中于 `shared/content/` 目录（`home.ts` / `learn.ts` / `tools.ts` / `footer.ts`），与组件解耦。更新流程：

1. 修改 `shared/content/` 下对应文件；
2. 若新增外链，先在 `shared/external-links.ts` 登记表与 `shared/types.ts` 的 `ExternalLinkKey` 联合类型中追加键；
3. 执行 `npm run lint && npm run typecheck` 确认类型安全；
4. 执行 `npm run generate` 重新构建产物后部署。

## 项目结构

```
rust-lang-nuxt/
├── assets/css/          # Design Tokens / 基础样式 / 工具类
├── components/          # 页头/页脚/导航/主题/外链/区块组件
│   ├── home/            # 首页五大区块
│   ├── learn/           # 学习页资源卡片
│   └── tools/           # 工具页条目卡片
├── composables/         # useTheme 主题状态
├── layouts/             # 默认布局（页头 + main + 页脚）
├── pages/               # 首页 / learn / tools / catch-all 404
├── shared/              # 内容数据层（类型契约 + 外链登记 + 文案）
│   └── content/
├── scripts/             # SEO 生成 / 外链校验 / Lighthouse 审计
├── public/              # favicon / robots / sitemap
└── spa-fallback.html    # 404 静态兜底内容
```

## 许可声明

本项目复用的原站文案与素材源自 rust-lang/www.rust-lang.org，遵循 MIT / Apache-2.0 双许可；Rust 与 Rust Logo 为 Mozilla 基金会商标。声明全文见 [NOTICE.md](./NOTICE.md)。