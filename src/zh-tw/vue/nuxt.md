# Nuxt

安裝 Headless UI Float 的 Nuxt 模組：

::: code-group

```bash [npm]
npm i -D @headlessui-float/nuxt
```

```bash [yarn]
yarn add -D @headlessui-float/nuxt
```

```bash [pnpm]
pnpm add -D @headlessui-float/nuxt
```

:::

然後新增 `@headlessui-float/nuxt` 到 `nuxt.config.ts`：

```js
export default defineNuxtConfig({
  modules: ['@headlessui-float/nuxt'],
})
```

然後就可以不用手動引入元件，直接在 Nuxt 專案裡直接使用 `<Float>` 元件了：

```vue
<template>
  <Float>
    ...
    <FloatArrow />
  </Float>
</template>
```
