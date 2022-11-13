<template>
  <section class="VPHomeSponsors">
    <div class="container">
      <div class="header">
        <h2 class="message">{{ message }}</h2>
      </div>

      <div class="sponsors">
        <a :href="actionLink" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/ycs77/static/sponsors.svg" alt="The Lucas Yang's sponsors" />
        </a>
      </div>

      <div class="action">
        <VPButton
          theme="sponsor"
          :text="actionText ?? 'Become a sponsor'"
          :href="actionLink"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'

defineProps<{
  message: string
  actionText: string
  actionLink: string
}>()
</script>

<style scoped>
.VPHomeSponsors {
  border-top: 1px solid var(--vp-c-divider-light);
  padding: 88px 24px 96px;
  background-color: var(--vp-c-bg);
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.message {
  margin: 0 auto;
  padding-top: 10px;
  max-width: 320px;
  text-align: center;
  line-height: 24px;
  font-size: 16px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.sponsors {
  padding-top: 32px;
}

.sponsors img {
  margin: auto;
}

.action {
  padding-top: 40px;
  text-align: center;
}
</style>
