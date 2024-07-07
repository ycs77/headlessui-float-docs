# 替代方案 {#alternatives}

我建立 Headless UI Float 的目的主要是為了可以輕鬆地為 Headless UI 的元件來做定位，並沒有考慮到許多複雜的使用場景，如果發現本套件無法輕鬆達到你的目的，建議可以參考以下方式：

## 使用 CSS {#using-css}

這可說是最單純的定位方式了，如果只有固定一個方向的話，建議可以直接使用此方式。

以下提供一個 Tailwind CSS 的範例：

```jsx
<Menu as="div" className="relative">
  <MenuButton>
    Options
  </MenuButton>

  <MenuItems className="absolute left-0 mt-2 w-56">
    ...
  </MenuItems>
</Menu>
```

## 直接使用 Floating UI {#direct-using-floating-ui}

Headless UI Float 就是使用 [Floating UI](https://floating-ui.com/) 來做定位，如果你想要實現更為複雜的需求，請直接使用 Floating UI。

## Tooltip 替代方案 {#alternatives-to-tooltips}

Headless UI Float 沒有針對 Tooltip 上做過優化，建議使用 [Tippy.js](https://atomiks.github.io/tippyjs/) / [Tippy.js for React](https://github.com/atomiks/tippyjs-react) 來代替。
