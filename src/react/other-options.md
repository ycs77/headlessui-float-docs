# Other Options

## Show/Hide

If the floating element is Headless UI component, since the control of display is in the Headless UI component, it can be used directly.

However, if you want to manually control the display of the floating element, need to set `show`:

```jsx
const [show, setShow] = useState(false)

<Float show={show}>
```

> If the floating element uses an HTML element instead of the Headless UI component, need to set `show`.

## z-index

CSS `z-index` property for the floating element, the default value is 9999, and other numbers can be set:

```jsx
<Float zIndex={100}>
```

## Position Mode

The default is to use CSS transform to position floating elements. If this causes a conflict in transform properties, can set `false` to use `top` / `left` for positioning:

```jsx
<Float transform={false}>
```
