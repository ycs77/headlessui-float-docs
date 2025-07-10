<template>
  <div
    class="warning custom-block"
    :style="{ padding: '16px', marginBottom: '32px', textAlign: 'center' }"
  >
    <p class="custom-block-title">{{ content }}</p>
  </div>
</template>

<script setup lang="ts">
import type { ComputedRef } from 'vue'
import { computed } from 'vue'
// @ts-ignore
import { useLangs } from 'vitepress/dist/client/theme-default/composables/langs.js'

const { currentLang }: {
  currentLang: ComputedRef<{
    label: string
    link: string
  }>
} = useLangs()

const content = computed(() => ({
  'English': 'This package is unmaintained due to lack of time. It should mostly work but do not expect fixes or new features.',
  '繁體中文': '此套件因時間不足而不再維護。它基本上可以正常運作，但請不要期待修復或增加新功能。',
}[currentLang.value.label]))
</script>
