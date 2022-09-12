# Adaptive width

In some cases, we need to make the floating element and the reference element above have the same width, we can go following settings:

First add `as="div"` and `className="relative"` to the `<Float>` component, render the periphery as `<div className="relative">`, and then add `floatingAs={React.Fragment}` let no elements be rendered around the floating element (the default will render a layer of `<div>` elements), directly position the floating element, and finally add the `w-full` class to the reference element and the floating element and you are done.

::: tip INFO
Requires an upgrade to v0.9+ to use the `floatingAs` prop.
:::

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
