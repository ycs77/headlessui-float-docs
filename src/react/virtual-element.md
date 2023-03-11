# Virtual Element

Components that use the Floating UI's [virtual elements](https://floating-ui.com/docs/virtual-elements) feature can position floating element relative to the virtual element. This is often used to implement functionality such as context menus and following the cursor.

::: tip INFO
Requires upgrading to **v0.11+** to use the virtual element.
:::

## Context menu

`<Float.ContextMenu>` is a headless component for a context menu that allows you to design the content of the menu. If you want to use the `<Menu>` component, you need to enable the `static` of `<Menu.Items>`:

```jsx
import { Float } from '@headlessui-float/react'

<Float.ContextMenu
  enter="transition-opacity duration-200 ease-out"
  enter-from="opacity-0"
  enter-to="opacity-100"
>
  {({ close }) => (
    <Menu>
      <Menu.Items static className="w-48 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden focus:outline-none">
        ...
      </Menu.Items>
    </Menu>
  )}
</Float.ContextMenu>
```

## Following cursor

`<Float.Cursor>` component provides a follow cursor feature that allows any element to move along with the cursor movement, and it also supports touch devices:

```jsx
import { Float } from '@headlessui-float/react'

<Float.Cursor as="div">
  <div className="w-5 h-5 bg-emerald-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
</Float.Cursor>
```

The default behavior of `<Float.Cursor>` is to add CSS to hide the cursor. If you want disable this feature you can set `globalHideCursor` to `false`:

```jsx
<Float.Cursor globalHideCursor={false}>
```

## Custom virtual element

Of course, you can also use `<Float.Virtual>` to customize your own virtual element component. For example, here's how to use `<Float.Virtual>` to create a component that positions to a context menu. First, define an `onInitial` event where you can initialize the virtual element:

```jsx
import { Float } from '@headlessui-float/react'

<Float.Virtual portal onInitial={onInitial}>
  <div>content</div>
</Float.Virtual>
```

Then you can destructure `show`, `setShow` and `refs` from props. `show` and `setShow` indicates the current display status of the component, and `refs.setPositionReference()` can be used to set the reference element, using the virtual element's configuration method. The virtual element needs to include a `getBoundingClientRect()` method, where you can customize the element size, coordinate positions, etc. Since it is an element with a customizable position, it is usually used with mouse-related events. For example, here we are making a context menu and can bind the `contextmenu` event:

```jsx
import { useEffect } from 'react'

function onInitial({ setShow, refs }) {
  function onContextMenu(e) {
    e.preventDefault()

    refs.setPositionReference({
      getBoundingClientRect() {
        return {
          width: 0,
          height: 0,
          x: e.clientX,
          y: e.clientY,
          top: e.clientY,
          left: e.clientX,
          right: e.clientX,
          bottom: e.clientY,
        }
      },
    })

    setShow(true)
  }

  useEffect(() => {
    document.addEventListener('contextmenu', onContextMenu)
    return () => document.removeEventListener('contextmenu', onContextMenu)
  }, [])
}
```

Of course, when clicking outside the context menu, it is necessary to set up the function to close the menu:

```jsx
import { useOutsideClick } from '@headlessui-float/react'

function onInitial({ setShow, refs }) {
  ...
  useOutsideClick(refs.floating, () => {
    setShow(false)
  })
}
```

To prevent the context menu from being affected by other `z-index` properties, we can enable the `portal` and render it at the bottom of the `<body>`:

```jsx
<Float.Virtual portal onInitial={onInitial}>
```

Now has a simple virtual element example for a context menu:

```jsx
function ContextMenu() {
  function onInitial({ setShow, refs }) {
    function onContextMenu(e) {
      e.preventDefault()

      refs.setPositionReference({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: e.clientX,
            y: e.clientY,
            top: e.clientY,
            left: e.clientX,
            right: e.clientX,
            bottom: e.clientY,
          }
        },
      })

      setShow(true)
    }

    useEffect(() => {
      document.addEventListener('contextmenu', onContextMenu)
      return () => document.removeEventListener('contextmenu', onContextMenu)
    }, [])

    useOutsideClick(refs.floating, () => {
      setShow(false)
    })
  }

  return (
    <Float.Virtual portal onInitial={onInitial}>
      <div>content</div>
    </Float.Virtual>
  )
}
```

## Show virtual element

`<Float.Virtual>` can also be controlled from outside, in addition to being able to modify the display internally:

```jsx
import { useState } from 'react'

function ContextMenu() {
  const [show, setShow] = useState(false)

  setShow(true)

  return (
    <Float.Virtual show={show}>
      <div>content</div>
    </Float.Virtual>
  )
}
```
