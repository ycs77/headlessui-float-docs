# 自適應寬度 {#adaptive-width}

在一些情況下，我們需要讓浮動元素和上方的參考元素有同等的寬度，此時我們可以增加以下設定：

先將 `<Float>` 元件增加 `as="div"` 和 `class="relative"`，將外圍渲染成 `<div class="relative">` 後，再增加 `floating-as="template"` 讓浮動元素外圍不渲染任何元素 (預設會渲染一層 `<div>` 元素)，直接對浮動元素進行定位，最後為參考元素和浮動元素加上 `w-full` class 就大功告成了。

::: tip 提示
需要升級套件至 v0.9+ 才能使用 `floating-as` prop。
:::

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
    <Listbox.Button class="w-full ...">
      ...
    </Listbox.Button>

    <Listbox.Options class="w-full ...">
      ...
    </Listbox.Options>
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
