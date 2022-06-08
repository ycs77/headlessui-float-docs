import { ref, computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import type { Config, MultiSidebarConfig, NavItemWithLink, NavItemWithChildren } from '../config'

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
  const frameworksNav = theme.value.frameworksNav!

  return computed(() => {
    const framework = currentFramework.value?.name || frameworksNav[0].name

    const nav = {
      'en': [
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

export function useGroupTitle() {
  const route = useRoute()
  const nav = useDocsNav()

  const group = computed(() => {
    return nav.value.find(link =>
      link.activeMatch
        ? route.path.match(new RegExp(link.activeMatch))
        : false
    )
  })

  return computed(() => group.value?.text)
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
      })) as NavItemWithLink[]
    }

    return frameworksNav?.map(link => ({
      text: link.text,
      link: (link as NavItemWithLink).link,
    })) as NavItemWithLink[]
  })

  const isActive = (current: NavItemWithLink) => currentFramework.value?.text === current.text

  return { currentFramework, links, isActive }
}
