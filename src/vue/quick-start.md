# Quick Start

Headless UI Float is a package that makes it easy to position floating elements in [Headless UI](https://headlessui.com/), it uses [Floating UI](https://floating-ui.com/) (new version Popper.js) for positioning.

::: tip
[Headless UI](https://headlessui.com/) has [released version 2.0](https://tailwindcss.com/blog/headless-ui-v2#built-in-anchor-positioning) (currently for React only), which builds in anchor positioning with Floating UI. Therefore, this package will be unnecessary when Headless UI v2 supports Vue.
:::

## Online demo

You can try Headless UI Float online on StackBlitz:

* [**Vue**](https://stackblitz.com/github/ycs77/headlessui-float/tree/main/examples/example-vue?file=src%2Fpages%2Ffloatingui-options.vue)
* [**Vue + TS**](https://stackblitz.com/github/ycs77/headlessui-float/tree/main/examples/example-vue-ts?file=src%2Fpages%2Ffloatingui-options.vue)

## Installation

This package is require **Vue 3** and **@headlessui/vue** v1, you must be installed them first.

::: code-group

```bash [npm]
npm i @headlessui-float/vue
```

```bash [yarn]
yarn add @headlessui-float/vue
```

```bash [pnpm]
pnpm add @headlessui-float/vue
```

:::

## Usage

Start by finding a Headless UI component that needs to position the element, such as the `<Menu>` component for this example. Import `<Float>` component:

```html
<script setup>
import { Float } from '@headlessui-float/vue'
</script>
```

Then wrap `<Float>` around `<MenuButton>` and `<MenuItems>`:

```html {2,10}
<Menu>
  <Float>
    <MenuButton class="...">
      Options
    </MenuButton>

    <MenuItems class="...">
      ...
    </MenuItems>
  </Float>
</Menu>
```

Note that `<Float>` must contain 2 child elements, the first is the reference element, and the second is the floating element. It can be a Headless UI component or an HTML element.

::: tip INFO
If you want to use HTML elements, or manually control the display of Headless UI components, reference [Show/hide](other-options.md#show-hide).
:::

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
