# Auto Importing

Use with [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) to auto-import components, add `HeadlessUiFloatResolver` into `vite.config.js`:

```js
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiFloatResolver } from '@headlessui-float/vue'

export default {
  plugins: [
    Vue(),
    Components({
      resolvers: [
        HeadlessUiFloatResolver(),
      ],
    }),
  ],
}
```

Then you can use `<Float>` components as you want without explicit importing:

```vue
<template>
  <Float>
    ...
    <FloatArrow />
  </Float>
</template>
```
