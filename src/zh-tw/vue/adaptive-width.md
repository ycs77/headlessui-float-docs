# 自適應寬度 {#adaptive-width}

在一些情況下，我們需要讓**浮動元素**和上方的**參考元素**有同等的寬度，可以選擇使用 CSS 或 JS 的方式來實現。

## 使用 CSS 實現自適應寬度 {#adaptive-width-using-css}

要使用 CSS 來實現自適應寬度，我們可以增加以下設定：

先將 `<Float>` 元件增加 `as="div"` 和 `class="relative"`，將外圍渲染成 `<div class="relative">` 後，再增加 `floating-as="template"` 讓浮動元素外圍不渲染任何元素 (因為預設會渲染一層 `<div>` 元素)，直接對浮動元素進行定位，最後為參考元素和浮動元素加上 `w-full` class 就大功告成了。

現在按鈕和選單就會有同等的寬度了：

```html
<Listbox>
  <Float
    as="div"
    class="relative"
    placement="bottom"
    :offset="4"
    floating-as="template"
  >
    <ListboxButton class="w-full ...">
      ...
    </ListboxButton>

    <ListboxOptions class="w-full ...">
      ...
    </ListboxOptions>
  </Float>
</Listbox>
```

當然也可以直接指定寬度：

```html
<Listbox>
  <Float
    ...
    class="relative w-[260px]"
    ...
  >
    ...
  </Float>
</Listbox>
```

如果放在 `flex` 容器中要撐滿寬度的話，需要加上 `w-full` class：

```html
<div class="flex justify-center items-center">
  <Listbox>
    <Float
      ...
      class="relative w-full"
      ...
    >
      ...
    </Float>
  </Listbox>
</div>
```

::: tip 提示
這個解決方法有使用到 `floating-as="template"`，如果同時使用包含 CSS `transform` 的過場動畫的話，會造成衝突。需要使用的話請參考 [渲染浮動元素 Wrapper - 同時使用過場動畫](render-wrapper.md#with-transition) 來解決這個問題。
:::

## 使用 JS 實現自適應寬度 <Badge label="實驗性" /> {#adaptive-width-using-js}

有些情況下 CSS `relative` 無法正常同步浮動元素的寬度，比如像同時使用到 [`portal`](other-options.md#portal) 的時候。此時可以使用 `adaptive-width` prop，背後使用了 [`ResizeObserver` API](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) 來監測參考元素的寬度並同步到浮動元素上，但相對的是效能會比 CSS 實現還要差。

```html
<Float adaptive-width>
```

::: tip 提示
需要將套件升級至 **v0.10+** 才能使用 `adaptive-width` prop。
:::
