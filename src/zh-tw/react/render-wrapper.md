# 渲染 Wrapper 元素 {#render-wrapper}

## 渲染外層 Wrapper {#render-outer-wrapper}

預設 `<Float>` 不會渲染外層的 Wrapper 元素，比如像以下範例：

```jsx
<Float show>
  <button type="button">button</button>
  <div>content</div>
</Float>
```

會渲染出以下的 HTML：

```html
<button type="button">button</button>
<div>
  <div>content</div>
</div>
```

因為 `<Float>` 預設的 `as` 是 `Fragment`，會直接渲染出子元素。如果想要包裝其他的元素的話，可以傳入其他的 `as`：

```jsx {1}
<Float show as="div">
  <button type="button">button</button>
  <div>content</div>
</Float>
```

就可以渲染外層的 Wrapper 元素：

```html {1,6}
<div>
  <button type="button">button</button>
  <div>
    <div>content</div>
  </div>
</div>
```

## 渲染浮動元素 Wrapper {#render-floating-element-wrapper}

浮動元素的 Wrapper 可以由 `floatingAs` 設定，預設是 `div`：

```jsx
<Float show>
  <button type="button">button</button>
  <div>content</div>
</Float>
```

會渲染出以下的 HTML：

```html {2,4}
<button type="button">button</button>
<div>
  <div>content</div>
</div>
```

如果把 `floatingAs` 設定為 `Fragment` 時，浮動元素就不會渲染 Wrapper 元素，而直接定位浮動元素本身：

```jsx {1}
<Float show floatingAs={React.Fragment}>
  <button type="button">button</button>
  <div>content</div>
</Float>
```

會渲染出以下的 HTML：

```html
<button type="button">button</button>
<div>content</div>
```

### 傳入元件 Wrapper {#pass-component-wrapper}

有時會需要在浮動元素的 Wrapper 上增加一些 HTML 屬性或 Class，可以使用 React 的 [Forwarding Refs](https://reactjs.org/docs/forwarding-refs.html)：

```jsx
import { forwardRef } from 'react'

const Wrapper = forwardRef((props, ref) => (
  <div
    ref={ref}
    {...props}
    className="wrapper-class"
    data-label="wrapper label"
  />
))
Wrapper.displayName = 'Wrapper'
```

然後將該元件傳入：

```jsx {1}
<Float show floatingAs={Wrapper}>
  <button type="button">button</button>
  <div>content</div>
</Float>
```

會渲染出以下的 HTML：

```html {2}
<button type="button">button</button>
<div class="wrapper-class" data-label="wrapper label">
  <div>content</div>
</div>
```

::: tip 提示
如果不想要使用傳入元件的方式的話，可以改用 `<Float.Content>` 元件，使用方法參考[組合模式](composable-mode.md)。
:::

### 同時使用過場動畫 {#with-transition}

需要注意的是，設定 `floatingAs={React.Fragment}` 並同時使用包含 CSS `transform` 的過場動畫的話，會無法正常使用。因為 `floatingAs` 設為 `Fragment` 時，會直接定位浮動元素；且為了優化效能，預設使用 `transform` 來做定位的。因此會造成過場動畫的 `transform` 會和定位用的 `transform` 造成衝突。

如果要使用的話，需要關閉 `transform` 來切換成 `top`/`left` 屬性來做定位：

```jsx
<Float transform={false}>
```

然後就可以加上過場動畫的 class 了：

```jsx
import React from 'react'

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
