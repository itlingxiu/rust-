import { readFileSync } from 'node:fs'

const prerenderRoutes = JSON.parse(readFileSync(new URL('./generated/routes.json', import.meta.url), 'utf8')) as string[]

const platformScript
  = `(function(){try{var p=navigator.platform||navigator.userAgent||'';document.documentElement.setAttribute('data-platform',/Win/i.test(p)?'win':'unix')}catch(e){document.documentElement.setAttribute('data-platform','unix')}})();`

export default defineNuxtConfig({

  modules: ['@nuxt/eslint'], components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      title: 'Rust 程序设计语言',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Rust 是一门注重性能、可靠性与生产效率的系统级编程语言，帮助每个人构建可靠且高效的软件。',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Rust 程序设计语言' },
        { property: 'og:locale', content: 'zh_CN' },
        { name: 'theme-color', content: '#000000' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },

      ],
      script: [{ innerHTML: platformScript }],
    },
  },
  css: [
    '~/assets/css/vendor.css',
    '~/assets/css/fonts.css',
    '~/assets/css/rust-app.css',
    '~/assets/css/site-extras.css',
  ],
  spaLoadingTemplate: 'spa-fallback.html',
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL || 'https://rust-lang-nuxt.example.com',
    },
  },
  compatibilityDate: '2026-09-27',
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: prerenderRoutes,
    },
  },
  typescript: {
    strict: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
