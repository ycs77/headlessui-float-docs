# 自適應寬度 {#adaptive-width}

在一些情況下，我們需要讓**浮動元素**和上方的**參考元素**有同等的寬度，可以選擇使用 CSS 或 JS 的方式來實現。

## 使用 CSS 實現自適應寬度 {#adaptive-width-using-css}

要使用 CSS 來實現自適應寬度，我們可以增加以下設定：

先將 `<Float>` 元件增加 `as="div"` 和 `className="relative"`，將外圍渲染成 `<div className="relative">` 後，再增加 `floatingAs={Fragment}` 讓浮動元素外圍不渲染任何元素 (因為預設會渲染一層 `<div>` 元素)，直接對浮動元素進行定位，最後為參考元素和浮動元素加上 `w-full` class 就大功告成了。

現在按鈕和選單就會有同等的寬度了：

```jsx {5,6,9,11,15}
import { Fragment } from 'react'

<Listbox>
  <Float
    as="div"
    className="relative"
    placement="bottom"
    offset={4}
    floatingAs={Fragment}
  >
    <Listbox.Button className="w-full ...">
      ...
    </Listbox.Button>

    <Listbox.Options className="w-full ...">
      ...
    </Listbox.Options>
  </Float>
</Listbox>
```

當然也可以直接指定寬度：

```jsx {4}
<Listbox>
  <Float
    ...
    className="relative w-[260px]"
    ...
  >
    ...
  </Float>
</Listbox>
```

如果放在 `flex` 容器中要撐滿寬度的話，需要加上 `w-full` class：

```jsx {5}
<div className="flex justify-center items-center">
  <Listbox>
    <Float
      ...
      className="relative w-full"
      ...
    >
      ...
    </Float>
  </Listbox>
</div>
```

## 使用 JS 實現自適應寬度 {#adaptive-width-using-js}

有些情況下 CSS `relative` 無法正常同步浮動元素的寬度，比如像同時使用到 [`portal`](other-options.md#portal) 的時候。此時可以使用 `adaptiveWidth` prop，背後使用了 [`ResizeObserver` API](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) 來監測參考元素的寬度並同步到浮動元素上，但相對的是效能會比 CSS 實現還要差。

```jsx
<Float adaptiveWidth>
```

::: tip 提示
需要將套件升級至 **v0.10+** 才能使用 `adaptiveWidth` prop。
:::
