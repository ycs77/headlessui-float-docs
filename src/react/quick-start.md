# Quick Start

## Online Demo

* [**React**](https://stackblitz.com/github/ycs77/headlessui-float/tree/main/examples/example-react?file=src%2FApp.jsx)
* [**React + TS**](https://stackblitz.com/github/ycs77/headlessui-float/tree/main/examples/example-react-ts?file=src%2FApp.tsx)

## Installation

This package is require **React**, **React DOM** and **Headless UI React**, you must be installed them first.

::: code-group

```bash [npm]
npm i @headlessui-float/react
```

```bash [yarn]
yarn add @headlessui-float/react
```

```bash [pnpm]
pnpm add @headlessui-float/react
```

:::

## Usage

Start by finding a Headless UI component that needs to position the element, such as the `<Menu>` component for this example. Import `<Float>` component:

```js
import { Float } from '@headlessui-float/react'
```

Then wrap `<Float>` around `<Menu.Button>` and `<Menu.Items>`:

```jsx {2,10}
<Menu>
  <Float>
    <Menu.Button className="...">
      Options
    </Menu.Button>

    <Menu.Items className="...">
      ...
    </Menu.Items>
  </Float>
</Menu>
```

Note that `<Float>` must contain 2 child elements, the first is the reference element, and the second is the floating element. It can be a Headless UI component or an HTML element.

::: tip INFO
If you want to use HTML elements, or manually control the display of Headless UI components, reference [Show/Hide](other-options.md#show-hide).
:::

Then remove the `absolute`, `right-0` and other positioning class from `<Menu.Items>`, and add the `placement="bottom-end"` attribute:

```jsx
<Menu>
  <Float placement="bottom-end">
    ...
  </Float>
</Menu>
```

Remove the `mt-2` class from `<Menu.Items>`, and add the `offset={4}` attribute:

```jsx
<Menu>
  <Float placement="bottom-end" offset={4}>
    ...
  </Float>
</Menu>
```

Then `<Menu>` can automatically position the inner `<Menu.Items>`.

In addition to `<Menu>`, the same can be used on `<Listbox>`, `<Popover>` or `<Combobox>` components, and you can use `<Float>` on any element that requires floating positioning.
