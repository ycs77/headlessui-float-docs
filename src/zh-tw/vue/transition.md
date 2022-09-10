# Transition (過場) {#transition}

`<Float>` 自帶 `<transition>` 元件，只需要加上過場中需要的 class：

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

開啟 `tailwindcss-origin-class` 後，會需要根據 placement 自動加上對應的 Tailwind CSS `origin` class (例：`top` 對應 `origin-bottom` class、`bottom-start` 對應 `origin-top-left` class)。

如果使用了 `tailwindcss-origin-class`，也需要在 safelist 中增加 `origin` class：

```js
// tailwind.config.js
const { tailwindcssOriginSafelist } = require('@headlessui-float/vue')

module.exports = {
  safelist: [...tailwindcssOriginSafelist],
}
```

如果需要指定或覆蓋 `origin` class，可以用 `origin-class`：

```html
<Float origin-class="origin-top-left">
```

## 過場效果命名 {#named-transitions}

使用命名 class 來定義過場 CSS 效果：

```html
<Float transition-name="fade">
```

與之對應的的 class:

```vue
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
```
