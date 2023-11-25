# Adaptive Width

In some cases, we need to make the **floating element** and the **reference element** above it have the same width, which can be achieved using CSS or JS.

## Adaptive width using CSS

To achieve adaptive width using CSS, we can add the following settings:

First add `as="div"` and `className="relative"` to the `<Float>` component, render the periphery as `<div className="relative">`, and then add `floatingAs={Fragment}` let no elements be rendered around the floating element (the default will render a layer of `<div>` elements), directly position the floating element, and finally add the `w-full` class to the reference element and the floating element and you are done.

Now the button and options will have the same width:

```jsx {5,6,9,11,15}
import { Fragment } from 'react'

<Listbox>
  <Float
    as="div"
    className="relative"
    placement="bottom"
    offset={4}
    floatingAs={Fragment}
  >
    <Listbox.Button className="w-full ...">
      ...
    </Listbox.Button>

    <Listbox.Options className="w-full ...">
      ...
    </Listbox.Options>
  </Float>
</Listbox>
```

Of course, you can also specify the width directly:

```jsx {4}
<Listbox>
  <Float
    ...
    className="relative w-[260px]"
    ...
  >
    ...
  </Float>
</Listbox>
```

If you put it in a `flex` container to fill the width, you need to add the `w-full` class:

```jsx {5}
<div className="flex justify-center items-center">
  <Listbox>
    <Float
      ...
      className="relative w-full"
      ...
    >
      ...
    </Float>
  </Listbox>
</div>
```

## Adaptive width using JS <Badge label="v0.10+" />

There are cases where CSS `relative` does not properly synchronize the width of the floating element, such as when using the [`portal`](other-options.md#portal) at the same time. At this point, you can use the `adaptiveWidth` prop, which uses the [`ResizeObserver` API](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) to monitor the width of the reference element and synchronize it to the floating element, but the performance will be worse than the CSS implementation.

```jsx
<Float adaptiveWidth>
```
