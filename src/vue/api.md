# Component API

## `<Float>`

- **Props**

  ```ts
  interface FloatProps {
    /**
     * The element or component the <Float> should render as.
     * Default: "template"
     */
    as?: string | Component
    /**
     * The element or component that wraps the floating element.
     * Default: "div"
     */
    floatingAs?: string | Component
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
     * Default:
     */
    originClass?: string | OriginClassResolver
    /**
     * Enable automatically setting Tailwind CSS origin class.
     * Default: false
     */
    tailwindcssOriginClass?: boolean

    /**
     * Render floating element in the other exists element.
     * Default: false
     */
    portal?: boolean | string
    /**
     * Use CSS transform to positioning floating element.
     * Default: true
     */
    transform?: boolean

    /**
     * Customizing middleware for Floating UI.
     * Default: () => []
     */
    middleware?: Middleware[] | ((refs: {
      referenceEl: Ref<HTMLElement | null>,
      floatingEl: Ref<HTMLElement | null>,
    }) => Middleware[])
  }

  type OriginClassResolver = (placement: Placement) => string
  ```

- **Events**

  - `@show`
  - `@hide`
  - `@update`

## `<FloatArrow>` {#float-arrow}

- **Props**

  ```ts
  interface FloatArrowProps {
    /**
     * The element or component the arrow should render as.
     * Default: "div"
     */
    as?: string | Component
    /**
     * Offset of the arrow to the outside of the floating element.
     * Default: 4
     */
    offset?: number
  }
  ```

- **Slot Props**：

  ```ts
  interface FloatArrowSlotProps {
    /**
     * Current floating element placement.
     */
    placement: Placement
  }
  ```
