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

::: tip INFO
If you don't want to use the approach of passing component, you can use the `<FloatContent>` component instead, following the usage instructions for the [Composable Mode](composable-mode.md).
:::

### With transition

It should be noted if setting `floating-as="template"` and using the transition that includes CSS transform at the same time will result in abnormal behavior. When `floating-as` is set to `template`, the floating element is positioned directly, and for performance optimization, transform is used for positioning by default. Therefore, conflicts may occur between the transform used in the transition animation and the transform used for positioning.

If you need to use it, turn off `transform` to switch to using `top`/`left` properties for positioning:

```html
<Float :transform="false">
```

Then you can add the class for the transition:

```html
<Float
  :transform="false"
  floating-as="template"
  enter="transition duration-200 ease-out"
  enter-from="opacity-0 scale-75"
  enter-to="opacity-100 scale-100"
  leave="transition duration-150 ease-in"
  leave-from="opacity-100 scale-100"
  leave-to="opacity-0 scale-75"
  tailwindcss-origin-class
>
```