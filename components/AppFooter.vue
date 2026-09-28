<template>
  <footer>
    <div class="w-100 mw-none ph3 mw8-m mw9-l center f3">
      <div class="flex flex-column flex-row-l pv0-l">
        <div
          id="get-help"
          class="flex flex-column mw8 w-100 measure-wide-l pv2 pv5-m pv2-ns ph4-m ph4-l"
        >
          <h4>获得帮助！</h4>
          <ul>
            <li>
              <NuxtLink to="/learn">
                文档
              </NuxtLink>
            </li>
            <li>
              <a href="https://forge.rust-lang.org">Rust Forge（贡献者文档）</a>
            </li>
            <li>
              <a href="https://users.rust-lang.org">在用户论坛提问</a>
            </li>
          </ul>
          <div class="languages">
            <LocaleSwitcher select-id="language-footer" />
          </div>
        </div>
        <div class="flex flex-column mw8 w-100 measure-wide-l pv2 pv5-m pv2-ns ph4-m ph4-l">
          <h4>条款与政策</h4>
          <ul>
            <li>
              <NuxtLink to="/policies/code-of-conduct">
                行为准则
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/policies/licenses">
                许可证
              </NuxtLink>
            </li>
            <li>
              <a href="https://foundation.rust-lang.org/policies/logo-policy-and-media-guide/">商标政策和媒体指南</a>
            </li>
            <li>
              <NuxtLink to="/policies/security">
                安全问题公示
              </NuxtLink>
            </li>
            <li>
              <a href="https://foundation.rust-lang.org/policies/privacy-policy/">隐私声明</a>
            </li>
            <li>
              <NuxtLink to="/policies">
                政策总览
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex flex-column mw8 w-100 measure-wide-l pv2 pv5-m pv2-ns ph4-m ph4-l">
          <h4>社交</h4>
          <div class="flex flex-row flex-wrap items-center">
            <a
              rel="me noopener noreferrer"
              href="https://social.rust-lang.org/@rust"
              target="_blank"
            ><img
              src="/images/mastodon.svg"
              alt="Mastodon 标志"
              title="Mastodon"
            ></a>
            <a
              rel="me noopener noreferrer"
              href="https://bsky.app/profile/rust-lang.org"
              target="_blank"
            ><img
              src="/images/bluesky.svg"
              alt="Bluesky 标志"
              title="Bluesky"
            ></a>
            <a
              href="https://www.youtube.com/channel/UCaYhcUwRBNscFNUKTjgPFiA"
              target="_blank"
              rel="noopener noreferrer"
            ><img
              class="pv2"
              src="/images/youtube.svg"
              alt="YouTube 标志"
              title="YouTube"
            ></a>
            <a
              href="https://github.com/rust-lang"
              target="_blank"
              rel="noopener noreferrer"
            ><img
              src="/images/github.svg"
              alt="GitHub 标志"
              title="GitHub"
            ></a>
          </div>
        </div>
      </div>
      <div class="attribution">
        <p>本站为学习用途的中文复刻，正文来自 Rust 官网简体中文版，与 Rust 团队无隶属关系。</p>
        <p>Rust 和 Rust Logo 是 Mozilla 基金会的商标。</p>
      </div>
    </div>
  </footer>
</template>
