# Floating UI Options

## placement

Floating positioning placement:

```jsx
<Float placement="left-start">
```

All 12 placement in the Floating UI can be used:

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

The type of CSS position property, `absolute` or `fixed`:

```jsx
<Float strategy="fixed">
```

## offset

The offset (px) of the floating element from the reference element:

```jsx
<Float offset={8}>
```

::: tip INFO
More options supported by `offset`, refer to Floating UI's `offset` documentation: https://floating-ui.com/docs/offset
:::

## shift

Move the reference elements back into the view:

```jsx
<Float shift>
```

Set the offset (px) of the floating element from the view border:

```jsx
<Float shift={8}>
```

::: tip INFO
More options supported by `shift`, refer to Floating UI's `shift` documentation: https://floating-ui.com/docs/shift
:::

## flip

Change to the opposite placement to keep it in view:

::: warning
`flip` cannot be set at the same time as `autoPlacement`.
:::

```jsx
<Float flip>
```

Sets the minimum padding (px) of the floating element from the view border when flip:

```jsx
<Float flip={10}>
```

::: tip INFO
More options supported by `flip`, refer to Floating UI's `flip` documentation: https://floating-ui.com/docs/flip
:::

## autoPlacement {#auto-placement}

Floating elements choose the placement with more space left:

::: warning
`autoPlacement` cannot be set at the same time as `flip`.
:::

```jsx
<Float autoPlacement>
```

::: tip INFO
More options supported by `autoPlacement`, refer to Floating UI's `autoPlacement` documentation: https://floating-ui.com/docs/autoPlacement
:::

## hide <Badge label="v0.13+" />

When the reference element is not visible, will apply the class of `referenceHiddenClass`, which can add the `invisible` class to hide the floating element:

```jsx
<Float
  hide
  referenceHiddenClass="invisible"
>
```

You can also use another strategy, which is to apply the class of `escapedClass` if you can't see the floating element:

```jsx
<Float
  hide={{ strategy: 'escaped' }}
  escapedClass="opacity-50"
>
```

When you want to use two strategies, you can pass in an array:

```jsx
<Float
  hide={[{}, { strategy: 'escaped' }]}
>
```

::: tip INFO
More options supported by `hide`, refer to Floating UI's `hide` documentation: https://floating-ui.com/docs/hide
:::

## autoUpdate {#auto-update}

Automatically update floating elements when needed, the default value is `true`. Can be set to `false` to disable autoUpdate:

```jsx
<Float autoUpdate={false}>
```

::: tip INFO
More options supported by `autoUpdate`, refer to Floating UI's `autoUpdate` documentation: https://floating-ui.com/docs/autoUpdate
:::

## middleware

If the above basic settings do not satisfy your needs, you can add the Floating UI middleware yourself:

```jsx
import { offset } from '@floating-ui/react-dom'

const middleware = [
  offset({
    mainAxis: 10,
    crossAxis: 6,
  }),
]

<Float middleware={middleware}>
```

Or pass a function to get reference elements and floating elements in the parameters:

```js
const middleware = ({ referenceEl, floatingEl }) => [
  ...
]
```
