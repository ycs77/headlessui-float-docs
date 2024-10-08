<template>
  <div id="docsearch" />
</template>

<script setup lang="ts">
import docsearch from '@docsearch/js'
import { nextTick, onMounted, watch } from 'vue'
import { useRoute, useRouter, useData } from 'vitepress'
import type { DefaultTheme } from 'vitepress/theme'
import { useFrameworkLinks } from '../composables/nav'

const props = defineProps<{
  algolia: DefaultTheme.AlgoliaSearchOptions
}>()

const router = useRouter()
const route = useRoute()
const { site, localeIndex, lang } = useData()
const { currentFramework: framework } = useFrameworkLinks()

type DocSearchProps = Parameters<typeof docsearch>[0]

onMounted(update)
watch(localeIndex, update)
watch(framework, update)

async function update() {
  await nextTick()
  const options = {
    ...props.algolia,
    ...props.algolia.locales?.[localeIndex.value]
  }
  const rawFacetFilters = options.searchParameters?.facetFilters ?? []
  const facetFilters = [
    ...(
      Array.isArray(rawFacetFilters)
        ? rawFacetFilters
        : [rawFacetFilters]
    ).filter(f => !f.startsWith('lang:') && !f.startsWith('framework:')),
    `lang:${lang.value}`,
    `framework:${framework.value?.name ?? 'react'}`,
  ]
  initialize({
    ...options,
    searchParameters: {
      ...options.searchParameters,
      facetFilters,
    },
    placeholder: props.algolia.locales
      ?.[localeIndex.value].placeholder
      ?.replace('%s', framework.value?.text ?? 'React'),
  })
}

function initialize(userOptions: DefaultTheme.AlgoliaSearchOptions) {
  const options = Object.assign<
    {},
    DefaultTheme.AlgoliaSearchOptions,
    Partial<DocSearchProps>
  >({}, userOptions, {
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

    hitComponent({ hit, children }) {
      return {
        __v: null,
        type: 'a',
        ref: undefined,
        constructor: undefined,
        key: undefined,
        props: { href: hit.url, children }
      }
    }
  }) as DocSearchProps

  docsearch(options)
}

function getRelativePath(url: string) {
  const { pathname, hash } = new URL(url, location.origin)
  return pathname.replace(/\.html$/, site.value.cleanUrls ? '' : '.html') + hash
}
</script>
