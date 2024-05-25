# 快速開始 {#quick-start}

Headless UI Float 是一個可以輕鬆在 [Headless UI](https://headlessui.com/) 中定位浮動元素的套件，使用 [Floating UI](https://floating-ui.com/) (新版 Popper.js) 來做定位。

::: warning 注意
Headless UI Float 只支援 **@headlessui/react** v1，在 **@headlessui/react** v2 將可以直接使用 `anchor` prop 來定位 Headless UI 元件，請參考 [Headless UI Menu 範例](https://github.com/tailwindlabs/headlessui/blob/7be23e5c7e2e71218cdba405ea4f4aca7924acc8/playgrounds/react/pages/menu/menu-with-transition.tsx) 來了解如何將 Menu 搭配過場元件使用。
:::

## 線上範例 {#online-demo}

可以在 StackBlitz 上試用 Headless UI Float：

* [**React**](https://stackblitz.com/github/ycs77/headlessui-float/tree/main/examples/example-react?file=src%2Fpages%2Ffloatingui-options.jsx)
* [**React + TS**](https://stackblitz.com/github/ycs77/headlessui-float/tree/main/examples/example-react-ts?file=src%2Fpages%2Ffloatingui-options.tsx)

## 安裝 {#installation}

套件相依於 **React**、**React DOM** 和 **@headlessui/react** v1，記得需要先安裝好。

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

## 開始使用 {#usage}

先去找一個需要自動定位元素位置的 Headless UI 元件，比如這裡用 `<Menu>` 元件來示範。引入 `<Float>` 元件：

```js
import { Float } from '@headlessui-float/react'
```

然後在 `<Menu.Button>` 和 `<Menu.Items>` 外包一層 `<Float>`：

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

需要注意，`<Float>` 必須包含2個子元素，第1個是參考元素，第2個是浮動元素。可以使用 Headless UI 元件或 HTML 元素。

::: tip 提示
如果要使用 HTML 元素，或手動控制 Headless UI 元件的顯示，請參考 [顯示/隱藏](other-options.md#show-hide)。
:::

然後刪除掉 `<Menu.Items>` 的 `absolute`、`right-0` 等定位 class，並加上 `placement="bottom-end"` 屬性：

```jsx
<Menu>
  <Float placement="bottom-end">
    ...
  </Float>
</Menu>
```

刪除掉 `<Menu.Items>` 的 `mt-2` class，並加上 `offset={4}` 屬性：

```jsx
<Menu>
  <Float placement="bottom-end" offset={4}>
    ...
  </Float>
</Menu>
```

然後 `<Menu>` 就可以自動定位內部的 `<Menu.Items>` 元件了。

除了 `<Menu>` 之外，同樣也可以用在 `<Listbox>`、`<Popover>` 或 `<Combobox>` 元件上，你可以使用 `<Float>` 在任何需要浮動定位的元素上。
