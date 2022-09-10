import { computed, ref, type Ref, toRaw, watch } from 'vue'
import { useData } from 'vitepress'
import { Config } from '../config'

/**
 * The Algolia search options. Partially copied from
 * `@docsearch/react/dist/esm/DocSearch.d.ts`
 */
export interface AlgoliaSearchOptions {
  appId: string
  apiKey: string
  indexName: string
  placeholder?: string
  searchParameters?: any
  disableUserPersonalization?: boolean
  initialQuery?: string
  translations?: AlgoliaTranslations
  locales?: Record<string, AlgoliaLocale>
}

export interface AlgoliaTranslations {
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

export interface AlgoliaLocale {
  placeholder?: string
  translations?: AlgoliaTranslations
}

export function useDocsearchLocales() {
  const { theme, localePath } = useData<Config>()

  const locales = ref({}) as Ref<AlgoliaLocale>
  const configLocales = computed(() => toRaw(theme.value.algolia?.locales || {}))

  watch(localePath, (curLocalePath, prevLocalePath) => {
    if (curLocalePath === prevLocalePath) return

    if (configLocales.value) {
      if (Object.keys(configLocales.value).includes(localePath.value)) {
        locales.value = configLocales.value[localePath.value]
      } else {
        locales.value = {}
      }
    } else {
      locales.value = {
        placeholder: theme.value.algolia?.placeholder,
        translations: theme.value.algolia?.translations,
      }
    }
  }, { immediate: true })

  return locales
}
