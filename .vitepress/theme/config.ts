import type { DefaultTheme } from 'vitepress/theme'
import type { AlgoliaLocale, AlgoliaSearchOptions } from './composables/docsearch'

export interface Config extends DefaultTheme.Config {
  /**
   * The locales config.
   */
  locales?: {
    [path: string]: {
      label: string
      selectText?: string
      editLink?: DefaultTheme.EditLink
      lastUpdated?: string

      frameworksNav?: NavItemWithFramework[]
      sidebar?: DefaultTheme.SidebarMulti
      algolia?: AlgoliaLocale
    }
  }

  /**
   * The frameworks nav items.
   */
  frameworksNav?: NavItemWithFramework[]

  /**
   * The select language text.
   */
  selectText?: string

  /**
   * The algolia options. Leave it undefined to disable the search feature.
   */
  algolia?: AlgoliaSearchOptions
}

export type NavItemWithFramework = DefaultTheme.NavItemWithLink & { name: string }
