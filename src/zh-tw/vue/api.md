# 元件 API {#component-api}

## `<Float>`

- **Props**

  ```ts
  interface FloatProps {
    /**
     * 包裹了浮動元素的元素或元件。
     * 預設："div"
     */
    as?: string | Component
    /**
     * 控制是否顯示浮動元素。
     * 設為 `true` / `false` 會強制指定是否顯示，
     * 但如果設為 `null` 則會將控制權交給 Headless UI 元件來決定。
     * 預設：null
     */
    show?: boolean
    /**
     * 浮動定位方向位置。
     * 預設："bottom-start"
     */
    placement?: Placement
    /**
     * 浮動元素的 CSS `position` 屬性。
     * 預設："absolute"
     */
    strategy?: Strategy
    /**
     * 浮動元素離參考元素的偏移量。
     */
    offset?: OffsetOptions
    /**
     * 將超出界線的參考元素，偏移回至視圖內。
     * 預設：false
     */
    shift?: boolean | number | Partial<ShiftOptions & DetectOverflowOptions>
    /**
     * 浮動元素超出邊界時，翻轉至不同的方向。
     * 預設：false
     */
    flip?: boolean | number | Partial<FlipOptions & DetectOverflowOptions>
    /**
     * 啟用箭頭定位。
     * 預設：false
     */
    arrow?: boolean | number
    /**
     * 浮動元素自動選擇剩餘空間最多的方向。
     * 預設：false
     */
    autoPlacement?: boolean | Partial<AutoPlacementOptions & DetectOverflowOptions>
    /**
     * 自動在需要的時候更新浮動元素。
     * 預設：true
     */
    autoUpdate?: boolean | Partial<AutoUpdateOptions>
    /**
     * 浮動元素的 CSS `z-index` 屬性。
     * 預設：9999
     */
    zIndex?: number | string

    /**
     * 定義 `<transition>` 過場 class 的 prop。
     */
    enter?: string
    enterFrom?: string
    enterTo?: string
    leave?: string
    leaveFrom?: string
    leaveTo?: string
    /**
     * 設定 transform 的 origin class。
     * 預設：
     */
    originClass?: string | OriginClassResolver
    /**
     * 啟用自動設定 Tailwind CSS origin class。
     * 預設：false
     */
    tailwindcssOriginClass?: boolean

    /**
     * 傳送浮動元素到頁面的其他元素之中。
     * 預設：false
     */
    portal?: boolean | string
    /**
     * 是否啟用 CSS transform 來定位參考元素。
     * 預設：true
     */
    transform?: boolean

    /**
     * 自訂 Floating UI 的 middleware (中間件)。
     * 預設：() => []
     */
    middleware?: Middleware[] | ((refs: {
      referenceEl: Ref<HTMLElement | null>,
      floatingEl: Ref<HTMLElement | null>,
    }) => Middleware[])
  }

  type OriginClassResolver = (placement: Placement) => string
  ```

- **事件**

  - `@show`
  - `@hide`
  - `@update`

## `<FloatArrow>` {#float-arrow}

- **Props**

  ```ts
  interface FloatArrowProps {
    /**
     * 顯示箭頭的元素或元件。
     * 預設："div"
     */
    as?: string | Component
    /**
     * 箭頭元素往浮動元素外面偏移的偏移量。
     * 預設：4
     */
    offset?: number
  }
  ```

- **Slot Props**：

  ```ts
  interface FloatArrowSlotProps {
    /**
     * 目前浮動元素顯示的方向位置。
     */
    placement: Placement
  }
  ```
