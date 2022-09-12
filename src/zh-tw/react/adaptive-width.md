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
