# 渲染 Wrapper 元素 {#render-wrapper}

## 渲染外層 Wrapper {#render-outer-wrapper}

預設 `<Float>` 不會渲染外層的 Wrapper 元素，比如像以下範例：

```html
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

因為 `<Float>` 預設的 `as` 是 `template`，會直接渲染出子元素。如果想要包裝其他的元素的話，可以傳入其他的 `as`：

```html {1}
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

浮動元素的 Wrapper 可以由 `floating-as` 設定，預設是 `div`：

```html
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

如果把 `floating-as` 設定為 `template` 時，浮動元素就不會渲染 Wrapper 元素，而直接定位浮動元素本身：

```html {1}
<Float show floating-as="template">
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

有時會需要在浮動元素的 Wrapper 上增加一些 HTML 屬性或 Class，可以使用 Vue 的 [Functional Component](https://vuejs.org/guide/extras/render-function.html#functional-components)：

```js
import { h, mergeProps } from 'vue'

const Wrapper = (props, { slots }) => {
  return h('div', mergeProps(props, {
    'class': 'wrapper-class',
    'data-label': 'wrapper label',
  }), slots)
}
```

然後將該元件傳入：

```html {1}
<Float show :floating-as="Wrapper">
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

如果在 TypeScript 中使用，可以加上 `FunctionalComponent` 類型：

```js
import { type FunctionalComponent, h, mergeProps } from 'vue'

const Wrapper: FunctionalComponent = (props, { slots }) => {
  return h('div', mergeProps(props, {
    'class': 'wrapper-class',
    'data-label': 'wrapper label',
  }), slots)
}
```

::: tip 提示
如果不想要使用傳入元件的方式的話，可以改用 `<FloatContent>` 元件，使用方法參考[組合模式](composable-mode.md)。
:::

## Template Ref 的注意事項 {#notice-of-template-ref}

`<Float>` 會取得 slot 中的2個子元素：參考元素和浮動元素，並綁定這2個子元素的 ref 來取得 DOM 元素，然後可以傳遞給 Floating UI 進行定位。Vue 在 `<Float>` 元件內部綁定過一次之後，就不能再在外部重新綁定了。因此像以下兩種綁定方式都是無效的：

```html
<Float show>
  <input ref="referenceElRef" type="text"> <!-- X -->
  <div ref="floatingElRef">content</div> <!-- X -->
</Float>
```

而如果在參考元素包上一層 `<div>` 之類的元素，就可以在參考元素內部綁定 ref，但浮動元素依然是不行的：

```html
<Float show>
  <div>
    <input ref="referenceElRef" type="text"> <!-- V -->
  </div>
  <div>
    <div ref="floatingElRef">content</div> <!-- X -->
  </div>
</Float>
```
