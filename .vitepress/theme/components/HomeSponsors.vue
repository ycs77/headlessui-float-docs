<template>
  <section class="VPHomeSponsors">
    <div class="container mx-auto max-w-[1152px]">
      <div>
        <h2 class="message">{{ message }}</h2>
      </div>

      <div class="mt-8">
        <a :href="actionLink" target="_blank" rel="noopener noreferrer">
          <img
            class="mx-auto"
            src="https://cdn.jsdelivr.net/gh/ycs77/static/sponsors.svg"
            alt="The Lucas Yang's sponsors"
          />
        </a>
      </div>

      <div class="mt-3.5 text-center">
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
  padding: 88px 24px 40px;
  margin: 0 !important;
}

.message {
  margin: 0 auto;
  padding-top: 10px;
  max-width: 320px;
  text-align: center;
  line-height: 24px;
  font-size: 24px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  opacity: .7;
}
</style>
