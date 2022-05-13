<template>
  <section id="hero">
    <h1 class="tagline">
      {{ locale['tagline-1'] }}<br />
      <span class="accent">{{ locale['tagline-2'] }}</span> {{ locale['tagline-3'] }}
    </h1>
    <p class="description">
      {{ locale.description }}
    </p>
    <p class="actions">
      <a class="action-react" :href="`${localePath}react/installation.html`">React</a>
      <a class="action-vue" :href="`${localePath}vue/installation.html`">Vue</a>
    </p>
  </section>

  <section id="highlights" class="vt-box-container">
    <div class="vt-box">
      <h2>{{ locale['feature-1'].title }}</h2>
      <p>
        {{ locale['feature-1'].description }}
      </p>
    </div>
    <div class="vt-box">
      <h2>{{ locale['feature-2'].title }}</h2>
      <p>
        {{ locale['feature-2'].description }}
      </p>
    </div>
    <div class="vt-box">
      <h2>{{ locale['feature-3'].title }}</h2>
      <p>
        {{ locale['feature-3'].description }}
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { site, localePath } = useData()

const locales = {
  'en-US': {
    'tagline-1': 'Easy Floating',
    'tagline-2': 'Headless UI',
    'tagline-3': 'Components',
    description: 'Easy use Headless UI components with Floating UI (Popper.js)',
    'feature-1': {
      title: 'Tailwind CSS',
      description: 'Easy use Headless UI & Tailwind CSS.',
    },
    'feature-2': {
      title: 'Floating UI',
      description: 'Using Floating UI (New version Popper.js) to position floating elements.',
    },
    'feature-3': {
      title: 'More feature...',
      description: 'Support Transition, Portal and Arrow.',
    },
  },
  'zh-TW': {
    'tagline-1': '輕鬆浮動定位',
    'tagline-2': 'Headless UI',
    'tagline-3': '元素',
    'description': '輕鬆在 Headless UI 中使用 Floating UI (新版 Popper.js) 來定位浮動元素',
    'feature-1': {
      title: 'Tailwind CSS',
      description: '輕鬆整合使用 Headless UI & Tailwind CSS。',
    },
    'feature-2': {
      title: 'Floating UI',
      description: '使用 Floating UI (新版 Popper.js) 定位浮動元素。',
    },
    'feature-3': {
      title: '更多功能...',
      description: '支援 Transition、Portal (Teleport) 和箭頭 (Arrow)。',
    },
  },
} as Record<string, any>

const locale = computed(() => locales[site.value.lang])
</script>

<style scoped>
section {
  padding: 42px 32px;
}

#hero {
  padding: 96px 32px;
  text-align: center;
}

.tagline {
  font-size: 76px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0px auto;
}

html:not(.dark) .accent,
.dark .tagline {
  background: -webkit-linear-gradient(285deg, #66E3FF 10%, #7064F9);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  max-width: 960px;
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 22px;
  margin: 24px auto 40px;
}

.actions a {
  font-size: 16px;
  display: inline-block;
  padding: 9px 24px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}

.actions a:not(.actions a:last-child) {
  margin-right: 18px;
}

.actions .action-react {
  background-color: var(--vt-c-blue);
}

.actions .action-vue {
  background-color: var(--vt-c-green);
}

.actions .action-react,
.actions .action-vue {
  color: #fff;
}

.actions .action-react:hover {
  background-color: var(--vt-c-blue-dark);
  transition-duration: 0.2s;
}

.actions .action-vue:hover {
  background-color: var(--vt-c-green-dark);
  transition-duration: 0.2s;
}

.dark .actions .action-react:hover {
  background-color: var(--vt-c-blue-light);
}

.dark .actions .action-vue:hover {
  background-color: var(--vt-c-green-light);
}

#special-sponsor {
  border-top: 1px solid var(--vt-c-divider-light);
  border-bottom: 1px solid var(--vt-c-divider-light);
  padding: 12px 24px;
  text-align: center;
}

#special-sponsor span {
  color: var(--vt-c-text-2);
  font-weight: 500;
  font-size: 13px;
  vertical-align: middle;
  margin: 0 24px;
}

#special-sponsor img {
  display: inline-block;
  vertical-align: middle;
  height: 36px;
}

.dark #special-sponsor img {
  filter: grayscale(1) invert(1);
}

#highlights {
  max-width: 960px;
  margin: 0px auto;
  color: var(--vt-c-text-2);
}

#highlights h2 {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
  margin-bottom: 0.75em;
}

#highlights p {
  font-weight: 400;
  font-size: 15px;
}

#highlights .vt-box {
  background-color: transparent;
}

#sponsors {
  max-width: 900px;
  margin: 0px auto;
}

#sponsors h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1em;
}

#sponsors .sponsor-container {
  margin-bottom: 3em;
}

@media (max-width: 960px) {
  .tagline {
    font-size: 64px;
    letter-spacing: -0.5px;
  }
  .description {
    font-size: 18px;
    margin-bottom: 48px;
  }
}

@media (max-width: 768px) {
  .tagline {
    font-size: 48px;
    letter-spacing: -0.5px;
  }
}

@media (max-width: 576px) {
  #hero {
    padding: 64px 32px;
  }
  .description {
    font-size: 16px;
    margin: 18px 0 30px;
  }
  #special-sponsor img {
    display: block;
    margin: 2px auto 1px;
  }
  #highlights h3 {
    margin-bottom: 0.6em;
  }
  #highlights .vt-box {
    padding: 20px 36px;
  }
  .actions a {
    margin: 0.5em 0;
  }
}

@media (max-width: 370px) {
  .tagline {
    font-size: 36px;
  }
}
</style>
