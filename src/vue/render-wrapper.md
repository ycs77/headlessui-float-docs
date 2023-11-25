# Render Wrapper

## Render outer wrapper

By default, `<Float>` does not render the outer wrapper element, for example, as shown in the following example:

```html
<Float show>
  <button type="button">button</button>
  <div>content</div>
</Float>
```

The following HTML will be rendered:

```html
<button type="button">button</button>
<div>
  <div>content</div>
</div>
```

Since the default `as` for `<Float>` is `template`, it directly renders the child element. If you want to wrap other elements, you can pass in a different `as` prop:

```html {1}
<Float show as="div">
  <button type="button">button</button>
  <div>content</div>
</Float>
```

And it will render the outer wrapper element:

```html {1,6}
<div>
  <button type="button">button</button>
  <div>
    <div>content</div>
  </div>
</div>
```

## Render floating element wrapper

The wrapper element for the floating element can be set using the `floating-as` prop, and by default it is `div`:

```html
<Float show>
  <button type="button">button</button>
  <div>content</div>
</Float>
```

The following HTML will be rendered:

```html {2,4}
<button type="button">button</button>
<div>
  <div>content</div>
</div>
```

If you set `floating-as` to `template`, the floating element will not render the wrapper element, but position the floating element itself directly:

```html {1}
<Float show floating-as="template">
  <button type="button">button</button>
  <div>content</div>
</Float>
```

And it will render the following HTML:

```html
<button type="button">button</button>
<div>content</div>
```

### Pass component wrapper

Sometimes you may need to add HTML attributes or classes to the wrapper of the floating element, you can use the [Functional Component](https://vuejs.org/guide/extras/render-function.html#functional-components) of Vue:

```js
import { h, mergeProps } from 'vue'

const Wrapper = (props, { slots }) => {
  return h('div', mergeProps(props, {
    'class': 'wrapper-class',
    'data-label': 'wrapper label',
  }), slots)
}
```

Then passing the component:

```html {1}
<Float show :floating-as="Wrapper">
  <button type="button">button</button>
  <div>content</div>
</Float>
```

The following HTML will be rendered:

```html {2}
<button type="button">button</button>
<div class="wrapper-class" data-label="wrapper label">
  <div>content</div>
</div>
```

If using TypeScript, you can add the `FunctionalComponent` type:

```js
import { type FunctionalComponent, h, mergeProps } from 'vue'

const Wrapper: FunctionalComponent = (props, { slots }) => {
  return h('div', mergeProps(props, {
    'class': 'wrapper-class',
    'data-label': 'wrapper label',
  }), slots)
}
```

::: tip INFO
If you don't want to use the approach of passing component, you can use the `<FloatContent>` component instead, following the usage instructions for the [Composable Mode](composable-mode.md).
:::
