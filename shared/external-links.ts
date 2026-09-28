import type { ExternalLinkKey, ExternalLinkTarget } from './types'

export const SITE_LANG_REDIRECT_BASE = 'https://www.rust-lang.org/'

export const EXTERNAL_LINKS: Record<ExternalLinkKey, ExternalLinkTarget> = {
  rustLangHome: { url: 'https://www.rust-lang.org/', rel: 'noopener noreferrer' },
  installPage: { url: 'https://www.rust-lang.org/tools/install', rel: 'noopener noreferrer' },
  learnPage: { url: 'https://www.rust-lang.org/zh-CN/learn', rel: 'noopener noreferrer' },

  theBookZh: { url: 'https://kaisery.github.io/trpl-zh-cn/', rel: 'noopener noreferrer' },
  rustByExample: { url: 'https://doc.rust-lang.org/rust-by-example/', rel: 'noopener noreferrer' },
  rustlings: { url: 'https://github.com/rust-lang/rustlings/', rel: 'noopener noreferrer' },
  stdDocs: { url: 'https://doc.rust-lang.org/std/', rel: 'noopener noreferrer' },

  cliBook: { url: 'https://rust-cli.github.io/book/', rel: 'noopener noreferrer' },
  wasmBook: { url: 'https://rustwasm.github.io/docs/book/', rel: 'noopener noreferrer' },
  embeddedBook: { url: 'https://docs.rust-embedded.org/book/', rel: 'noopener noreferrer' },

  cargo: { url: 'https://doc.rust-lang.org/cargo/', rel: 'noopener noreferrer' },
  cratesIo: { url: 'https://crates.io/', rel: 'noopener noreferrer' },
  docsRs: { url: 'https://docs.rs/', rel: 'noopener noreferrer' },
  rustup: { url: 'https://rustup.rs/', rel: 'noopener noreferrer' },
  clippy: { url: 'https://github.com/rust-lang/rust-clippy', rel: 'noopener noreferrer' },
  rustfmt: { url: 'https://github.com/rust-lang/rustfmt', rel: 'noopener noreferrer' },
  rustAnalyzer: { url: 'https://rust-analyzer.github.io/', rel: 'noopener noreferrer' },
  areWeIdeYet: { url: 'https://areweideyet.com/', rel: 'noopener noreferrer' },

  forge: { url: 'https://forge.rust-lang.org/', rel: 'noopener noreferrer' },
  usersForum: { url: 'https://users.rust-lang.org/', rel: 'noopener noreferrer' },
  githubOrg: { url: 'https://github.com/rust-lang', rel: 'noopener noreferrer' },

  x: { url: 'https://twitter.com/rustlang', rel: 'noopener noreferrer' },
  youtube: { url: 'https://www.youtube.com/user/rustvideos', rel: 'noopener noreferrer' },
  discord: { url: 'https://discord.gg/rust-lang', rel: 'noopener noreferrer' },

  codeOfConduct: { url: 'https://www.rust-lang.org/policies/code-of-conduct', rel: 'noopener noreferrer' },
  licenses: { url: 'https://www.rust-lang.org/policies/licenses', rel: 'noopener noreferrer' },
  logosPolicy: { url: 'https://www.rust-lang.org/policies/logos', rel: 'noopener noreferrer' },
  security: { url: 'https://www.rust-lang.org/policies/security', rel: 'noopener noreferrer' },
  mediaGuide: { url: 'https://www.rust-lang.org/policies/media-guide', rel: 'noopener noreferrer' },

  npmCase: { url: 'https://www.npmjs.com/', rel: 'noopener noreferrer nofollow' },
  discordCase: { url: 'https://discord.com/', rel: 'noopener noreferrer nofollow' },
  cloudflareCase: { url: 'https://www.cloudflare.com/', rel: 'noopener noreferrer nofollow' },
  dropboxCase: { url: 'https://www.dropbox.com/', rel: 'noopener noreferrer nofollow' },
}
