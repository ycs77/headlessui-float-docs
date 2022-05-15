# Other Options

## Show/Hide

If the floating element is Headless UI component, since the control of display is in the Headless UI component, it can be used directly.

However, if you want to manually control the display of the floating element, need to set `show`:

```html
<Float :show="show">

<script setup>
const show = ref(false)
</script>
```

> If the floating element uses an HTML element instead of the Headless UI component, need to set `show`.

## z-index

CSS `z-index` property for the floating element, the default value is 9999, and other numbers can be set:

```html
<Float :z-index="100">
```

## Position Mode

The default is to use CSS transform to position floating elements. If this causes a conflict in transform properties, can set `false` to use `top` / `left` for positioning:

```html
<Float :transform="false">
```
