# Composable Mode

The original design of `<Float>` is simple to use, but it can only be used with a **reference element** and a **floating element**, which may not be sufficient for more complex components. With the introduction of composable mode, `<FloatReference>` and `<FloatContent>` components are provided, which allows the positioning of the **reference element** and **floating element** to be changed freely in the DOM.

::: tip INFO
Requires upgrading to **v0.11+** to use the composable mode.
:::

For example, here's an example without using the composable mode:

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

And the same result with composable mode:

```html {2,3,7,9,13}
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
```

With composable mode, the design of components can be more flexible:

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

## Dialog Mode

The mode for positioning dialog around a reference element is designed by integrating the dialog box, which can be positioned around a reference element. This mode uses **composable mode** and off the `transform`. If `<TransitionRoot>` is used, you also need to enable `transition-child` on `<FloatContent>` and use `<TransitionChild>` from Headless UI to set the transition.

Note that in dialog, `<FloatContent>` needs to be set to `as="template"`, and the first element inside it must be `<DialogPanel>`.

Here is an example of integrating dialog:

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
