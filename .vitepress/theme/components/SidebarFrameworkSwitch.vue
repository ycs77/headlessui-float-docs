<template>
  <div class="SidebarFrameworkSwitch">
    <div class="switch-container">
      <div class="switch-buttons">
        <a
          v-for="(link, i) in links"
          :key="link.name"
          :href="link.link"
          :class="{ 'active': isActive(link) }"
          :ref="el => setEl(el as HTMLElement, link, i)"
        >
          {{ link.text }}
        </a>
      </div>
      <div
        class="switch-bg"
        :class="[
          `switch-bg-${currentFramework?.name || ''}`,
          { 'no-transition': noTransition },
        ]"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref, reactive, computed, onMounted } from 'vue'
import { useElementSize, promiseTimeout } from '@vueuse/core'
import type { NavItemWithFramework } from '../config'
import { useFrameworkLinks } from '../composables/nav'

const gap = 4

const noTransition = ref(true)
const els = ref([]) as Ref<{
  width: number
  left: number
  link: NavItemWithFramework
}[]>

const { links, isActive, currentFramework } = useFrameworkLinks()

const findSize = (framework: string) => els.value.find(({ link }) => link.name === framework)

const reactSize = computed(() => findSize('react'))
const vueSize = computed(() => findSize('vue'))

function setEl(el: HTMLElement, link: NavItemWithFramework, index: number) {
  const { width } = useElementSize(el)

  els.value[index] = reactive({
    link,
    width: width,
    left: computed(() => {
      return els.value
        .slice(0, index)
        .reduce((carry, item) => carry + gap + item.width, 0)
    }),
  })
}

onMounted(async () => {
  await promiseTimeout(100)
  noTransition.value = false
})
</script>

<style scoped>
.SidebarFrameworkSwitch {
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 16px 0;
  margin-bottom: 10px;
  background-color: var(--vp-sidebar-bg-color);
  border-bottom: 1px solid var(--vp-c-divider);
}
.SidebarFrameworkSwitch::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 100%;
  z-index: 10;
  display: block;
  width: 100%;
  height: 36px;
  background-color: var(--vp-sidebar-bg-color);
}
@media (min-width: 960px) {
  .SidebarFrameworkSwitch {
    margin-bottom: 0;
  }
  .SidebarFrameworkSwitch::before {
    content: none;
  }
}

.switch-container {
  position: relative;
  padding: 10px 16px;
  background-color: var(--vp-sidebar-bg-color);
  border-radius: 4px;
}

.switch-buttons {
  display: flex;
  gap: v-bind(`${gap}px`);
}

.switch-buttons a {
  position: relative;
  z-index: 1;
  flex: 1;
  padding: 2px 0;
  color: var(--vp-c-text-3);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: center;
  user-select: none;
  transition: color 0.5s;
}
.switch-buttons a.active {
  color: #fff;
}
.switch-buttons a:not(.active):hover {
  color: var(--vp-c-text-1);
}

.switch-bg {
  position: absolute;
  width: 77px;
  height: 28px;
  transition: left .4s, background-color .4s;
  border-radius: 4px;
}

.switch-bg-react {
  width: v-bind(`${reactSize?.width ?? 0}px`);
  top: 10px;
  left: calc(16px + v-bind(`${reactSize?.left ?? 0}px`));
  background-color: var(--vp-c-react-1);
}
.switch-bg-vue {
  width: v-bind(`${vueSize?.width ?? 0}px`);
  top: 10px;
  left: calc(16px + v-bind(`${vueSize?.left ?? 0}px`));
  background-color: var(--vp-c-vue-1);
}

.no-transition {
  transition: none !important;
}
</style>
