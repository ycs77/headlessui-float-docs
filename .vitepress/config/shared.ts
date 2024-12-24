import { resolve } from 'path'
import type { UserConfig as ViteConfig } from 'vite'
import { defineConfigWithTheme } from 'vitepress'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'
import type { Config as ThemeConfig, NavItemWithFramework } from '../theme/config'
import { search as enSearch } from './en'
import { search as zhTwSearch } from './zh-tw'

export const shared = defineConfigWithTheme<ThemeConfig>({
  title: 'Headless UI Float',

  srcDir: 'src',
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    siteTitle: '<span style="color: var(--vp-c-brand-1);">Headless UI</span> Float',

    frameworksNav: frameworksNav(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ycs77/headlessui-float' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Lucas Yang & Contributors',
    },

    algolia: {
      indexName: 'headlessui-float',
      appId: 'XSDH9ZB960',
      apiKey: 'ff29ace901ddeaf2a763f3744e7f1e40',
      locales: {
        ...enSearch,
        ...zhTwSearch,
      },
    },
  },

  transformPageData(pageData, { siteConfig }) {
    const { site } = siteConfig

    const canonicalUrl = `https://headlessui-float.vercel.app/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, site.cleanUrls ? '' : '.html')

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(['link', { rel: 'canonical', href: canonicalUrl }])
  },

  vite: viteConfig(),
})

function frameworksNav() {
  return [
    {
      name: 'react',
      text: 'React',
      activeMatch: `^/(\\w{2}-\\w{2}/)?react/`,
      link: '/react/quick-start',
    },
    {
      name: 'vue',
      text: 'Vue',
      activeMatch: `^/(\\w{2}-\\w{2}/)?vue/`,
      link: '/vue/quick-start',
    },
  ] satisfies NavItemWithFramework[]
}

function viteConfig() {
  return {
    plugins: [
      Components({
        dirs: resolve(__dirname, '../theme/components'),
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),
      UnoCSS(),
    ],
  } satisfies ViteConfig
}
