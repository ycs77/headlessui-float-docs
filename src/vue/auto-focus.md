# Auto Focus

If you need to automatically focus on internal links or form elements and lock focus inside when opening a popover, you can use the Headless UI `<FocusTrap>` component (although it is not documented in the Headless UI documentation):

```html {9-12,20}
<template>
  <Popover>
    <Float :offset="4">
      <PopoverButton class="px-3 py-1.5 flex justify-center items-center bg-rose-50 hover:bg-rose-100 text-rose-500 rounded">
        Button
      </PopoverButton>

      <PopoverPanel class="w-[240px] h-[70px] p-3 bg-white text-rose-500 border border-gray-200 rounded-md shadow-lg focus:outline-none">
        <FocusTrap>
          <button type="button" class="focus:ring">link 1</button>
          <button type="button" class="focus:ring">link 2</button>
        </FocusTrap>
      </PopoverPanel>
    </Float>
  </Popover>
</template>

<script setup>
import {
  FocusTrap,
  Popover, PopoverButton, PopoverPanel,
} from '@headlessui/vue'
import { Float, FloatArrow } from '@headlessui-float/vue'
</script>
```
