import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import type { DefaultTheme } from 'vitepress/theme'
import type { Config as ThemeConfig, NavItemWithFramework } from '../config'
import { enNav, zhTwNav } from '../../config/nav'

export function useFrameworkLinks() {
  const { localeIndex, theme } = useData<ThemeConfig>()
  const route = useRoute()
  const frameworksNav = theme.value.frameworksNav || []

  const currentFramework = computed(() => {
    return frameworksNav.find(link => route.path.match(new RegExp(link.activeMatch!)))
  })

  const links = computed(() => {
    if (currentFramework.value) {
      return frameworksNav.map(link => ({
        ...link,
        link: route.path.replace(
          /^\/(\w{2}-\w{2}\/)?\w+/,
          `${localeIndex.value === 'root' ? '/' : `/${localeIndex.value}/`}${link.name}`
        ),
      }))
    }

    return frameworksNav
  })

  const isActive = (current: NavItemWithFramework) => {
    return current.text === currentFramework.value?.text
  }

  return { currentFramework, links, isActive }
}

export function useDocsNav() {
  const { theme, lang } = useData<ThemeConfig>()
  const { currentFramework } = useFrameworkLinks()
  const frameworksNav = theme.value.frameworksNav || []

  return computed(() => {
    const framework = currentFramework.value?.name || frameworksNav[0]?.name || ''

    const nav = <Record<string, DefaultTheme.NavItemWithLink[]>>{
      ...enNav(framework),
      ...zhTwNav(framework),
    }

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
