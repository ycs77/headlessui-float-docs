# Adaptive width

In some cases, we need to make the floating element and the reference element above have the same width, we can go following settings:

First add `as="div"` and `class="relative"` to the `<Float>` component, render the periphery as `<div class="relative">`, and then add `floating-as="template` let no elements be rendered around the floating element (the default will render a layer of `<div>` elements), directly position the floating element, and finally add the `w-full` class to the reference element and the floating element and you are done.

::: tip INFO
Requires an upgrade to **v0.9+** to use the `floating-as` prop.
:::

Now the button and options will have the same width:

```html
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

```html
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

```html
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

## With transition {#with-transition}

It should be noted that if the transition uses the `transform` property of CSS, it will not work properly. Because `floating-as` is set to `template`, the floating element will be positioned directly, and in order to optimize performance, `transform` is used for positioning by default. If you want to use it, turn off `transform` to switch to `top`/`left` properties for positioning:

```html
<Float :transform="false">
```

Then you can add the class for the transition:

```html
<Float
  :transform="false"
  floating-as="template"
  enter="transition duration-200 ease-out"
  enter-from="opacity-0 scale-75"
  enter-to="opacity-100 scale-100"
  leave="transition duration-150 ease-in"
  leave-from="opacity-100 scale-100"
  leave-to="opacity-0 scale-75"
  tailwindcss-origin-class
>
```
