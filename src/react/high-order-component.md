# High-Order Component

The high-order component can be easily applied in projects after customizing the `<Float>` component:

```jsx
// HighOrderFloat.jsx
import { Float } from '@headlessui-float/react'

export default function HighOrderFloat(props) {
  return (
    <Float
      offset={8}
      flip
      shift={6}
      portal
      enter="transition duration-200 ease-out"
      enterFrom="scale-95 opacity-0"
      enterTo="scale-100 opacity-100"
      leave="transition duration-150 ease-in"
      leaveFrom="scale-100 opacity-100"
      leaveTo="scale-95 opacity-0"
      tailwindcssOriginClass
      {...props}
    >
      {props.children}
    </Float>
  )
}
```

Used in the same way as `<Float>`, it can also override the defined prop in high-order component:

```jsx
<Menu>
  <HighOrderFloat placement="bottom-end" offset={12}>
    <Menu.Button>
      Options
    </Menu.Button>
    <Menu.Items>
      ...
    </Menu.Items>
  </HighOrderFloat>
</Menu>
```

If you using the TypeScript, can add `FloatProps` type to props:

```tsx
// HighOrderFloat.tsx
import { Float, FloatProps } from '@headlessui-float/react'

export default function HighOrderFloat(props: FloatProps) {
  // ...
}
```
