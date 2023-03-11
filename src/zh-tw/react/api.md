# 元件 API {#component-api}

## `<Float>`

提供了浮動元素計算位置、轉場和 Portal 等功能。

- **Props**

  ```ts
  interface FloatProps {
    /**
     * <Float> 渲染出的元素或元件。
     * 預設：<Fragment>
     */
    as?: ElementType
    /**
     * 包裹了浮動元素的元素或元件。
     * 預設："div"
     */
    floatingAs?: ElementType
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
     * 預設：true
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
      referenceEl: MutableRefObject<Element | VirtualElement | null>
      floatingEl: MutableRefObject<HTMLElement | null>
    }) => Middleware[])

    /**
     * 事件
     */
    onShow?: () => void
    onHide?: () => void
    onUpdate?: () => void
  }

  type OriginClassResolver = (placement: Placement) => string
  ```

- **Render Prop**

  ```ts
  interface FloatRenderProp {
    /**
     * 當前浮動元素顯示的方向位置。
     */
    placement: Placement
  }
  ```

## `<Float.Reference>` {#float-reference}

可以在啟用 [組合模式](composable-mode.md) 時，用於需要當參考座標的參考元素。

- **Props**

  `<Float.Reference>` 僅包含了 `<Float>` 的 `as` props：

  ```ts
  interface FloatReferenceProps extends Pick<FloatProps, 'as'> {}
  ```

- **Render Prop**

  ```ts
  interface FloatReferenceRenderProp {
    /**
     * 當前浮動元素顯示的方向位置。
     */
    placement: Placement
  }
  ```

- **參考：**[組合模式](composable-mode.md)

## `<Float.Content>` {#float-content}

可以在啟用 [組合模式](composable-mode.md) 時，用於需要定位的浮動元素。

- **Props**

  `<Float.Content>` 包含了 `<Float>` 的 `as`、`enter`、`enterFrom`、`enterTo`、`leave`、`leaveFrom`、`leaveTo`、`originClass`、`tailwindcssOriginClass` props，並增加了一個額外的 prop：

  ```ts
  interface FloatContentProps extends Pick<FloatProps, 'as' | 'enter' | 'enterFrom' | 'enterTo' | 'leave' | 'leaveFrom' | 'leaveTo' | 'originClass' | 'tailwindcssOriginClass'> {
    /**
     * 使用 Headless UI 的 `<Transition.Child>` 元件。
     * 預設：false
     */
    transitionChild?: boolean
  }
  ```

- **Render Prop**

  ```ts
  interface FloatContentRenderProp {
    /**
     * 當前浮動元素顯示的方向位置。
     */
    placement: Placement
  }
  ```

- **參考：**[組合模式](composable-mode.md)

## `<Float.Arrow>` {#float-arrow}

- **Props**

  ```ts
  interface FloatArrowProps {
    /**
     * 顯示箭頭的元素或元件。
     * 預設："div"
     */
    as?: ElementType
    /**
     * 箭頭元素往浮動元素外面偏移的偏移量。
     * 預設：4
     */
    offset?: number
  }
  ```

- **Render Prop**

  ```ts
  interface FloatArrowRenderProp {
    /**
     * 當前浮動元素顯示的方向位置。
     */
    placement: Placement
  }
  ```

- **參考：**[箭頭](arrow.md)

## `<Float.Virtual>` {#float-virtual}

使用 Floating UI [虛擬元素](https://floating-ui.com/docs/virtual-elements) 功能定位的元件，常用於實現右鍵選單、跟隨鼠標等功能。

- **Props**

  `<Float.Virtual>` 包含了 `<Float>` 的 `as`、`show`、`placement`、`strategy`、`offset`、`shift`、`flip`、`arrow`、`autoPlacement`、`hide`、`autoUpdate`、`zIndex`、`enter`、`enterFrom`、`enterTo`、`leave`、`leaveFrom`、`leaveTo`、`originClass`、`tailwindcssOriginClass`、`portal`、`transform`、`middleware` props：

  ```ts
  interface FloatVirtualProps extends Pick<FloatProps, 'as' | 'show' | 'placement' | 'strategy' | 'offset' | 'shift' | 'flip' | 'arrow' | 'autoPlacement' | 'hide' | 'autoUpdate' | 'zIndex' | 'enter' | 'enterFrom' | 'enterTo' | 'leave' | 'leaveFrom' | 'leaveTo' | 'originClass' | 'tailwindcssOriginClass' | 'portal' | 'transform' | 'middleware'> {
    /**
     * 事件
     */
    onInitial: (props: FloatVirtualInitialProps) => void
  }
  ```

  `<Float.Virtual>` 的 `onInitial` 事件包含以下的 props：

  ```ts
  import type { ExtendedRefs } from '@floating-ui/react'

  interface FloatVirtualInitialProps {
    /**
     * 當前元素的顯示狀態。
     */
    show: boolean
    setShow: Dispatch<SetStateAction<boolean>>
    /**
     * 當前浮動元素顯示的方向位置。
     */
    placement: Readonly<Ref<Placement>>
    /**
     * 參考元素和浮動元素。
     */
    refs: ExtendedRefs<HTMLElement>
  }
  ```

- **Render Prop**

  ```ts
  interface FloatVirtualRenderProp {
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

## `<Float.ContextMenu>` {#float-contextmenu}

提供了右鍵選單的定位功能。

- **Props**

  `<Float.ContextMenu>` 包含了 `<Float.Virtual>` 除了 `show` 和 `portal` 以外的 props：

  ```ts
  interface FloatContextMenuProps extends Omit<FloatVirtualProps, 'show' | 'portal' | 'onInitial'> {}
  ```

- **Render Prop**

  `<Float.ContextMenu>` 包含了跟 `<Float.Virtual>` 一樣的 render prop。

- **參考：**[虛擬元素](virtual-element.md)

## `<Float.Cursor>` {#float-cursor}

提供了跟隨鼠標定位功能。

- **Props**

  `<Float.Cursor>` 包含了 `<Float.Virtual>` 除了 `show` 和 `portal` 以外的 props，並增加了一個額外的 prop：

  ```ts
  interface FloatCursorProps extends Omit<FloatVirtualProps, 'show' | 'portal' | 'onInitial'> {
    /**
     * 增加全局隱藏鼠標的 CSS。
     * 預設：true
     */
    globalHideCursor?: boolean
  }
  ```

- **Render Prop**

  `<Float.Cursor>` 包含了跟 `<Float.Virtual>` 一樣的 render prop。

- **參考：**[虛擬元素](virtual-element.md)
