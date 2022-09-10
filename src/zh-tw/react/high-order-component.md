# High-Order Component

高階元件，可以將 `<Float>` 元件客製好包裝之後，輕鬆在專案中套用：

*HighOrderFloat.jsx*
```jsx
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

使用方式跟 `<Float>` 的用法一樣，也可以覆蓋在高階元件中已經定義的 prop：

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

如果你有使用 TypeScript，可以增加 `FloatProps` type 到 props 上：

*HighOrderFloat.tsx*
```jsx
import { Float, FloatProps } from '@headlessui-float/react'

export default function HighOrderFloat(props: FloatProps) {
  // ...
}
```
