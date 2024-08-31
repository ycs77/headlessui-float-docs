# 組合模式 <Badge type="tip" text="v0.11+" /> {#composable-mode}

原本的 `<Float>` 設計上為了使用簡單，只能且一定要有**參考元素**和**浮動元素**，但沒辦法使用在更複雜的元件上使用。啟用組合模式後提供了 `<FloatReference>` 和 `<FloatContent>` 元件，可以自由更改**參考元素**和**浮動元素**在 DOM 中的位置。

比如這裡有一個沒有使用組合模式的範例：

```html
<Popover>
  <Float>
    <PopoverButton class="...">
      Options
    </PopoverButton>

    <PopoverPanel class="...">
      ...
    </PopoverPanel>
  </Float>
</Popover>
```

同樣的結果但使用組合模式：

```html {2,3,7,9,13,19-21}
<Popover>
  <Float composable>
    <FloatReference>
      <PopoverButton class="...">
        Options
      </PopoverButton>
    </FloatReference>

    <FloatContent>
      <PopoverPanel class="...">
        ...
      </PopoverPanel>
    </FloatContent>
  </Float>
</Popover>

<script setup>
import {
  Float,
  FloatContent,
  FloatReference,
} from '@headlessui-float/vue'
</script>
```

在組合模式下設計元件上可以更加靈活了：

```html {2,4,8,15,19}
<Popover>
  <Float composable>
    <div>
      <FloatReference>
        <PopoverButton class="...">
          Options
        </PopoverButton>
      </FloatReference>
    </div>

    <div>
      <div>...</div>
      <div>
        <div>
          <FloatContent>
            <PopoverPanel class="...">
              ...
            </PopoverPanel>
          </FloatContent>
        </div>
      </div>
    </div>
  </Float>
</Popover>
```

## Dialog 模式 {#dialog-mode}

整合 Dialog 對話框，讓 Dialog 可以定位在參考元素的周圍而設計的模式，會同時開啟**組合模式**。如果同時使用了 `<TransitionRoot>` 的時候，還需要在 `<FloatContent>` 上啟用 `transition-child`，改用 Headless UI 的 `<TransitionChild>` 來設定轉場。

需要注意的是，在 Dialog 中要把 `<FloatContent>` 設為 `as="template"`，以及裡面的第一個元素一定要是 `<DialogPanel>`。

下面是整合 Dialog 的範例：

```vue {3,7,15,33-43,65}
<template>
  <Float
    dialog
    placement="bottom-start"
    :offset="4"
  >
    <FloatReference>
      <button
        type="button"
        class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        @click="openModal"
      >
        Open dialog
      </button>
    </FloatReference>

    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" class="relative" @close="closeModal">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <FloatContent
              as="template"
              transition-child
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-50"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-50"
              tailwindcss-origin-class
            >
              <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-[transform,opacity] select-none">
                <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                  Dialog Title
                </DialogTitle>

                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Some text...
                  </p>
                </div>

                <div class="mt-4">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                    Close
                  </button>
                </div>
              </DialogPanel>
            </FloatContent>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </Float>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { Float, FloatContent, FloatReference } from '@headlessui-float/vue'

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}

function openModal() {
  isOpen.value = true
}
</script>
```
