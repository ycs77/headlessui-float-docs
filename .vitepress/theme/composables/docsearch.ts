import { computed, ref, toRaw, watch } from 'vue'
import { useData } from 'vitepress'
import { Config } from '../config'

interface Locale {
  placeholder?: string
  translations?: Record<string, any>
}

export function useDocsearchLocales() {
  const { theme, localePath } = useData<Config>()
  const locales = ref<Locale>({})

  let configLocales = computed(() => toRaw(theme.value.algolia?.locales) ?? {})

  watch(localePath, (curLocalePath, prevLocalePath) => {
    if (curLocalePath === prevLocalePath) return

    if (Object.keys(configLocales.value)[0].startsWith('/')) {
      if (Object.keys(configLocales.value).some(k => k === localePath.value)) {
        locales.value = configLocales.value[localePath.value]
      } else {
        locales.value = {}
      }
    } else {
      locales.value = configLocales.value
    }
  }, { immediate: true })

  return locales
}
