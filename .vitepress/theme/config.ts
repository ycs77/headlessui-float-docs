import type { SearchOptions } from 'vitepress/types/docsearch'
import type { DefaultTheme } from 'vitepress/theme'

export interface Config extends DefaultTheme.Config {
  /**
   * The frameworks nav items.
   */
  frameworksNav?: NavItemWithFramework[]

  /**
   * The algolia options. Leave it undefined to disable the search feature.
   */
  algolia?: AlgoliaSearchOptions
}

export interface DocSearchProps {
  appId: string
  apiKey: string
  indexName: string
  placeholder?: string
  searchParameters?: SearchOptions
  disableUserPersonalization?: boolean
  initialQuery?: string
  translations?: DocSearchTranslations
}

/**
 * The Algolia search options. Partially copied from
 * `@docsearch/react/dist/esm/DocSearch.d.ts`
 */
export interface AlgoliaSearchOptions extends DocSearchProps {
  locales?: Record<string, Partial<DocSearchProps>>
}

export interface DocSearchTranslations {
  button?: {
    buttonText?: string
    buttonAriaLabel?: string
  }
  modal?: {
    searchBox?: {
      resetButtonTitle?: string
      resetButtonAriaLabel?: string
      cancelButtonText?: string
      cancelButtonAriaLabel?: string
    }
    startScreen?: {
      recentSearchesTitle?: string
      noRecentSearchesText?: string
      saveRecentSearchButtonTitle?: string
      removeRecentSearchButtonTitle?: string
      favoriteSearchesTitle?: string
      removeFavoriteSearchButtonTitle?: string
    }
    errorScreen?: {
      titleText?: string
      helpText?: string
    }
    footer?: {
      selectText?: string
      navigateText?: string
      closeText?: string
      searchByText?: string
    }
    noResultsScreen?: {
      noResultsText?: string
      suggestedQueryText?: string
      reportMissingResultsText?: string
      reportMissingResultsLinkText?: string
    }
  }
}

export type NavItemWithFramework = DefaultTheme.NavItemWithLink & { name: string }
