# Arrow

First, put the `<Float.Arrow>` inside the floating element, then add the class:

```jsx
<Popover>
  <Float>
    ...
    <Popover.Panel>
      {/* add arrow */}
      <Float.Arrow className="absolute bg-white w-5 h-5 rotate-45 border border-gray-200" />

      Popover & arrow, content...
    </Popover.Panel>
  </Float>
</Popover>
```

Then add the `arrow` prop in `<Float>`, and add `offset={15}` to keep the arrow away from the reference element:

```jsx
<Float arrow offset={15}>
```

But then we will find that the arrow is stacked on top of the floating element, which is not the effect we want, so need to wrap the content below and set the position to `relative`, and it will move to the top of the arrow. Of course, we also need to set the background color, otherwise will still see the arrow below:

```jsx
<Popover.Panel className="w-[240px] h-[70px] bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none">
  <Float.Arrow className="absolute bg-white w-5 h-5 rotate-45 border border-gray-200" />

  <div className="relative h-full bg-white p-3 text-rose-500 rounded-md">
    Popover & arrow, content...
  </div>
</Popover.Panel>
```

Full example of the arrow:

```jsx
import { Popover } from '@headlessui/react'
import { Float } from '@headlessui-float/react'

export default function ArrowExample() {
  return (
    <Popover>
      <Float
        placement="bottom-start"
        offset={15}
        arrow
      >
        <Popover.Button className="px-5 py-2 bg-rose-50 hover:bg-rose-100 text-rose-500 rounded">
          Button
        </Popover.Button>

        <Popover.Panel className="w-[240px] h-[70px] bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none">
          <Float.Arrow className="absolute bg-white w-5 h-5 rotate-45 border border-gray-200" />

          <div className="relative h-full bg-white p-3 text-rose-500 rounded-md">
            Popover & arrow, content...
          </div>
        </Popover.Panel>
      </Float>
    </Popover>
  )
}
```
