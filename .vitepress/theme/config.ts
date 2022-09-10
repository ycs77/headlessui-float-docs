import type { DefaultTheme } from 'vitepress'

export interface Config extends DefaultTheme.Config {
  /**
   * The locales config.
   */
  locales?: Record<string, {
    label: string
    selectText?: string
    editLink?: DefaultTheme.EditLink
    lastUpdated?: string

    frameworksNav?: NavItemWithFramework[]
    sidebar?: DefaultTheme.SidebarMulti
    algolia?: AlgoliaUiLocale
  }>

  /**
   * The frameworks nav items.
   */
  frameworksNav?: NavItemWithFramework[]

  /**
   * The select language text.
   */
  selectText?: string
}

export type NavItemWithFramework = DefaultTheme.NavItem & { name: string }

export interface AlgoliaUiLocale {
  placeholder?: string
  translations?: {
    button?: {
      buttonText?: string
      buttonAriaLabel?: string
    }
    modal: {
      searchBox: {
        resetButtonTitle?: string
        resetButtonAriaLabel?: string
        cancelButtonText?: string
        cancelButtonAriaLabel?: string
      }
      startScreen: {
        recentSearchesTitle?: string
        noRecentSearchesText?: string
        saveRecentSearchButtonTitle?: string
        removeRecentSearchButtonTitle?: string
        favoriteSearchesTitle?: string
        removeFavoriteSearchButtonTitle?: string
      }
      errorScreen: {
        titleText?: string
        helpText?: string
      }
      footer: {
        selectText?: string
        navigateText?: string
        closeText?: string
        searchByText?: string
      }
      noResultsScreen: {
        noResultsText?: string
        suggestedQueryText?: string
        reportMissingResultsText?: string
        reportMissingResultsLinkText?: string
      }
    }
  }
}
