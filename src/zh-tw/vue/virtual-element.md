# 虛擬元素 <Badge label="v0.11+" /> {#virtual-element}

使用 Floating UI [虛擬元素](https://floating-ui.com/docs/virtual-elements) 功能定位的元件，可以讓浮動元素相對於虛擬元素來定位，常用於實現右鍵選單、跟隨鼠標等功能。

## 右鍵選單 {#context-menu}

`<FloatContextMenu>` 元件是一個無樣式的右鍵選單元件，可以自己設計右鍵選單的內容，如果要用 `<Menu>` 元件的話，還要把 `<MenuItems>` 的 `static` 開啟：

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

## 跟隨鼠標 {#following-cursor}

`<FloatCursor>` 元件提供了跟隨鼠標定位功能，可以讓任何元素跟隨鼠標移動，同時也支援觸控移動：

```html
<FloatCursor as="div">
  <div class="w-5 h-5 bg-emerald-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
</FloatCursor>

<script setup>
import { FloatCursor } from '@headlessui-float/vue'
</script>
```

預設 `<FloatCursor>` 會增加 CSS 來隱藏鼠標，如果要關掉這個功能的話，可以將 `global-hide-cursor` 設為 `false`：

```html
<FloatCursor :global-hide-cursor="false">
```

## 自訂虛擬元素 {#custom-virtual-element}

當然也可以使用 `<FloatVirtual>` 來自訂自己的虛擬元素元件，比如這裡用 `<FloatVirtual>` 來做一個定位到右鍵選單的元件，先定義一個 `@initial` 事件，可以在這裡初始化虛擬元素：

```html
<FloatVirtual @initial="onInitial">
  <div>context menu content</div>
</FloatVirtual>

<script setup>
import { FloatVirtual } from '@headlessui-float/vue'
</script>
```

然後可以在 props 裡解構出 `show`、`reference`、`floating`，`show` 是當前元件顯示或隱藏的狀態，`reference` 可以設定參考元素，不過是用虛擬元素的設定方式。虛擬元素需要包含一個 `getBoundingClientRect()` 方法，裡面可以自訂元素尺寸、座標位置等。因為是可以自訂位置的元素，通常都會搭配鼠標相關的事件，像這裡我們要作右鍵選單，可以綁定 `contextmenu` 事件：

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

當然在點擊右鍵選單之外的地方時，需要設定可以關閉選單：

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

為了讓右鍵選單不會受其他 `z-index` 的影響，可以把 `portal` 開啟，渲染到 `<body>` 的底部：

```html
<FloatVirtual portal @initial="onInitial">
```

最後放上一個簡易的右鍵選單虛擬元素範例：

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

## 虛擬元素顯示 {#show-virtual-element}

`<FloatVirtual>` 除了可以在內部修改顯示之外，也可以由外部來做控制：

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
