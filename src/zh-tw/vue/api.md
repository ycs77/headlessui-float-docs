# Component API

## Float

| Prop                       | Type                                              | Default        | Description                               |
| -------------------------- | ------------------------------------------------- | -------------- | ----------------------------------------- |
| `as`                       | <code>String &#124; Component</code>              | `div`          | 包裹了浮動元素的元素或元件                |
| `show`                     | <code>Boolean</code>                              | —              | 控制是否顯示浮動元素                      |
| `placement`                | <code>Placement</code>                            | `bottom-start` | 浮動定位方向位置                          |
| `strategy`                 | <code>Strategy</code>                             | `absolute`     | 浮動元素的 CSS `position` 屬性            |
| `offset`                   | <code>Number &#124; Object &#124; Function</code> | —              | 浮動元素離參考元素的偏移量                |
| `shift`                    | <code>Boolean &#124; Number &#124; Object</code>  | `false`        | 將超出界線的參考元素，偏移回至視圖內      |
| `flip`                     | <code>Boolean &#124; Number &#124; Object</code>  | `false`        | 浮動元素超出邊界時，翻轉至不同的方向      |
| `arrow`                    | <code>Boolean &#124; Number</code>                | `false`        | 啟用箭頭定位                              |
| `auto-placement`           | <code>Boolean &#124; Object</code>                | `false`        | 浮動元素自動選擇剩餘空間最多的方向        |
| `auto-update`              | <code>Boolean &#124; Object</code>                | `true`         | 自動在需要的時候更新浮動元素              |
| `z-index`                  | <code>Number</code>                               | `9999`         | 浮動元素的 CSS `z-index` 屬性             |
| `enter`                    | <code>String</code>                               | —              | `<transition>` 過場進入時增加的 class     |
| `enter-from`               | <code>String</code>                               | —              | `<transition>` 過場進入開始時增加的 class |
| `enter-to`                 | <code>String</code>                               | —              | `<transition>` 過場進入結束時增加的 class |
| `leave`                    | <code>String</code>                               | —              | `<transition>` 過場離開時增加的 class     |
| `leave-from`               | <code>String</code>                               | —              | `<transition>` 過場離開開始時增加的 class |
| `leave-to`                 | <code>String</code>                               | —              | `<transition>` 過場離開結束時增加的 class |
| `origin-class`             | <code>String &#124; Function</code>               | —              | 設定 transform 的 origin class            |
| `tailwindcss-origin-class` | <code>Boolean</code>                              | `false`        | 啟用自動設定 Tailwind CSS origin class    |
| `portal`                   | <code>Boolean &#124; String</code>                | `false`        | 傳送浮動元素到頁面的其他元素之中          |
| `transform`                | <code>Boolean</code>                              | `true`         | 是否啟用 CSS transform 來定位參考元素     |
| `middleware`               | <code>Array &#124; Function</code>                | `() => []`     | Floating UI middleware                    |

| Event    | Description              |
| -------- | ------------------------ |
| `show`   | 在開啟浮動元素時觸發     |
| `hide`   | 在關閉浮動元素時觸發     |
| `update` | 在更新浮動元素定位時觸發 |

## FloatArrow

| Prop     | Type                                 | Default | Description                        |
| -------- | ------------------------------------ | ------- | ---------------------------------- |
| `as`     | <code>String &#124; Component</code> | `div`   | 顯示箭頭的元素或元件               |
| `offset` | <code>Number</code>                  | `4`     | 箭頭元素往浮動元素外面偏移的偏移量 |

| Slot Prop   | Description                |
| ----------- | -------------------------- |
| `placement` | 目前浮動元素顯示的方向位置 |
