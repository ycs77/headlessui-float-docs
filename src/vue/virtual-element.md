# Virtual Element <Badge type="tip" text="v0.11+" />

Components that use the Floating UI's [virtual elements](https://floating-ui.com/docs/virtual-elements) feature can position floating element relative to the virtual element. This is often used to implement functionality such as context menus and following the cursor.

## Context menu

`<FloatContextMenu>` is a headless component for a context menu that allows you to design the content of the menu. If you want to use the `<Menu>` component, you need to enable the `static` of `<MenuItems>`:

```html
<FloatContextMenu
  v-slot="{ close }"
  enter="transition-opacity duration-200 ease-out"
  enter-from="opacity-0"
  enter-to="opacity-100"
>
  <Menu>
    <MenuItems static class="w-48 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden focus:outline-none">
      ...
    </MenuItems>
  </Menu>
</FloatContextMenu>

<script setup>
import { FloatContextMenu } from '@headlessui-float/vue'
</script>
```

## Following cursor

`<FloatCursor>` component provides a follow cursor feature that allows any element to move along with the cursor movement, and it also supports touch devices:

```html
<FloatCursor as="div">
  <div class="w-5 h-5 bg-emerald-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
</FloatCursor>

<script setup>
import { FloatCursor } from '@headlessui-float/vue'
</script>
```

The default behavior of `<FloatCursor>` is to add CSS to hide the cursor. If you want disable this feature you can set `global-hide-cursor` to `false`:

```html
<FloatCursor :global-hide-cursor="false">
```

## Custom virtual element

Of course, you can also use `<FloatVirtual>` to customize your own virtual element component. For example, here's how to use `<FloatVirtual>` to create a component that positions to a context menu. First, define an `@initial` event where you can initialize the virtual element:

```html
<FloatVirtual @initial="onInitial">
  <div>context menu content</div>
</FloatVirtual>

<script setup>
import { FloatVirtual } from '@headlessui-float/vue'
</script>
```

Then you can destructure `show`, `reference` and `floating` from props. `show` indicates the current display status of the component, and `reference` can be used to set the reference element, using the virtual element's configuration method. The virtual element needs to include a `getBoundingClientRect()` method, where you can customize the element size, coordinate positions, etc. Since it is an element with a customizable position, it is usually used with mouse-related events. For example, here we are making a context menu and can bind the `contextmenu` event:

```js
import { watchEffect } from 'vue'

function onInitial({ show, reference, floating }) {
  function onContextMenu(e) {
    e.preventDefault()

    reference.value = {
      getBoundingClientRect() {
        return {
          width: 0,
          height: 0,
          x: e.clientX,
          y: e.clientY,
          top: e.clientY,
          left: e.clientX,
          right: e.clientX,
          bottom: e.clientY,
        }
      },
    }

    show.value = true
  }

  watchEffect(onInvalidate => {
    document.addEventListener('contextmenu', onContextMenu)
    onInvalidate(() => document.removeEventListener('contextmenu', onContextMenu))
  })
}
```

Of course, when clicking outside the context menu, it is necessary to set up the function to close the menu:

```js
import { computed } from 'vue'
import { useOutsideClick } from '@headlessui-float/vue'

function onInitial({ show, reference, floating }) {
  ...
  useOutsideClick(floating, () => {
    show.value = false
  }, computed(() => show.value))
}
```

To prevent the context menu from being affected by other `z-index` properties, we can enable the `portal` and render it at the bottom of the `<body>`:

```html
<FloatVirtual portal @initial="onInitial">
```

Now has a simple virtual element example for a context menu:

```vue
<template>
  <FloatVirtual portal @initial="onInitial">
    <div>context menu content</div>
  </FloatVirtual>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import { FloatVirtual, useOutsideClick } from '@headlessui-float/vue'

function onInitial({ show, reference, floating }) {
  function onContextMenu(e) {
    e.preventDefault()

    reference.value = {
      getBoundingClientRect() {
        return {
          width: 0,
          height: 0,
          x: e.clientX,
          y: e.clientY,
          top: e.clientY,
          left: e.clientX,
          right: e.clientX,
          bottom: e.clientY,
        }
      },
    }

    show.value = true
  }

  watchEffect(onInvalidate => {
    document.addEventListener('contextmenu', onContextMenu)
    onInvalidate(() => document.removeEventListener('contextmenu', onContextMenu))
  })

  useOutsideClick(floating, () => {
    show.value = false
  }, computed(() => show.value))
}
</script>
```

## Show virtual element

`<FloatVirtual>` can also be controlled from outside, in addition to being able to modify the display internally:

```vue
<template>
  <FloatVirtual :show="show">
    ...
  </FloatVirtual>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)

show.value = true
</script>
```
