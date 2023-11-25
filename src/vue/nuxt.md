# Nuxt

Install the Nuxt module for Headless UI Float:

::: code-group

```bash [npm]
npm i @headlessui-float/nuxt
```

```bash [yarn]
yarn add @headlessui-float/nuxt
```

```bash [pnpm]
pnpm add @headlessui-float/nuxt
```

:::

Then add `@headlessui-float/nuxt` module in `nuxt.config.ts`:

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
