# Render Wrapper

## Render outer wrapper

By default, `<Float>` does not render the outer wrapper element, for example, as shown in the following example:

```jsx
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

Since the default `as` for `<Float>` is `Fragment`, it directly renders the child element. If you want to wrap other elements, you can pass in a different `as` prop:

```jsx {1}
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

```jsx
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

If you set `floating-as` to `Fragment`, the floating element will not render the wrapper element, but position the floating element itself directly:

```jsx {1}
import { Fragment } from 'react'

<Float show floatingAs={Fragment}>
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

Sometimes you may need to add HTML attributes or classes to the wrapper of the floating element, you can use the [Forwarding Refs](https://reactjs.org/docs/forwarding-refs.html) of React:

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

Then passing the component:

```jsx {1}
<Float show floatingAs={Wrapper}>
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

If using TypeScript, you need to add an `HTMLDivElement` type variable to `forwardRef()`, depending on which HTML tag the `ref` is used on:

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

::: tip INFO
If you don't want to use the approach of passing component, you can use the `<Float.Content>` component instead, following the usage instructions for the [Composable Mode](composable-mode.md).
:::
