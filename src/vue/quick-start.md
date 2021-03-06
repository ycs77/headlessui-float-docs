# Quick Start

## Installation

This package is require **Vue 3** and **Headless UI Vue**, you must be installed them first.

```bash
# npm
npm i @headlessui-float/vue
# yarn
yarn add @headlessui-float/vue
```

### Online Demo

* [**Vue**](https://stackblitz.com/github/ycs77/headlessui-float/tree/main/examples/example-vue?file=src%2FApp.vue)
* [**Vue + TS**](https://stackblitz.com/github/ycs77/headlessui-float/tree/main/examples/example-vue-ts?file=src%2FApp.vue)

## Usage

Start by finding a Headless UI component that needs to position the element, such as the `<Menu>` component for this example. Import `<Float>` component:

```html
<script setup>
import { Float } from '@headlessui-float/vue'
</script>
```

Then wrap `<Float>` around `<MenuButton>` and `<MenuItems>`:

```diff
<Menu>
+ <Float>
    <MenuButton class="...">
      Options
    </MenuButton>

    <MenuItems class="...">
      ...
    </MenuItems>
+ </Float>
</Menu>
```

Note that `<Float>` must contain 2 child elements, the first is the reference element, and the second is the floating element. It can be a Headless UI component or an HTML element.

> If you want to use HTML elements, or manually control the display of Headless UI components, reference [Show/Hide](other-options.md#show-hide).

Then remove the `absolute`, `right-0` and other positioning class from `<MenuItems>`, and add the `placement="bottom-end"` attribute:

```html
<Menu>
  <Float placement="bottom-end">
    ...
  </Float>
</Menu>
```

Remove the `mt-2` class from `<MenuItems>`, and add the `:offset="4"` attribute:

```html
<Menu>
  <Float placement="bottom-end" :offset="4">
    ...
  </Float>
</Menu>
```

Then `<Menu>` can automatically position the inner `<MenuItems>`.

In addition to `<Menu>`, the same can be used on `<Listbox>`, `<Popover>` or `<Combobox>` components, and you can use `<Float>` on any element that requires floating positioning.
