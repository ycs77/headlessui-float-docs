# 自動引入元件 {#auto-importing}

使用 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 來自動引入元件：

::: tip 提示
需要升級 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 至 **v0.19+** 才能正常使用。
:::

```js
// vite.config.js
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

然後就可以不用手動引入元件，直接在模板裡使用 `<Float>` 元件了：

```vue
<template>
  <Float>
    ...
    <FloatArrow />
  </Float>
</template>
```
