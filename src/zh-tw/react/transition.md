# Transition (過場) {#transition}

`<Float>` 自帶 `<Transition>` 元件，只需要加上過場中需要的 class：

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

開啟 `tailwindcssOriginClass` 後，會需要根據 placement 自動加上對應的 Tailwind CSS `origin` class (例：`top` 對應 `origin-bottom` class、`bottom-start` 對應 `origin-top-left` class)。

如果使用了 `tailwindcssOriginClass`，也需要在 safelist 中增加 `origin` class：

```js
// tailwind.config.js
const { tailwindcssOriginSafelist } = require('@headlessui-float/react')

module.exports = {
  safelist: [...tailwindcssOriginSafelist],
}
```

如果需要指定或覆蓋 `origin` class，可以用 `originClass`：

```jsx
<Float originClass="origin-top-left">
```
