# Component API

## `<Float>`

Provides positioning floating element, transition, and portal.

- **Props**

  ```ts
  interface FloatProps {
    /**
     * The element or component the <Float> should render as.
     * Default: <Fragment>
     */
    as?: ElementType
    /**
     * The element or component that wraps the floating element.
     * Default: "div"
     */
    floatingAs?: ElementType
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
     * Enable arrow positioning.
     * Default: false
     */
    arrow?: boolean | number
    /**
     * Floating elements choose the placement with more space left.
     * Default: false
     */
    autoPlacement?: boolean | Partial<AutoPlacementOptions & DetectOverflowOptions>
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
     * Default: true
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
      referenceEl: MutableRefObject<Element | VirtualElement | null>
      floatingEl: MutableRefObject<HTMLElement | null>
    }) => Middleware[])

    /**
     * Events
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
     * Current floating element placement.
     */
    placement: Placement
  }
  ```

## `<Float.Reference>` {#float-reference}

Can be used for reference element that needs to be referenced when [Composable Mode](composable-mode.md) is enabled.

- **Props**

  `<Float.Reference>` accepts the same props as `<Float>`:

  ```ts
  interface FloatReferenceProps extends Pick<FloatProps, 'as'> {}
  ```

- **Render Prop**

  ```ts
  interface FloatReferenceRenderProp {
    /**
     * Current floating element placement.
     */
    placement: Placement
  }
  ```

- **See also:** [Composable Mode](composable-mode.md)

## `<Float.Content>` {#float-content}

Can be used for floating element that needs to be positioned when [Composable Mode](composable-mode.md) is enabled.

- **Props**

  `<Float.Content>` accepts the same props as `<Float>` includes `as`, `enter`, `enterFrom`, `enterTo`, `leave`, `leaveFrom`, `leaveTo`, `originClass`, `tailwindcssOriginClass` props, plus a additional prop:

  ```ts
  interface FloatContentProps extends Pick<FloatProps, 'as' | 'enter' | 'enterFrom' | 'enterTo' | 'leave' | 'leaveFrom' | 'leaveTo' | 'originClass' | 'tailwindcssOriginClass'> {
    /**
     * Use the `<Transition.Child>` of Headless UI.
     * Default: false
     */
    transitionChild?: boolean
  }
  ```

- **Render Prop**

  ```ts
  interface FloatContentRenderProp {
    /**
     * Current floating element placement.
     */
    placement: Placement
  }
  ```

- **See also:** [Composable Mode](composable-mode.md)

## `<Float.Arrow>` {#float-arrow}

Provides positioning arrow element.

- **Props**

  ```ts
  interface FloatArrowProps {
    /**
     * The element or component the arrow should render as.
     * Default: "div"
     */
    as?: ElementType
    /**
     * Offset of the arrow to the outside of the floating element.
     * Default: 4
     */
    offset?: number
  }
  ```

- **Render Prop**

  ```ts
  interface FloatArrowRenderProp {
    /**
     * Current floating element placement.
     */
    placement: Placement
  }
  ```

- **See also:** [Arrow](arrow.md)

## `<Float.Virtual>` {#float-virtual}

Utilizes the Floating UI [Virtual Elements](https://floating-ui.com/docs/virtual-elements) is often used to implement functionality such as context menu and mouse cursor following.

- **Props**

  `<Float.Virtual>` accepts the same props as `<Float>` includes `as`, `show`, `placement`, `strategy`, `offset`, `shift`, `flip`, `arrow`, `autoPlacement`, `hide`, `autoUpdate`, `zIndex`, `enter`, `enterFrom`, `enterTo`, `leave`, `leaveFrom`, `leaveTo`, `originClass`, `tailwindcssOriginClass`, `portal`, `transform`, `middleware` props:

  ```ts
  interface FloatVirtualProps extends Pick<FloatProps, 'as' | 'show' | 'placement' | 'strategy' | 'offset' | 'shift' | 'flip' | 'arrow' | 'autoPlacement' | 'hide' | 'autoUpdate' | 'zIndex' | 'enter' | 'enterFrom' | 'enterTo' | 'leave' | 'leaveFrom' | 'leaveTo' | 'originClass' | 'tailwindcssOriginClass' | 'portal' | 'transform' | 'middleware'> {
    /**
     * Events
     */
    onInitial: (props: FloatVirtualInitialProps) => void
  }
  ```

  The `onInitial` event of `<Float.Virtual>` component includes the following props:

  ```ts
  import type { ExtendedRefs } from '@floating-ui/react'

  interface FloatVirtualInitialProps {
    /**
     * Current floating element is show or not.
     */
    showRef: [boolean, Dispatch<SetStateAction<boolean>>]
    /**
     * Current floating element placement.
     */
    placement: Readonly<Ref<Placement>>
    /**
     * Refs of reference element and floating element.
     */
    refs: ExtendedRefs<HTMLElement>
  }
  ```

- **Render Prop**

  ```ts
  interface FloatVirtualRenderProp {
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

## `<Float.ContextMenu>` {#float-contextmenu}

Provides positioning context menu.

- **Props**

  `<Float.ContextMenu>` accepts the same props as `<Float.Virtual>` except `show` and `portal`:

  ```ts
  interface FloatContextMenuProps extends Omit<FloatVirtualProps, 'show' | 'portal' | 'onInitial'> {}
  ```

- **Render Prop**

  `<Float.ContextMenu>` contains the same render prop as `<Float.Virtual>`.

- **See also:** [Virtual Element](virtual-element.md)

## `<Float.Cursor>` {#float-cursor}

Provides positioning mouse cursor following.

- **Props**

  `<Float.Cursor>` accepts the same props as `<Float.Virtual>` except `show` and `portal`, plus a additional prop:

  ```ts
  interface FloatCursorProps extends Omit<FloatVirtualProps, 'show' | 'portal' | 'onInitial'> {
    /**
     * Add the global CSS to hide the cursor.
     * Default: true
     */
    globalHideCursor?: boolean
  }
  ```

- **Render Prop**

  `<Float.Cursor>` contains the same render prop as `<Float.Virtual>`.

- **See also:** [Virtual Element](virtual-element.md)
