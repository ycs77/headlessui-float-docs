# 自動引入元件 {#auto-importing}

使用 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 來自動引入元件：

*vite.config.js*
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

然後就可以不用手動引入元件，直接在模板裡使用 `<Float>` 元件了：

```vue
<template>
  <Float>
    ...
    <FloatArrow />
  </Float>
</template>
```
