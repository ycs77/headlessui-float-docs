# Other Options

## Show/hide

Since the control of the display is in the Headless UI component, it can usually be used directly without any setting.

But if we need to control the display of the floating element (`<MenuItems>`) manually, we need to set the `show` prop. Then set `static` on the component of the floating element to make it static, so that we can manually control the display state:

```html
<Menu>
  <Float :show="show">
    <MenuButton @click="toggle">
      Options
    </MenuButton>

    <MenuItems static>
      ...
    </MenuItems>
  </Float>
</Menu>

<script setup>
const show = ref(false)
const toggle = () => {
  show.value = !show.value
}
</script>
```

HTML elements can also be used directly by setting `show` to control the display of floating elements (`<div>`):

```html
<Float :show="show">
  <button @click="toggle">
    Options
  </button>

  <div>
    ...
  </div>
</Float>

<script setup>
const show = ref(false)
const toggle = () => {
  show.value = !show.value
}
</script>
```

## z-index

CSS `z-index` property for the floating element, the default value is 9999, and other numbers can be set:

```html
<Float :z-index="100">
```

## Position mode

The default is to use `top` / `left` to position floating elements. If you need to use transform to position floating elements, you can enable `transform`:

```html
<Float transform>
```
