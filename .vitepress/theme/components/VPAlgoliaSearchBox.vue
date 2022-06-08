<script setup lang="ts">
import docsearch from '@docsearch/js'
import { useRoute, useRouter, useData } from 'vitepress'
import { watch, onMounted } from 'vue'
import { DocSearchHit } from '@docsearch/react/dist/esm/types'
import { useDocsearchLocales } from '../composables/docsearch'
import { useFrameworkLinks } from '../composables/nav'
import { AlgoliaSearchOptions } from '../config'
import { computed } from '@vue/reactivity'

const { theme, lang } = useData()
const route = useRoute()
const router = useRouter()
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

  watch([lang, locales], (
    [curLang, curLocales],
    [prevLang, prevLocales]
  ) => {
    if (curLang === prevLang) return
    if (JSON.stringify(curLocales) === JSON.stringify(prevLocales)) return
    initialize(theme.value.algolia)
  })

  watch(framework, (curFramework, prevFramework) => {
    if (curFramework === prevFramework) return
    initialize(theme.value.algolia)
  })
})

watch(lang, (curLang, prevLang) => {
  replaceFacetFilter(`lang:${prevLang}`, `lang:${curLang}`)
})

watch(framework, (curFramework, prevFramework) => {
  replaceFacetFilter(`framework:${prevFramework?.name}`, `framework:${curFramework?.name ?? 'react'}`)
})

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

function initialize(userOptions: AlgoliaSearchOptions) {
  const rawFacetFilters = userOptions.searchParameters?.facetFilters ?? []
  const defaultFacetFilters = [`lang:${lang.value}`, `framework:${framework.value?.name ?? 'react'}`]

  facetFilters.splice(0, facetFilters.length, ...defaultFacetFilters, ...rawFacetFilters)

  const options = Object.assign({}, userOptions, {
    container: '#docsearch',

    navigator: {
      navigate: ({ itemUrl }: { itemUrl: string }) => {
        const { pathname: hitPathname } = new URL(
          window.location.origin + itemUrl
        )

        // Router doesn't handle same-page navigation so we use the native
        // browser location API for anchor navigation
        if (route.path === hitPathname) {
          window.location.assign(window.location.origin + itemUrl)
        } else {
          router.go(itemUrl)
        }
      }
    },

    transformItems: (items: DocSearchHit[]) => {
      return items.map((item) => {
        return Object.assign({}, item, {
          url: getRelativePath(item.url)
        })
      })
    },

    hitComponent: ({ hit, children }: { hit: DocSearchHit; children: any }) => {
      const relativeHit = hit.url.startsWith('http')
        ? getRelativePath(hit.url as string)
        : hit.url

      return {
        type: 'a',
        ref: undefined,
        constructor: undefined,
        key: undefined,
        props: {
          href: hit.url,
          onClick: (event: MouseEvent) => {
            if (isSpecialClick(event)) {
              return
            }

            // we rely on the native link scrolling when user is already on
            // the right anchor because Router doesn't support duplicated
            // history entries
            if (route.path === relativeHit) {
              return
            }

            // if the hits goes to another page, we prevent the native link
            // behavior to leverage the Router loading feature
            if (route.path !== relativeHit) {
              event.preventDefault()
            }

            router.go(relativeHit)
          },
          children
        },
        __v: null
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

function isSpecialClick(event: MouseEvent) {
  return (
    event.button === 1 ||
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey
  )
}

function getRelativePath(absoluteUrl: string) {
  const { pathname, hash } = new URL(absoluteUrl)

  return pathname + hash
}
</script>

<template>
  <div id="docsearch"></div>
</template>
