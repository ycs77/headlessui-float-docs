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

> More options supported by `offset`, refer to Floating UI's `offset` documentation: https://floating-ui.com/docs/offset

## shift

Move the reference elements back into the view:

```html
<Float shift>
```

Set the offset (px) of the floating element from the view border:

```html
<Float :shift="8">
```

> More options supported by `shift`, refer to Floating UI's `shift` documentation: https://floating-ui.com/docs/shift

## flip

Change to the opposite placement to keep it in view:

> `flip` cannot be used with `autoPlacement`

```html
<Float flip>
```

Sets the minimum padding (px) of the floating element from the view border when flip:

```html
<Float :flip="10">
```

> More options supported by `flip`, refer to Floating UI's `flip` documentation: https://floating-ui.com/docs/flip

## autoPlacement {#auto-placement}

Floating elements choose the placement with more space left:

> `autoPlacement` cannot be used with `flip`

```html
<Float auto-placement>
```

> More options supported by `autoPlacement`, refer to Floating UI's `autoPlacement` documentation: https://floating-ui.com/docs/autoPlacement

<!-- ## hide

When the reference element is not visible, the floating element is hidden: -->

## autoUpdate {#auto-update}

Automatically update floating elements when needed, the default value is `true`. Can be set to `false` to disable autoUpdate:

```html
<Float :auto-update="false">
```

> More options supported by `autoUpdate`, refer to Floating UI's `autoUpdate` documentation: https://floating-ui.com/docs/autoUpdate

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
