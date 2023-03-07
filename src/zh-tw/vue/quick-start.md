# 快速開始 {#quick-start}

## 線上 Demo {#online-demo}

* [**Vue**](https://stackblitz.com/github/ycs77/headlessui-float/tree/main/examples/example-vue?file=src%2FApp.vue)
* [**Vue + TS**](https://stackblitz.com/github/ycs77/headlessui-float/tree/main/examples/example-vue-ts?file=src%2FApp.vue)

## 安裝 {#installation}

套件相依於 **Vue 3** 和 **Headless UI Vue**，記得需要先安裝好。

```bash
# npm
npm i @headlessui-float/vue
# yarn
yarn add @headlessui-float/vue
```

## 開始使用 {#usage}

先去找一個需要自動定位元素位置的 Headless UI 元件，比如這裡用 `<Menu>` 元件來示範。引入 `<Float>` 元件：

```html
<script setup>
import { Float } from '@headlessui-float/vue'
</script>
```

然後在 `<MenuButton>` 和 `<MenuItems>` 外包一層 `<Float>`：

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
