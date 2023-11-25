# Floating UI Options

## placement

Floating positioning placement:

```html
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

```html
<Float strategy="fixed">
```

## offset

The offset (px) of the floating element from the reference element:

```html
<Float :offset="8">
```

::: tip INFO
More options supported by `offset`, refer to Floating UI's `offset` documentation: https://floating-ui.com/docs/offset
:::

## shift

Move the reference elements back into the view:

```html
<Float shift>
```

Set the offset (px) of the floating element from the view border:

```html
<Float :shift="8">
```

::: tip INFO
More options supported by `shift`, refer to Floating UI's `shift` documentation: https://floating-ui.com/docs/shift
:::

## flip

Change to the opposite placement to keep it in view:

::: warning
`flip` cannot be set at the same time as `autoPlacement`.
:::

```html
<Float flip>
```

Sets the minimum padding (px) of the floating element from the view border when flip:

```html
<Float :flip="10">
```

::: tip INFO
More options supported by `flip`, refer to Floating UI's `flip` documentation: https://floating-ui.com/docs/flip
:::

## autoPlacement {#auto-placement}

Floating elements choose the placement with more space left:

::: warning
`autoPlacement` cannot be set at the same time as `flip`.
:::

```html
<Float auto-placement>
```

::: tip INFO
More options supported by `autoPlacement`, refer to Floating UI's `autoPlacement` documentation: https://floating-ui.com/docs/autoPlacement
:::

## hide <Badge label="v0.13+" />

When the reference element is not visible, will apply the class of `reference-hidden-class`, which can add the `invisible` class to hide the floating element:

```html
<Float
  hide
  reference-hidden-class="invisible"
>
```

You can also use another strategy, which is to apply the class of `escaped-class` if you can't see the floating element:

```html
<Float
  :hide="{ strategy: 'escaped' }"
  escaped-class="opacity-50"
>
```

When you want to use two strategies, you can pass in an array:

```html
<Float
  :hide="[{}, { strategy: 'escaped' }]"
>
```

::: tip INFO
More options supported by `hide`, refer to Floating UI's `hide` documentation: https://floating-ui.com/docs/hide
:::

## autoUpdate {#auto-update}

Automatically update floating elements when needed, the default value is `true`. Can be set to `false` to disable autoUpdate:

```html
<Float :auto-update="false">
```

::: tip INFO
More options supported by `autoUpdate`, refer to Floating UI's `autoUpdate` documentation: https://floating-ui.com/docs/autoUpdate
:::

## middleware

If the above basic settings do not satisfy your needs, you can add the Floating UI middleware yourself:

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

Or pass a function to get reference elements and floating elements in the parameters:

```js
const middleware = ({ referenceEl, floatingEl }) => [
  ...
]
```
