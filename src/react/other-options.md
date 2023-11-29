# Other Options

## Show/hide

Since the control of the display is in the Headless UI component, it can usually be used directly without any setting.

But if we need to control the display of the floating element (`<Menu.Items>`) manually, we need to set the `show` prop. Then set `static` on the component of the floating element to make it static, so that we can manually control the display state:

```jsx
const [show, setShow] = useState(false)
const toggle = () => {
  setShow(!show)
}

<Menu>
  <Float show={show}>
    <Menu.Button onClick={toggle}>
      Options
    </Menu.Button>

    <Menu.Items static>
      ...
    </Menu.Items>
  </Float>
</Menu>
```

HTML elements can also be used directly by setting `show` to control the display of floating elements (`<div>`):

```jsx
const [show, setShow] = useState(false)
const toggle = () => {
  setShow(!show)
}

<Float show={show}>
  <button onClick={toggle}>
    Options
  </button>

  <div>
    ...
  </div>
</Float>
```

## z-index

CSS `z-index` property for the floating element, the default value is 9999, and other numbers can be set:

```jsx
<Float zIndex={100}>
```

## Position mode

The default is to use CSS `top` / `left` to position floating elements. If you need to use CSS `transform` to position floating elements, you can enable `transform`:

```jsx
<Float transform>
```
