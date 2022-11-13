# Adaptive width

In some cases, we need to make the floating element and the reference element above it have the same width, which can be achieved using CSS or JS.

## Adaptive width using CSS

To achieve adaptive width using CSS, we can add the following settings:

First add `as="div"` and `className="relative"` to the `<Float>` component, render the periphery as `<div className="relative">`, and then add `floatingAs={React.Fragment}` let no elements be rendered around the floating element (the default will render a layer of `<div>` elements), directly position the floating element, and finally add the `w-full` class to the reference element and the floating element and you are done.

Now the button and options will have the same width:

```jsx
import * as React from 'react'

<Listbox>
  <Float
    as="div"
    className="relative"
    placement="bottom"
    offset={4}
    floatingAs={React.Fragment}
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

::: tip INFO
Requires upgrading to **v0.9+** to use the `floatingAs` prop.
:::

Of course, you can also specify the width directly:

```jsx
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

```jsx
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

### With transition

It should be noted that if the transition uses the `transform` property of CSS, it will not work properly. Because `floating-as` is set to `React.Fragment`, the floating element will be positioned directly, and to optimize performance, `transform` is used for positioning by default. If you want to use it, turn off `transform` to switch to `top`/`left` properties for positioning:

```jsx
<Float transform={false}>
```

Then you can add the class for the transition:

```jsx
<Float
  transform={false}
  floatingAs={React.Fragment}
  enter="transition duration-200 ease-out"
  enterFrom="opacity-0 scale-75"
  enterTo="opacity-100 scale-100"
  leave="transition duration-150 ease-in"
  leaveFrom="opacity-100 scale-100"
  leaveTo="opacity-0 scale-75"
  tailwindcssOriginClass
>
```

## Adaptive width using JS <Badge label="Experimental" />

There are cases where CSS `relative` does not properly synchronize the width of the floating element, such as when using the `portal` at the same time. At this point, you can use the `adaptiveWidth` prop, which uses the [`ResizeObserver` API](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) to monitor the width of the reference element and synchronize it to the floating element, but the performance will be worse than the CSS implementation.

```jsx
<Float adaptiveWidth>
```

::: tip INFO
Requires upgrading to **v0.10+** to use the `adaptiveWidth` prop.
:::
