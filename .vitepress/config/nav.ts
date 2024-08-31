import type { DefaultTheme } from 'vitepress'

export function enNav(framework: string): Record<string, DefaultTheme.NavItemWithLink[]> {
  return {
    'en-US': [
      { text: 'Guide', link: `/${framework}/quick-start.html`, activeMatch: `/${framework}/(?!api)` },
      { text: 'API', link: `/${framework}/api.html`, activeMatch: `/${framework}/api` },
    ],
  }
}

export function zhTwNav(framework: string): Record<string, DefaultTheme.NavItemWithLink[]> {
  return {
    'zh-TW': [
      { text: '指南', link: `/zh-tw/${framework}/quick-start.html`, activeMatch: `/zh-tw/${framework}/(?!api)` },
      { text: 'API', link: `/zh-tw/${framework}/api.html`, activeMatch: `/zh-tw/${framework}/api` },
    ],
  }
}
