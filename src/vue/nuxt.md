# Nuxt

Install the Nuxt module for Headless UI Float:

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

Add `@headlessui-float/nuxt` module into `nuxt.config.ts`:

```js
export default defineNuxtConfig({
  modules: ['@headlessui-float/nuxt'],
})
```

Now you can use `<Float>` components as you want without explicit importing in Nuxt:

```vue
<template>
  <Float>
    ...
    <FloatArrow />
  </Float>
</template>
```
