# Floating UI 選項 {#floating-ui-options}

## placement

浮動定位方向：

```html
<Float placement="left-start">
```

Floating UI 裡 placement 的 12 個值都可以使用：

* top
* top-start
* top-end
* right
* right-start
* right-end
* bottom
* bottom-start
* bottom-end
* left
* left-start
* left-end

## strategy

CSS `position` 屬性，`absolute` 或 `fixed`：

```html
<Float strategy="fixed">
```

## offset

浮動元素離參考元素的偏移量 (px)：

```html
<Float :offset="8">
```

::: tip 提示
更多 `offset` 支援的輸入選項，請參考 Floating UI 的 `offset` 說明：https://floating-ui.com/docs/offset
:::

## shift

將超出界線的參考元素，偏移回至視圖內：

```html
<Float shift>
```

設定浮動元素離視圖邊界的偏移量 (px)：

```html
<Float :shift="8">
```

::: tip 提示
更多 `shift` 支援的輸入選項，請參考 Floating UI 的 `shift` 說明：https://floating-ui.com/docs/shift
:::

## flip

浮動元素超出邊界時，翻轉至不同的方向，預設為對面，確保可以在視圖中看到：

::: warning 注意
`flip` 不能和 `autoPlacement` 同時設定。
:::

```html
<Float flip>
```

設定翻轉時浮動元素最少離視圖邊界的距離 (px)：

```html
<Float :flip="10">
```

::: tip 提示
更多 `flip` 支援的輸入選項，請參考 Floating UI 的 `flip` 說明：https://floating-ui.com/docs/flip
:::

## autoPlacement {#auto-placement}

浮動元素自動選擇剩餘空間最多的方向：

::: warning 注意
`autoPlacement` 不能和 `flip` 同時設定。
:::

```html
<Float auto-placement>
```

::: tip 提示
更多 `autoPlacement` 支援的輸入選項，請參考 Floating UI 的 `autoPlacement` 說明：https://floating-ui.com/docs/autoPlacement
:::

<!-- ## hide

當無法看到參考元素時，就會隱藏浮動元素：

```html
<Float hide>
```

::: tip 提示
更多 `hide` 支援的輸入選項，請參考 Floating UI 的 `hide` 說明：https://floating-ui.com/docs/hide
::: -->

## autoUpdate {#auto-update}

自動在需要的時候更新浮動元素，預設值為 `true`。可以設為 `false` 把它關閉：

```html
<Float :auto-update="false">
```

::: tip 提示
更多 `autoUpdate` 支援的輸入選項，請參考 Floating UI 的 `autoUpdate` 說明：https://floating-ui.com/docs/autoUpdate
:::

## middleware

如果上述基本的設定無法滿足需求，可以自行增加 Floating UI 的 middleware：

```html
<Float :middleware="middleware">

<script setup>
import { offset } from '@floating-ui/dom'

const middleware = [
  offset({
    mainAxis: 10,
    crossAxis: 6,
  }),
]
</script>
```

或是可以傳入函數，可以在參數中取得參考元素和浮動元素：

```js
const middleware = ({ referenceEl, floatingEl }) => [
  ...
]
```
