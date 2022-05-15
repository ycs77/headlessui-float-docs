# Component API

## Float

| Prop                       | Type                                              | Default        | Description                                                                           |
| -------------------------- | ------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------- |
| `as`                       | <code>String &#124; Component</code>              | `div`          | The element or component the floating element should render as.                       |
| `show`                     | <code>Boolean</code>                              | —              | Control the floating element is show or not.                                          |
| `placement`                | <code>Placement</code>                            | `bottom-start` | Floating placement.                                                                   |
| `strategy`                 | <code>Strategy</code>                             | `absolute`     | CSS `position` property of the floating element.                                      |
| `offset`                   | <code>Number &#124; Object &#124; Function</code> | —              | The offset (px) of the floating element from the reference element.                   |
| `shift`                    | <code>Boolean &#124; Number &#124; Object</code>  | `false`        | Move the reference elements back into the view.                                       |
| `flip`                     | <code>Boolean &#124; Number &#124; Object</code>  | `false`        | Change to the opposite placement to keep it in view.                                  |
| `arrow`                    | <code>Boolean &#124; Number</code>                | `false`        | Enable arrow positioning.                                                             |
| `auto-placement`           | <code>Boolean &#124; Object</code>                | `false`        | Floating elements choose the placement with more space left.                          |
| `auto-update`              | <code>Boolean &#124; Object</code>                | `true`         | Automatically update floating elements when needed.                                   |
| `z-index`                  | <code>Number</code>                               | `9999`         | CSS `z-index` property for the floating element.                                      |
| `enter`                    | <code>String</code>                               | —              | Classes to add to the transitioning element during the entire enter phase.            |
| `enter-from`               | <code>String</code>                               | —              | Classes to add to the transitioning element before the enter phase starts.            |
| `enter-to`                 | <code>String</code>                               | —              | Classes to add to the transitioning element immediately after the enter phase starts. |
| `leave`                    | <code>String</code>                               | —              | Classes to add to the transitioning element during the entire leave phase.            |
| `leave-from`               | <code>String</code>                               | —              | Classes to add to the transitioning element before the leave phase starts.            |
| `leave-to`                 | <code>String</code>                               | —              | Classes to add to the transitioning element immediately after the leave phase starts. |
| `origin-class`             | <code>String &#124; Function</code>               | —              | The origin class of transform.                                                        |
| `tailwindcss-origin-class` | <code>Boolean</code>                              | `false`        | Enable automatically setting Tailwind CSS origin class.                               |
| `portal`                   | <code>Boolean &#124; String</code>                | `false`        | Render floating element in the other exists element.                                  |
| `transform`                | <code>Boolean</code>                              | `true`         | Use CSS transform to positioning floating element.                                    |
| `middleware`               | <code>Array &#124; Function</code>                | `() => []`     | Floating UI middleware                                                                |

| Event    | Description                                             |
| -------- | ------------------------------------------------------- |
| `show`   | Triggered when the floating element is show.            |
| `hide`   | Triggered when the floating element is hide.            |
| `update` | Triggered when the floating element position is update. |

## FloatArrow

| Prop     | Type                                 | Default | Description                                                 |
| -------- | ------------------------------------ | ------- | ----------------------------------------------------------- |
| `as`     | <code>String &#124; Component</code> | `div`   | The element or component the arrow should render as.        |
| `offset` | <code>Number</code>                  | `4`     | Offset of the arrow to the outside of the floating element. |

| Slot Prop   | Description                         |
| ----------- | ----------------------------------- |
| `placement` | Current floating element placement. |
