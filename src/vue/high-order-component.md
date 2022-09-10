# High-Order Component

The high-order component can be easily applied in projects after customizing the `<Float>` component:

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

Used in the same way as `<Float>`, it can also override the defined prop in high-order component:

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

If you using the TypeScript, can define `FloatProps` to the props of `<HighOrderFloat>`:

*HighOrderFloat.vue*
```vue
<script setup>
import { Float, FloatProps } from '@headlessui-float/vue'

defineProps(FloatProps)
</script>
```
