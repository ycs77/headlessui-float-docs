# Auto Focus

If you need to automatically focus on internal links or form elements and lock focus inside when opening a popover, you can use the Headless UI `<FocusTrap>` component (although it is not documented in the Headless UI documentation):

```jsx {2,14-17}
import {
  FocusTrap,
  Popover,
} from '@headlessui/react'
import { Float } from '@headlessui-float/react'

<Popover>
  <Float offset={4}>
    <Popover.Button className="px-3 py-1.5 flex justify-center items-center bg-rose-50 hover:bg-rose-100 text-rose-500 rounded">
      Button
    </Popover.Button>

    <Popover.Panel className="w-[240px] h-[70px] p-3 bg-white text-rose-500 border border-gray-200 rounded-md shadow-lg focus:outline-none">
      <FocusTrap>
        <button type="button" className="focus:ring">link 1</button>
        <button type="button" className="focus:ring">link 2</button>
      </FocusTrap>
    </Popover.Panel>
  </Float>
</Popover>
```
