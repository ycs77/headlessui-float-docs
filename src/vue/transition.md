# Transition

`<Float>` use the `<transition>` component, just adds the classes of transition:

```html
<Float
  enter="transition duration-200 ease-out"
  enter-from="scale-95 opacity-0"
  enter-to="scale-100 opacity-100"
  leave="transition duration-150 ease-in"
  leave-from="scale-100 opacity-100"
  leave-to="scale-95 opacity-0"
  tailwindcss-origin-class
>
```

When `tailwindcss-origin-class` is enabled, the corresponding Tailwind CSS `origin` class will be automatically added according to the placement (e.g. `top` corresponds to `origin-bottom` class, `bottom-start` corresponds to `origin-top-left` class).

If using the `tailwindcss-origin-class`, also need to add the `origin` class to the safelist:

*tailwind.config.js*
```js
const { tailwindcssOriginSafelist } = require('@headlessui-float/vue')

module.exports = {
  safelist: [...tailwindcssOriginSafelist],
}
```

If need to override the `origin` class, can use `origin-class`.

```html
<Float origin-class="origin-top-left">
```
