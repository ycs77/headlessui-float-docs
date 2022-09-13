# 自適應寬度 {#adaptive-width}

在一些情況下，我們需要讓浮動元素和上方的參考元素有同等的寬度，此時我們可以增加以下設定：

先將 `<Float>` 元件增加 `as="div"` 和 `className="relative"`，將外圍渲染成 `<div className="relative">` 後，再增加 `floatingAs={React.Fragment}` 讓浮動元素外圍不渲染任何元素 (預設會渲染一層 `<div>` 元素)，直接對浮動元素進行定位，最後為參考元素和浮動元素加上 `w-full` class 就大功告成了。

::: tip 提示
需要升級套件至 **v0.9+** 才能使用 `floatingAs` prop。
:::

現在按鈕和選單就會有同等的寬度了：

```jsx
import * as React from 'react'

<Listbox>
  <Float
    as="div"
    className="relative"
    placement="bottom"
    offset={4}
    floatingAs={React.Fragment}
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

```jsx
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

```jsx
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

## 同時使用過場動畫 {#with-transition}

需要注意的是，如果過場動畫有使用到 CSS 的 `transform` 屬性的話，會無法正常使用。因為 `floatingAs` 設為 `React.Fragment` 時，會直接定位浮動元素，且為了優化效能，預設使用 `transform` 來做定位的。如果要使用的話，要關閉 `transform` 切換成 `top`/`left` 屬性來做定位：

```jsx
<Float transform={false}>
```

然後就可以加上過場動畫的 class 了：

```jsx
<Float
  transform={false}
  floatingAs={React.Fragment}
  enter="transition duration-200 ease-out"
  enterFrom="opacity-0 scale-75"
  enterTo="opacity-100 scale-100"
  leave="transition duration-150 ease-in"
  leaveFrom="opacity-100 scale-100"
  leaveTo="opacity-0 scale-75"
  tailwindcssOriginClass
>
```
