<template>
  <div class="frameworks-layer">
    <div class="frameworks-container">
      <div class="frameworks-buttons">
        <a
          v-for="(link, i) in links"
          :key="link.text"
          :href="link.link"
          :class="{ 'active': isActive(link) }"
          :ref="el => setEl(el as HTMLElement, link, i)"
        >
          {{ link.text }}
        </a>
      </div>
      <div
        class="framework-bg"
        :class="`framework-bg-${currentFramework?.name}`"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref, computed } from 'vue'
import { useElementSize } from '@vueuse/core'
import { useFrameworkLinks } from '../composables/nav'
import type { NavItemWithLink } from '../config'

interface FrameworkElSize {
  width: number
  left: number
  link: NavItemWithLink
}

const gap = 4
const els = ref([]) as Ref<FrameworkElSize[]>

const { links, isActive, currentFramework } = useFrameworkLinks()

const reactSize = computed(() => findSize('React'))
const vueSize = computed(() => findSize('Vue'))

function setEl(el: HTMLElement, link: NavItemWithLink, index: number) {
  const { width } = useElementSize(el)
  els.value[index] = {
    link,
    width: width as unknown as number,
    left: computed(() => {
      if (index === 0) return 0
      return els.value.slice(0, index).reduce((carry, item) => {
        return carry + gap + item.width
      }, 0)
    }) as unknown as number,
  }
}

function findSize(framework: string) {
  return els.value.find(({ link }) => link.text === framework)
}
</script>

<style scoped>
.frameworks-layer {
  position: sticky;
  top: 0;
  z-index: 10;
  padding-top: 10px;
  margin-bottom: 20px;
}

.frameworks-container {
  position: relative;
  padding: 10px 16px;
  background-color: var(--vt-c-bg-mute);
  border-radius: 4px;
  transition: background-color .5s;
}

.frameworks-buttons {
  display: flex;
  gap: v-bind("gap + 'px'");
}

.frameworks-buttons a {
  position: relative;
  z-index: 1;
  flex: 1;
  padding: 2px 0;
  color: var(--vt-c-text-3);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: center;
  user-select: none;
  transition: color 0.5s;
}
.frameworks-buttons a.active {
  color: #fff;
}

.framework-bg {
  position: absolute;
  width: 77px;
  height: 28px;
  transition: left .4s, background-color .4s;
  border-radius: 4px;
}

.framework-bg-react {
  width: v-bind("reactSize?.width + 'px'");
  top: 10px;
  left: calc(16px + v-bind("reactSize?.left + 'px'"));
  background-color: var(--vt-c-blue);
}
.framework-bg-vue {
  width: v-bind("vueSize?.width + 'px'");
  top: 10px;
  left: calc(16px + v-bind("vueSize?.left + 'px'"));
  background-color: var(--vt-c-green);
}
</style>
