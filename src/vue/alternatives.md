# Alternatives

The main purpose of creating Headless UI Float is to make it easy to position Headless UI components. It does not take into account many complex use cases. If you find that this package cannot easily achieve your goals, recommend the following methods:

## Using CSS

This is arguably the simplest way to position an element. If you only need to position it in one direction, recommend using this method directly.

Here is an example using Tailwind CSS:

```html
<Menu as="div" class="relative">
  <MenuButton>
    Options
  </MenuButton>

  <MenuItems class="absolute left-0 mt-2 w-56">
    ...
  </MenuItems>
</Menu>
```

## Direct using Floating UI

The Headless UI Float is to use [Floating UI](https://floating-ui.com/) for positioning. If you need to implement more complex requirements, please use Floating UI directly.

## Alternatives to Tooltips

Headless UI Float has no optimization for Tooltip. It is recommended to use [Tippy.js](https://atomiks.github.io/tippyjs/) / [VueTippy](https://vue-tippy.netlify.app/) instead.
