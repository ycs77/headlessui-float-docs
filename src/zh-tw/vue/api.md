# 元件 API {#component-api}

## `<Float>`

提供了浮動元素計算位置、轉場和 Portal 等功能。

- **Props**

  ```ts
  interface FloatProps {
    /**
     * <Float> 渲染出的元素或元件。
     * 預設："template"
     */
    as?: string | FunctionalComponent
    /**
     * 包裹了浮動元素的元素或元件。
     * 預設："div"
     */
    floatingAs?: string | FunctionalComponent
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
     * 啟用箭頭定位，也可以設定箭頭到容器之間的間距。
     * 預設：false
     */
    arrow?: boolean | number
    /**
     * 浮動元素自動選擇剩餘空間最多的方向。
     * 預設：false
     */
    autoPlacement?: boolean | Partial<AutoPlacementOptions & DetectOverflowOptions>
    /**
     * 當無法看到參考元素時套用 class。
     * - referenceHidden 策略套用 `referenceHiddenClass`
     * - escaped 策略套用 `escapedClass`
     * 預設：false
     */
    hide?: boolean | Partial<HideOptions & DetectOverflowOptions> | Partial<HideOptions & DetectOverflowOptions>[]
    referenceHiddenClass?: string
    escapedClass?: string
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
     * 使用 Vue 內建的過場元件來進行過場。
     * 預設：false
     */
    vueTransition?: boolean
    /**
     * 使用命名 class 來定義過場 CSS 效果。
     */
    transitionName?: string
    /**
     * CSS 過場類型。
     */
    transitionType?: 'transition' | 'animation'

    /**
     * 定義過場 class 的 props。
     */
    enter?: string
    enterFrom?: string
    enterTo?: string
    leave?: string
    leaveFrom?: string
    leaveTo?: string
    /**
     * 設定 transform 的 origin class。
     */
    originClass?: string | OriginClassResolver
    /**
     * 啟用自動設定 Tailwind CSS origin class。
     * 預設：false
     */
    tailwindcssOriginClass?: boolean

    /**
     * 將浮動元素渲染到 `<body>` 的底部。
     * 預設：false
     */
    portal?: boolean
    /**
     * 是否啟用 CSS transform 來定位參考元素。
     * 預設：false
     */
    transform?: boolean
    /**
     * 浮動元素自適應寬度。
     * 預設：false
     */
    adaptiveWidth?: boolean
    /**
     * 啟用組合模式。
     * 預設：false
     */
    composable?: boolean
    /**
     * 啟用 Dialog 模式。
     * 預設：false
     */
    dialog?: boolean

    /**
     * 自訂 Floating UI 的 middleware (中間件)。
     * 預設：() => []
     */
    middleware?: Middleware[] | ((refs: {
      referenceEl: ComputedRef<ReferenceElement | null>
      floatingEl: ComputedRef<HTMLElement | null>
    }) => Middleware[])
  }

  type OriginClassResolver = (placement: Placement) => string
  ```

- **事件**

  - `@show`
  - `@hide`
  - `@update`

- **Slot Props**

  ```ts
  interface FloatSlotProps {
    /**
     * 當前浮動元素顯示的方向位置。
     */
    placement: Placement
  }
  ```

## `<FloatReference>` {#float-reference}

可以在啟用 [組合模式](composable-mode.md) 時，用於需要當參考座標的參考元素。

- **Props**

  `<FloatReference>` 僅包含了 `<Float>` 的 `as` props：

  ```ts
  interface FloatReferenceProps extends Pick<FloatProps, 'as'> {}
  ```

- **Slot Props**

  ```ts
  interface FloatReferenceSlotProps {
    /**
     * 當前浮動元素顯示的方向位置。
     */
    placement: Placement
  }
  ```

- **參考：**[組合模式](composable-mode.md)

## `<FloatContent>` {#float-content}

可以在啟用 [組合模式](composable-mode.md) 時，用於需要定位的浮動元素。

- **Props**

  `<FloatContent>` 包含了 `<Float>` 的 `as`、`vue-transition`、`transition-name`、`transition-type`、`enter`、`enter-from`、`enter-to`、`leave`、`leave-from`、`leave-to`、`origin-class`、`tailwindcss-origin-class` props，並增加了一個額外的 prop：

  ```ts
  interface FloatContentProps extends Pick<FloatProps, 'as' | 'vueTransition' | 'transitionName' | 'transitionType' | 'enter' | 'enterFrom' | 'enterTo' | 'leave' | 'leaveFrom' | 'leaveTo' | 'originClass' | 'tailwindcssOriginClass'> {
    /**
     * 使用 Headless UI 的 `<TransitionChild>` 元件。
     * 預設：false
     */
    transitionChild?: boolean
  }
  ```

- **Slot Props**

  ```ts
  interface FloatContentSlotProps {
    /**
     * 當前浮動元素顯示的方向位置。
     */
    placement: Placement
  }
  ```

- **參考：**[組合模式](composable-mode.md)

## `<FloatArrow>` {#float-arrow}

自動定位箭頭位置。

- **Props**

  ```ts
  interface FloatArrowProps {
    /**
     * 顯示箭頭的元素或元件。
     * 預設："div"
     */
    as?: string | FunctionalComponent
    /**
     * 箭頭元素往浮動元素外面偏移的偏移量。
     * 預設：4
     */
    offset?: number
  }
  ```

- **Slot Props**

  ```ts
  interface FloatArrowSlotProps {
    /**
     * 當前浮動元素顯示的方向位置。
     */
    placement: Placement
  }
  ```

- **參考：**[箭頭](arrow.md)

## `<FloatVirtual>` {#float-virtual}

使用 Floating UI [虛擬元素](https://floating-ui.com/docs/virtual-elements) 功能定位的元件，常用於實現右鍵選單、跟隨鼠標等功能。

- **Props**

  `<FloatVirtual>` 包含了 `<Float>` 的 `as`、`show`、`placement`、`strategy`、`offset`、`shift`、`flip`、`arrow`、`autoPlacement`、`autoUpdate`、`zIndex`、`vue-transition`、`transition-name`、`transition-type`、`enter`、`enter-from`、`enter-to`、`leave`、`leave-from`、`leave-to`、`origin-class`、`tailwindcss-origin-class`、`portal`、`transform`、`middleware` props：

  ```ts
  interface FloatVirtualProps extends Pick<FloatProps, 'as' | 'show' | 'placement' | 'strategy' | 'offset' | 'shift' | 'flip' | 'arrow' | 'autoPlacement' | 'autoUpdate' | 'zIndex' | 'vueTransition' | 'transitionName' | 'transitionType' | 'enter' | 'enterFrom' | 'enterTo' | 'leave' | 'leaveFrom' | 'leaveTo' | 'originClass' | 'tailwindcssOriginClass' | 'portal' | 'transform' | 'middleware'> {}
  ```

- **事件**

  - `@show`
  - `@hide`
  - `@update`
  - `@initial`

  `<FloatVirtual>` 的 `initial` 事件包含以下的 props：

  ```ts
  import type { VirtualElement } from '@floating-ui/dom'

  interface FloatVirtualInitialProps {
    /**
     * 當前元素的顯示狀態。
     */
    show: Ref<boolean>
    /**
     * 當前浮動元素顯示的方向位置。
     */
    placement: Readonly<Ref<Placement>>
    /**
     * 參考元素。
     */
    reference: Ref<VirtualElement>
    /**
     * 浮動元素。
     */
    floating: Ref<HTMLElement | null>
  }
  ```

- **Slot Props**

  ```ts
  interface FloatVirtualSlotProps {
    /**
     * 當前浮動元素顯示的方向位置。
     */
    placement: Placement
    /**
     * 關閉虛擬元素。
     */
    close: () => void
  }
  ```

- **參考：**[虛擬元素](virtual-element.md)

## `<FloatContextMenu>` {#float-contextmenu}

提供了右鍵選單的定位功能。

- **Props**

  `<FloatContextMenu>` 包含了 `<FloatVirtual>` 除了 `show` 和 `portal` 以外的 props：

  ```ts
  interface FloatContextMenuProps extends Omit<FloatVirtualProps, 'show' | 'portal'> {}
  ```

- **Slot Props**

  `<FloatContextMenu>` 包含了跟 `<FloatVirtual>` 一樣的 slot props。

- **參考：**[虛擬元素](virtual-element.md)

## `<FloatCursor>` {#float-cursor}

提供了跟隨鼠標定位功能。

- **Props**

  `<FloatCursor>` 包含了 `<FloatVirtual>` 除了 `show` 和 `portal` 以外的 props，並增加了一個額外的 prop：

  ```ts
  interface FloatCursorProps extends Omit<FloatVirtualProps, 'show' | 'portal'> {
    /**
     * 增加全局隱藏鼠標的 CSS。
     * 預設：true
     */
    globalHideCursor?: boolean
  }
  ```

- **Slot Props**

  `<FloatCursor>` 包含了跟 `<FloatVirtual>` 的 slot props。

- **參考：**[虛擬元素](virtual-element.md)
