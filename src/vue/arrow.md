# Arrow

First, import the `<FloatArrow>` component and put it inside the floating element, then add the class:

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

Then add the `:arrow="5"` prop in `<Float>`, make the arrow keep `5px` padding from the float element container, and add `:offset="15"` to keep the arrow away from the reference element:

```html
<Float :arrow="5" :offset="15">
```

But then we will find that the arrow is stacked on top of the floating element, which is not the effect we want, so need to wrap the content below and set the position to `relative`, and it will move to the top of the arrow. Of course, we also need to set the background color, otherwise will still see the arrow below:

```html {1,4-6}
<PopoverPanel class="w-[240px] h-[70px] bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none">
  <FloatArrow class="..." />

  <div class="relative h-full bg-white p-3 text-rose-500 rounded-md">
    Popover & arrow, content...
  </div>
</PopoverPanel>
```

Full example of the arrow:

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
