# 快速開始 {#quick-start}

Headless UI Float 是一個可以輕鬆在 [Headless UI](https://headlessui.com/) 中定位浮動元素的套件，使用 [Floating UI](https://floating-ui.com/) (新版 Popper.js) 來做定位。

## 線上範例 {#online-demo}

可以在 StackBlitz 上試用 Headless UI Float：

* [**Vue**](https://stackblitz.com/github/ycs77/headlessui-float/tree/main/examples/example-vue?file=src%2FApp.vue)
* [**Vue + TS**](https://stackblitz.com/github/ycs77/headlessui-float/tree/main/examples/example-vue-ts?file=src%2FApp.vue)

## 安裝 {#installation}

套件相依於 **Vue 3** 和 **Headless UI Vue**，記得需要先安裝好。

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

## 開始使用 {#usage}

先去找一個需要自動定位元素位置的 Headless UI 元件，比如這裡用 `<Menu>` 元件來示範。引入 `<Float>` 元件：

```html
<script setup>
import { Float } from '@headlessui-float/vue'
</script>
```

然後在 `<MenuButton>` 和 `<MenuItems>` 外包一層 `<Float>`：

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

需要注意，`<Float>` 必須包含2個子元素，第1個是參考元素，第2個是浮動元素。可以使用 Headless UI 元件或 HTML 元素。

::: tip 提示
如果要使用 HTML 元素，或手動控制 Headless UI 元件的顯示，請參考 [顯示/隱藏](other-options.md#show-hide)。
:::

然後刪除掉 `<MenuItems>` 的 `absolute`、`right-0` 等定位 class，並加上 `placement="bottom-end"` 屬性：

```html
<Menu>
  <Float placement="bottom-end">
    ...
  </Float>
</Menu>
```

刪除掉 `<MenuItems>` 的 `mt-2` class，並加上 `:offset="4"` 屬性：

```html
<Menu>
  <Float placement="bottom-end" :offset="4">
    ...
  </Float>
</Menu>
```

然後 `<Menu>` 就可以自動定位內部的 `<MenuItems>` 元件了。

除了 `<Menu>` 之外，同樣也可以用在 `<Listbox>`、`<Popover>` 或 `<Combobox>` 元件上，你可以使用 `<Float>` 在任何需要浮動定位的元素上。

## 替代方案 {#alternatives}

我建立 Headless UI Float 的目的主要是為了可以輕鬆地為 Headless UI 的元件來做定位，未考慮到許多複雜的使用場景，如果發現本套件無法輕鬆達到你的目的，建議可以參考以下方式：

### 純 CSS {#pure-css}

這可說是最單純的定位方式了，如果只有固定一個方向的話，建議可以直接使用此方式。

以下提供一個 Tailwind CSS 的範例：

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

### 直接使用 Floating UI {#direct-using-floating-ui}

Headless UI Float 就是使用 [Floating UI](https://floating-ui.com/) 來做定位，如果你想要實現更為複雜的需求，請直接使用 Floating UI。
