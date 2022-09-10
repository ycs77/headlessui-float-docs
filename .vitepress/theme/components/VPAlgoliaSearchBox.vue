<script setup lang="ts">
import { default as docsearch } from '@docsearch/js'
import { computed, watch, onMounted } from 'vue'
import { useRouter, useRoute, useData } from 'vitepress'
import { useDocsearchLocales, type AlgoliaSearchOptions } from '../composables/docsearch'
import { useFrameworkLinks } from '../composables/nav'

const router = useRouter()
const route = useRoute()
const { theme, site, lang } = useData()
const locales = useDocsearchLocales()
const { currentFramework: framework } = useFrameworkLinks()

const facetFilters: string[] = []

const placeholder = computed(() =>
  locales.value.placeholder
    ? locales.value.placeholder.replace('%s', framework.value?.text ?? 'React')
    : undefined
)

onMounted(() => {
  initialize(theme.value.algolia)
  setTimeout(poll, 16)

  // refresh on language changed
  watch([lang, locales], (
    [curLang, curLocales],
    [prevLang, prevLocales]
  ) => {
    if (curLang === prevLang) return
    if (JSON.stringify(curLocales) === JSON.stringify(prevLocales)) return
    initialize(theme.value.algolia)
  }, { flush: 'post' })

  // refresh on framework changed
  watch(framework, (curFramework, prevFramework) => {
    if (curFramework === prevFramework) return
    initialize(theme.value.algolia)
  }, { flush: 'post' })
})

// update facetFilters on language changed
watch(lang, (curLang, prevLang) => {
  replaceFacetFilter(`lang:${prevLang}`, `lang:${curLang}`)
}, { flush: 'post' })

// update facetFilters on framework changed
watch(framework, (curFramework, prevFramework) => {
  replaceFacetFilter(
    `framework:${prevFramework?.name}`,
    `framework:${curFramework?.name ?? 'react'}`
  )
}, { flush: 'post' })

function poll() {
  // programmatically open the search box after initialize
  const e = new Event('keydown') as any

  e.key = 'k'
  e.metaKey = true

  window.dispatchEvent(e)

  setTimeout(() => {
    if (!document.querySelector('.DocSearch-Modal')) {
      poll()
    }
  }, 16)
}

type DocSearchProps = Parameters<typeof docsearch>[0]

function initialize(userOptions: AlgoliaSearchOptions) {
  const rawFacetFilters = userOptions.searchParameters?.facetFilters ?? []
  const defaultFacetFilters = [
    `lang:${lang.value}`,
    `framework:${framework.value?.name ?? 'react'}`,
  ]

  facetFilters.splice(0, facetFilters.length, ...defaultFacetFilters, ...rawFacetFilters)

  const options = Object.assign<{}, {}, DocSearchProps>({}, userOptions, {
    container: '#docsearch',

    navigator: {
      navigate({ itemUrl }) {
        const { pathname: hitPathname } = new URL(
          window.location.origin + itemUrl
        )

        // router doesn't handle same-page navigation so we use the native
        // browser location API for anchor navigation
        if (route.path === hitPathname) {
          window.location.assign(window.location.origin + itemUrl)
        } else {
          router.go(itemUrl)
        }
      }
    },

    transformItems(items) {
      return items.map((item) => {
        return Object.assign({}, item, {
          url: getRelativePath(item.url)
        })
      })
    },

    // @ts-expect-error vue-tsc thinks this should return Vue JSX but it returns the required React one
    hitComponent({ hit, children }) {
      return {
        __v: null,
        type: 'a',
        ref: undefined,
        constructor: undefined,
        key: undefined,
        props: { href: hit.url, children }
      }
    },

    searchParameters: {
      ...userOptions.searchParameters,
      facetFilters,
    },

    translations: locales.value.translations,
    placeholder: placeholder.value,
  })

  docsearch(options)
}

function replaceFacetFilter(searchValue: string, replaceValue: string) {
  if (replaceValue !== searchValue) {
    const prevIndex = facetFilters.findIndex(item => item === searchValue)
    if (prevIndex > -1) {
      facetFilters.splice(prevIndex, 1, replaceValue)
    }
  }
}

function getRelativePath(absoluteUrl: string) {
  const { pathname, hash } = new URL(absoluteUrl)
  return (
    pathname.replace(
      /\.html$/,
      site.value.cleanUrls === 'disabled' ? '.html' : ''
    ) + hash
  )
}
</script>

<template>
  <div id="docsearch" />
</template>
