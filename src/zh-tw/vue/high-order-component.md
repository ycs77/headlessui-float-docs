# High-Order Component

高階元件，可以將 `<Float>` 元件客製好包裝之後，輕鬆在專案中套用：

*HighOrderFloat.vue*
```vue
<template>
  <Float
    :offset="8"
    flip
    :shift="6"
    portal
    enter="transition duration-200 ease-out"
    enter-from="scale-95 opacity-0"
    enter-to="scale-100 opacity-100"
    leave="transition duration-150 ease-in"
    leave-from="scale-100 opacity-100"
    leave-to="scale-95 opacity-0"
    tailwindcss-origin-class
  >
    <slot></slot>
  </Float>
</template>

<script setup>
import { Float } from '@headlessui-float/vue'
</script>
```

使用方式跟 `<Float>` 的用法一樣，也可以覆蓋在高階元件中已經定義的 prop：

```html
<Menu>
  <HighOrderFloat placement="bottom-end" :offset="12">
    <MenuButton>
      Options
    </MenuButton>
    <MenuItems>
      ...
    </MenuItems>
  </HighOrderFloat>
</Menu>
```

如果你有使用 TypeScript，可以定義 `FloatProps` 到 `<HighOrderFloat>` 的 props：

*HighOrderFloat.vue*
```vue
<script setup>
import { Float, FloatProps } from '@headlessui-float/vue'

defineProps(FloatProps)
</script>
```
