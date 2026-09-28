<template>
  <nav
    class="flex flex-row justify-center justify-end-l items-center flex-wrap ph2 pl3-ns pr3-ns pb3"
    aria-label="主导航"
  >
    <div class="brand flex-auto w-100 w-auto-l self-start tc tl-l">
      <NuxtLink
        to="/"
        class="brand"
        aria-label="Rust 首页"
      >
        <img
          class="v-mid ml0-l"
          alt="Rust 标志"
          src="/images/rust-logo-blk.svg"
        >
        <span class="dib ml1 ml0-l">Rust</span>
      </NuxtLink>
    </div>

    <ul class="nav list w-100 w-auto-l flex flex-none flex-row flex-wrap justify-center justify-end-l items-center pv2 ph0 ph4-ns">
      <li class="tc pv2 ph2 ph4-ns flex-20-s">
        <NuxtLink to="/tools/install">
          安装
        </NuxtLink>
      </li>
      <li class="tc pv2 ph2 ph4-ns flex-20-s">
        <NuxtLink to="/learn">
          学习
        </NuxtLink>
      </li>
      <li class="tc pv2 ph2 ph4-ns flex-20-s">
        <a href="https://play.rust-lang.org/">实验</a>
      </li>
      <li class="tc pv2 ph2 ph4-ns flex-20-s">
        <NuxtLink to="/tools">
          工具
        </NuxtLink>
      </li>
      <li class="tc pv2 ph2 ph4-ns flex-20-s">
        <NuxtLink to="/governance">
          团队
        </NuxtLink>
      </li>
      <li class="tc pv2 ph2 ph4-ns flex-20-s">
        <NuxtLink to="/funding">
          赞助
        </NuxtLink>
      </li>
      <li class="tc pv2 ph2 ph4-ns flex-20-s">
        <NuxtLink to="/community">
          社区
        </NuxtLink>
      </li>
      <li class="tc pv2 ph2 ph4-ns flex-20-s">
        <a href="https://blog.rust-lang.org/">博客</a>
      </li>
    </ul>

    <div class="w-100 w-auto-l flex-none flex justify-center pv4 pv-0-l languages">
      <LocaleSwitcher select-id="language-nav" />
    </div>
  </nav>
</template>
