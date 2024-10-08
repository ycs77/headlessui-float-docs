# Adaptive Width

In some cases, we need to make the **floating element** and the **reference element** above it have the same width, which can be achieved using CSS or JS.

## Adaptive width using CSS

To achieve adaptive width using CSS, we can add the following settings:

First add `as="div"` and `class="relative"` to the `<Float>` component, render the periphery as `<div class="relative">`, and then add `floating-as="template` let no elements be rendered around the floating element (the default will render a layer of `<div>` elements), directly position the floating element, and finally add the `w-full` class to the reference element and the floating element and you are done.

Now the button and options will have the same width:

```html {3,4,7,9,13}
<Listbox>
  <Float
    as="div"
    class="relative"
    placement="bottom"
    :offset="4"
    floating-as="template"
  >
    <ListboxButton class="w-full ...">
      ...
    </ListboxButton>

    <ListboxOptions class="w-full ...">
      ...
    </ListboxOptions>
  </Float>
</Listbox>
```

Of course, you can also specify the width directly:

```html {4}
<Listbox>
  <Float
    ...
    class="relative w-[260px]"
    ...
  >
    ...
  </Float>
</Listbox>
```

If you put it in a `flex` container to fill the width, you need to add the `w-full` class:

```html {5}
<div class="flex justify-center items-center">
  <Listbox>
    <Float
      ...
      class="relative w-full"
      ...
    >
      ...
    </Float>
  </Listbox>
</div>
```

## Adaptive width using JS <Badge type="tip" text="v0.10+" />

There are cases where CSS `relative` does not properly synchronize the width of the floating element, such as when using the [`portal`](other-options.md#portal) at the same time. At this point, you can use the `adaptive-width` prop, which uses the [`ResizeObserver` API](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) to monitor the width of the reference element and synchronize it to the floating element, but the performance will be worse than the CSS implementation.

```html
<Float adaptive-width>
```
