# Transition

`<Float>` use the `<Transition>` component, just adds the classes of transition:

```jsx
<Float
  enter="transition duration-200 ease-out"
  enterFrom="scale-95 opacity-0"
  enterTo="scale-100 opacity-100"
  leave="transition duration-150 ease-in"
  leaveFrom="scale-100 opacity-100"
  leaveTo="scale-95 opacity-0"
  tailwindcssOriginClass
>
```

When `tailwindcssOriginClass` is enabled, the corresponding Tailwind CSS `origin` class will be automatically added according to the placement (e.g. `top` corresponds to `origin-bottom` class, `bottom-start` corresponds to `origin-top-left` class).

If using the `tailwindcssOriginClass`, also need to add the `origin` class to the safelist:

*tailwind.config.js*
```js
const { tailwindcssOriginSafelist } = require('@headlessui-float/react')

module.exports = {
  safelist: [...tailwindcssOriginSafelist],
}
```

If need to override the `origin` class, can use `originClass`.

```html
<Float originClass="origin-top-left">
```
