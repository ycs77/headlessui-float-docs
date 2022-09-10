import { computed } from 'vue'
import { useData, useRoute, type DefaultTheme } from 'vitepress'
import type { Config as ThemeConfig } from '../config'

export function useLanguageLinks() {
  const { site, localePath, theme } = useData<ThemeConfig>()
  const route = useRoute()

  return computed(() => {
    const langs = site.value.langs
    const localePaths = Object.keys(langs)

    // only one language
    if (localePaths.length < 2) {
      return null
    }

    // intentionally remove the leading slash because each locale has one
    const currentPath = route.path
      .replace(localePath.value, '')
      .replace('index.html', '')

    const selectText = theme.value.selectText || 'Languages'

    const items = localePaths.map((localePath) => ({
      text: langs[localePath].label,
      link: `${localePath}${currentPath}`,
    } as DefaultTheme.NavItemWithLink))

    return {
      text: selectText,
      items,
    }
  })
}

export function useFrameworkLinks() {
  const { localePath, theme } = useData<ThemeConfig>()
  const route = useRoute()
  const frameworksNav = theme.value.frameworksNav!

  const currentFramework = computed(() => {
    return frameworksNav.find(link => {
      return route.path.match(new RegExp(link.activeMatch!))
    })
  })

  const links = computed(() => {
    if (currentFramework.value) {
      return frameworksNav?.map(link => ({
        text: link.text,
        link: route.path.replace(
          /^\/(\w{2}-\w{2}\/)?\w+/,
          `${localePath.value}${link.name}`
        ),
      })) as DefaultTheme.NavItemWithLink[]
    }

    return frameworksNav?.map(link => ({
      text: link.text,
      link: (link as DefaultTheme.NavItemWithLink).link,
    })) as DefaultTheme.NavItemWithLink[]
  })

  const isActive = (current: DefaultTheme.NavItemWithLink) => {
    return current.text === currentFramework.value?.text
  }

  return { currentFramework, links, isActive }
}

export function useDocsNav() {
  const { theme, lang } = useData<ThemeConfig>()
  const { currentFramework } = useFrameworkLinks()
  const frameworksNav = theme.value.frameworksNav!

  return computed(() => {
    const framework = currentFramework.value?.name || frameworksNav[0].name

    const nav = {
      'en': [
        { text: 'Guide', link: `/${framework}/quick-start.html`, activeMatch: `/${framework}/(?!api)` },
        { text: 'API', link: `/${framework}/api.html`, activeMatch: `/${framework}/api` },
      ],
      'zh-TW': [
        { text: '指南', link: `/zh-tw/${framework}/quick-start.html`, activeMatch: `/zh-tw/${framework}/(?!api)` },
        { text: 'API', link: `/zh-tw/${framework}/api.html`, activeMatch: `/zh-tw/${framework}/api` },
      ],
    } as Record<string, DefaultTheme.NavItemWithLink[]>

    return nav[lang.value]
  })
}

export function useGroupTitle() {
  const route = useRoute()
  const nav = useDocsNav()

  const group = computed(() => {
    return nav.value.find(link => {
      if (link.activeMatch) {
        return route.path.match(new RegExp(link.activeMatch))
      }
      return false
    })
  })

  return computed(() => group.value?.text)
}
