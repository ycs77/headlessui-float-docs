# 箭頭 {#arrow}

首先先引入 `<FloatArrow>` 元件，並放置在浮動元素內部，然後加上 class：

```html {5,12}
<Popover>
  <Float>
    ...
    <PopoverPanel>
      <FloatArrow class="absolute bg-white w-5 h-5 rotate-45 border border-gray-200" />
      Popover & arrow, content...
    </PopoverPanel>
  </Float>
</Popover>

<script setup>
import { Float, FloatArrow } from '@headlessui-float/vue'
</script>
```

然後在 `<Float>` 中啟用 `:arrow="5"` 功能，讓箭頭保持距離浮動元素容器 `5px` 的間距，和增加 `:offset="15"` 讓箭頭離參考元素遠點：

```html
<Float :arrow="5" :offset="15">
```

但這時候會發現箭頭疊在浮動元素的上面，並不是我們要的效果，所以要把下面的內容包裝起來，並設定 position 為 `relative`，就會移到箭頭的上面。當然還要設定背景顏色，否則還是會看到下方的箭頭：

```html {1,4-6}
<PopoverPanel class="w-[240px] h-[70px] bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none">
  <FloatArrow class="..." />

  <div class="relative h-full bg-white p-3 text-rose-500 rounded-md">
    Popover & arrow, content...
  </div>
</PopoverPanel>
```

箭頭完整範例：

```vue
<template>
  <Popover>
    <Float
      placement="bottom-start"
      :offset="15"
      :arrow="5"
    >
      <PopoverButton class="px-5 py-2 bg-rose-50 hover:bg-rose-100 text-rose-500 rounded">
        Button
      </PopoverButton>

      <PopoverPanel class="w-[240px] h-[70px] bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none">
        <FloatArrow class="absolute bg-white w-5 h-5 rotate-45 border border-gray-200" />

        <div class="relative h-full bg-white p-3 text-rose-500 rounded-md">
          Popover & arrow, content...
        </div>
      </PopoverPanel>
    </Float>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Float, FloatArrow } from '@headlessui-float/vue'
</script>
```
