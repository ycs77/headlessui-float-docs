<template>
  <div class="frameworks-select">
    <div id="frameworks-buttons">
      <a
        v-for="item in links"
        :key="item.text"
        :href="item.link"
        :class="{
          'active-react': isActive(item) && item.text === 'React',
          'active-vue': isActive(item) && item.text === 'Vue',
        }"
      >
        {{ item.text }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFrameworkLinks } from '../composables/nav'

const { links, isActive } = useFrameworkLinks()
</script>

<style scoped>
.frameworks-select {
  position: sticky;
  top: 0;
  z-index: 10;
  padding-top: 10px;
  margin-bottom: 20px;
}
#frameworks-buttons {
  display: flex;
  gap: 4px;
  padding: 10px 16px;
  background-color: var(--vt-c-bg-soft);
  transition: background-color 0.5s;
}
#frameworks-buttons a {
  flex: 1;
  padding: 2px 0;
  color: var(--vt-c-text-3);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: center;
  user-select: none;
  transition: color 0.2s, background-color 0.2s;
}
#frameworks-buttons a.active-react {
  color: #fff;
  background-color: var(--vt-c-blue);
  border-radius: 4px;
}
#frameworks-buttons a.active-vue {
  color: #fff;
  background-color: var(--vt-c-green);
  border-radius: 4px;
}
</style>
