# Quick Start

Headless UI Float is a package that makes it easy to position floating elements in [Headless UI](https://headlessui.com/), it uses [Floating UI](https://floating-ui.com/) (new version Popper.js) for positioning.

## Online demo

You can try Headless UI Float online on StackBlitz:

* [**Vue**](https://stackblitz.com/github/ycs77/headlessui-float/tree/main/examples/example-vue?file=src%2Fpages%2Ffloatingui-options.vue)
* [**Vue + TS**](https://stackblitz.com/github/ycs77/headlessui-float/tree/main/examples/example-vue-ts?file=src%2Fpages%2Ffloatingui-options.vue)

## Installation

This package is require **Vue 3** and **Headless UI Vue**, you must be installed them first.

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

## Alternatives

The main purpose of creating Headless UI Float is to make it easy to position Headless UI components. It does not take into account many complex use cases. If you find that this package cannot easily achieve your goals, I recommend the following methods:

### Using CSS

This is arguably the simplest way to position an element. If you only need to position it in one direction, I recommend using this method directly.

Here is an example using Tailwind CSS:

```html
<Menu as="div" class="relative">
  <MenuButton>
    Options
  </MenuButton>

  <MenuItems class="absolute left-0 mt-2 w-56 origin-top-left">
    ...
  </MenuItems>
</Menu>
```

### Direct using Floating UI

The Headless UI Float is to use [Floating UI](https://floating-ui.com/) for positioning. If you need to implement more complex requirements, please use Floating UI directly.
