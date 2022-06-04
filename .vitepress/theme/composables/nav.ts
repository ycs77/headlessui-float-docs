import { ref, computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import type { Config, NavItemWithLink, NavItemWithChildren } from '../config'

export function useNav() {
  const isScreenOpen = ref(false)

  function openScreen() {
    isScreenOpen.value = true
    window.addEventListener('resize', closeScreenOnTabletWindow)
  }

  function closeScreen() {
    isScreenOpen.value = false
    window.removeEventListener('resize', closeScreenOnTabletWindow)
  }

  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen()
  }

  /**
   * Close screen when the user resizes the window wider than tablet size.
   */
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen()
  }

  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  }
}

export function useDocsNav() {
  const { theme, lang } = useData<Config>()
  const { currentFramework } = useFrameworkLinks()

  return computed(() => {
    const framework = currentFramework.value?.name || theme.value.frameworksNav?.[0].name
    if (!framework) return []

    const nav = {
      'en-US': [
        { text: 'Guide', link: `/${framework}/quick-start`, activeMatch: `/${framework}/(?!api)` },
        { text: 'API', link: `/${framework}/api`, activeMatch: `/${framework}/api` },
      ],
      'zh-TW': [
        { text: '指南', link: `/zh-tw/${framework}/quick-start`, activeMatch: `/zh-tw/${framework}/(?!api)` },
        { text: 'API', link: `/zh-tw/${framework}/api`, activeMatch: `/zh-tw/${framework}/api` },
      ],
    } as Record<string, NavItemWithLink[]>

    return nav[lang.value]
  })
}

export function useLanguageLinks() {
  const { site, localePath, theme } = useData<Config>()
  const route = useRoute()

  return computed(() => {
    const langs = site.value.langs
    const localePaths = Object.keys(langs)

    // one language
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
    }))

    return {
      text: selectText,
      items,
    } as NavItemWithChildren
  })
}

export function useFrameworkLinks() {
  const { localePath, theme } = useData<Config>()
  const route = useRoute()

  const currentFramework = computed(() => {
    if (!theme.value.frameworksNav) {
      return null
    }

    return theme.value.frameworksNav.find(link => {
      return route.path.match(new RegExp(link.activeMatch!))
    })
  })

  const links = computed(() => {
    if (!theme.value.frameworksNav) {
      return []
    }

    if (currentFramework.value) {
      return theme.value.frameworksNav?.map(link => ({
        text: link.text,
        link: route.path.replace(
          /^\/(\w{2}-\w{2}\/)?\w+/,
          `${localePath.value}${link.name}`
        ),
      })) as NavItemWithLink[]
    }

    return theme.value.frameworksNav?.map(link => ({
      text: link.text,
      link: (link as NavItemWithLink).link,
    })) as NavItemWithLink[]
  })

  const isActive = (current: NavItemWithLink) => currentFramework.value?.text === current.text

  return { currentFramework, links, isActive }
}
