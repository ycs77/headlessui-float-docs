# Alternatives

The main purpose of creating Headless UI Float is to make it easy to position Headless UI components. It does not take into account many complex use cases. If you find that this package cannot easily achieve your goals, I recommend the following methods:

## Using CSS

This is arguably the simplest way to position an element. If you only need to position it in one direction, I recommend using this method directly.

Here is an example using Tailwind CSS:

```jsx
<Menu as="div" className="relative">
  <MenuButton>
    Options
  </MenuButton>

  <MenuItems className="absolute left-0 mt-2 w-56">
    ...
  </MenuItems>
</Menu>
```

## Direct using Floating UI

The Headless UI Float is to use [Floating UI](https://floating-ui.com/) for positioning. If you need to implement more complex requirements, please use Floating UI directly.
