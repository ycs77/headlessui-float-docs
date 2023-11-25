# Component API

## `<Float>`

Provides positioning floating element, transition, and portal.

- **Props**

  ```ts
  interface FloatProps {
    /**
     * The element or component the <Float> should render as.
     * Default: "template"
     */
    as?: string | FunctionalComponent
    /**
     * The element or component that wraps the floating element.
     * Default: "div"
     */
    floatingAs?: string | FunctionalComponent
    /**
     * Control the floating element is show or not.
     * Set to `true` / `false` to force the display or not,
     * But if set to `null` it will give over control to the Headless UI component.
     * Default: null
     */
    show?: boolean
    /**
     * Floating placement.
     * Default: "bottom-start"
     */
    placement?: Placement
    /**
     * CSS `position` property of the floating element.
     * Default: "absolute"
     */
    strategy?: Strategy
    /**
     * The offset (px) of the floating element from the reference element.
     */
    offset?: OffsetOptions
    /**
     * Move the reference elements back into the view.
     * Default: false
     */
    shift?: boolean | number | Partial<ShiftOptions & DetectOverflowOptions>
    /**
     * Change to the opposite placement to keep it in view.
     * Default: false
     */
    flip?: boolean | number | Partial<FlipOptions & DetectOverflowOptions>
    /**
     * Enable arrow positioning, or setting the padding between container and arrow.
     * Default: false
     */
    arrow?: boolean | number
    /**
     * Floating elements choose the placement with more space left.
     * Default: false
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
     * Automatically update floating elements when needed.
     * Default: true
     */
    autoUpdate?: boolean | Partial<AutoUpdateOptions>
    /**
     * CSS `z-index` property for the floating element.
     * Default: 9999
     */
    zIndex?: number | string

    /**
     * Use named class to define transition styles.
     */
    transitionName?: string
    /**
     * CSS transition type.
     */
    transitionType?: 'transition' | 'animation'

    /**
     * Props for customizing transition classes.
     */
    enter?: string
    enterFrom?: string
    enterTo?: string
    leave?: string
    leaveFrom?: string
    leaveTo?: string
    /**
     * The origin class of transform.
     */
    originClass?: string | OriginClassResolver
    /**
     * Enable automatically setting Tailwind CSS origin class.
     * Default: false
     */
    tailwindcssOriginClass?: boolean

    /**
     * Render the floating element to the end of `<body>`.
     * Default: false
     */
    portal?: boolean
    /**
     * Use CSS transform to positioning floating element.
     * Default: false
     */
    transform?: boolean
    /**
     * Floating element adaptive width.
     * Default: false
     */
    adaptiveWidth?: boolean
    /**
     * Enable Composable mode.
     * Default: false
     */
    composable?: boolean
    /**
     * Enable Dialog mode.
     * Default: false
     */
    dialog?: boolean

    /**
     * Customizing middleware for Floating UI.
     * Default: () => []
     */
    middleware?: Middleware[] | ((refs: {
      referenceEl: Ref<ReferenceElement | null>
      floatingEl: Ref<HTMLElement | null>
    }) => Middleware[])
  }

  type OriginClassResolver = (placement: Placement) => string
  ```

- **Events**

  - `@show`
  - `@hide`
  - `@update`

- **Slot Props**

  ```ts
  interface FloatSlotProps {
    /**
     * Current floating element placement.
     */
    placement: Placement
  }
  ```

## `<FloatReference>` {#float-reference}

Can be used for reference element that needs to be referenced when [Composable Mode](composable-mode.md) is enabled.

- **Props**

  `<FloatReference>` accepts the same props as `<Float>`:

  ```ts
  interface FloatReferenceProps extends Pick<FloatProps, 'as'> {}
  ```

- **Slot Props**

  ```ts
  interface FloatReferenceSlotProps {
    /**
     * Current floating element placement.
     */
    placement: Placement
  }
  ```

- **See also:** [Composable Mode](composable-mode.md)

## `<FloatContent>` {#float-content}

Can be used for floating element that needs to be positioned when [Composable Mode](composable-mode.md) is enabled.

- **Props**

  `<FloatContent>` accepts the same props as `<Float>` includes `as`, `transition-name`, `transition-type`, `enter`, `enter-from`, `enter-to`, `leave`, `leave-from`, `leave-to`, `origin-class`, `tailwindcss-origin-class` props, plus a additional prop:

  ```ts
  interface FloatContentProps extends Pick<FloatProps, 'as' | 'transitionName' | 'transitionType' | 'enter' | 'enterFrom' | 'enterTo' | 'leave' | 'leaveFrom' | 'leaveTo' | 'originClass' | 'tailwindcssOriginClass'> {
    /**
     * Use the `<TransitionChild>` of Headless UI.
     * Default: false
     */
    transitionChild?: boolean
  }
  ```

- **Slot Props**

  ```ts
  interface FloatContentSlotProps {
    /**
     * Current floating element placement.
     */
    placement: Placement
  }
  ```

- **See also:** [Composable Mode](composable-mode.md)

## `<FloatArrow>` {#float-arrow}

Provides positioning arrow element.

- **Props**

  ```ts
  interface FloatArrowProps {
    /**
     * The element or component the arrow should render as.
     * Default: "div"
     */
    as?: string | FunctionalComponent
    /**
     * Offset of the arrow to the outside of the floating element.
     * Default: 4
     */
    offset?: number
  }
  ```

- **Slot Props**

  ```ts
  interface FloatArrowSlotProps {
    /**
     * Current floating element placement.
     */
    placement: Placement
  }
  ```

- **See also:** [Arrow](arrow.md)

## `<FloatVirtual>` {#float-virtual}

Utilizes the Floating UI [Virtual Elements](https://floating-ui.com/docs/virtual-elements) is often used to implement functionality such as context menu and mouse cursor following.

- **Props**

  `<FloatVirtual>` accepts the same props as `<Float>` includes `as`, `show`, `placement`, `strategy`, `offset`, `shift`, `flip`, `arrow`, `autoPlacement`, `autoUpdate`, `zIndex`, `transition-name`, `transition-type`, `enter`, `enter-from`, `enter-to`, `leave`, `leave-from`, `leave-to`, `origin-class`, `tailwindcss-origin-class`, `portal`, `transform`, `middleware` props:

  ```ts
  interface FloatVirtualProps extends Pick<FloatProps, 'as' | 'show' | 'placement' | 'strategy' | 'offset' | 'shift' | 'flip' | 'arrow' | 'autoPlacement' | 'autoUpdate' | 'zIndex' | 'transitionName' | 'transitionType' | 'enter' | 'enterFrom' | 'enterTo' | 'leave' | 'leaveFrom' | 'leaveTo' | 'originClass' | 'tailwindcssOriginClass' | 'portal' | 'transform' | 'middleware'> {}
  ```

- **Events**

  - `@show`
  - `@hide`
  - `@update`
  - `@initial`

  The `initial` event of `<FloatVirtual>` component includes the following props:

  ```ts
  import type { VirtualElement } from '@floating-ui/dom'

  interface FloatVirtualInitialProps {
    /**
     * Current floating element is show or not.
     */
    show: Ref<boolean>
    /**
     * Current floating element placement.
     */
    placement: Readonly<Ref<Placement>>
    /**
     * Reference element.
     */
    reference: Ref<VirtualElement>
    /**
     * Floating element.
     */
    floating: Ref<HTMLElement | null>
  }
  ```

- **Slot Props**

  ```ts
  interface FloatVirtualSlotProps {
    /**
     * Current floating element placement.
     */
    placement: Placement
    /**
     * Close virtual element.
     */
    close: () => void
  }
  ```

- **See also:** [Virtual Element](virtual-element.md)

## `<FloatContextMenu>` {#float-contextmenu}

Provides positioning context menu.

- **Props**

  `<FloatContextMenu>` accepts the same props as `<FloatVirtual>` except `show` and `portal`:

  ```ts
  interface FloatContextMenuProps extends Omit<FloatVirtualProps, 'show' | 'portal'> {}
  ```

- **Slot Props**

  `<FloatContextMenu>` contains the same slot props as `<FloatVirtual>`.

- **See also:** [Virtual Element](virtual-element.md)

## `<FloatCursor>` {#float-cursor}

Provides positioning mouse cursor following.

- **Props**

  `<FloatCursor>` accepts the same props as `<FloatVirtual>` except `show` and `portal`, plus a additional prop:

  ```ts
  interface FloatCursorProps extends Omit<FloatVirtualProps, 'show' | 'portal'> {
    /**
     * Add the global CSS to hide the cursor.
     * Default: true
     */
    globalHideCursor?: boolean
  }
  ```

- **Slot Props**

  `<FloatCursor>` contains the same slot props as `<FloatVirtual>`.

- **See also:** [Virtual Element](virtual-element.md)
