# High-Order Component

The high-order component can be easily applied in projects after customizing the `<Float>` component:

```vue
<!-- HighOrderFloat.vue -->
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

Used in the same way as `<Float>`, it can also override the defined prop in the high-order component:

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

## TypeScript

If you using the TypeScript, can using `createHighOrderFloatComponent()` function to create the `<HighOrderFloat>`, enjoy better type hinting:

```ts
// HighOrderFloat.ts
import { createHighOrderFloatComponent } from '@headlessui-float/vue'

export default createHighOrderFloatComponent({
  offset: 8,
  flip: true,
  shift: 6,
  portal: true,
  enter: 'transition duration-200 ease-out',
  enterFrom: 'scale-95 opacity-0',
  enterTo: 'scale-100 opacity-100',
  leave: 'transition duration-150 ease-in',
  leaveFrom: 'scale-100 opacity-100',
  leaveTo: 'scale-95 opacity-0',
  tailwindcssOriginClass: true,
})
```
