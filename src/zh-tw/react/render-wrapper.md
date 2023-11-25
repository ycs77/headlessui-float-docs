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
import { Fragment } from 'react'

<Float show floatingAs={Fragment}>
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

如果在 TypeScript 中使用，需要為 `forwardRef()` 加上 `HTMLDivElement` 型別變數，當然類型具體要看 `ref` 用在哪個 HTML 標籤上：

```tsx
import { forwardRef } from 'react'

const Wrapper = forwardRef<HTMLDivElement>((props, ref) => (
  <div
    ref={ref}
    {...props}
    className="wrapper-class"
    data-label="wrapper label"
  />
))
Wrapper.displayName = 'Wrapper'
```

::: tip 提示
如果不想要使用傳入元件的方式的話，可以改用 `<Float.Content>` 元件，使用方法參考[組合模式](composable-mode.md)。
:::
