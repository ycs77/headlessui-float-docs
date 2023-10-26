# 自動對焦 {#auto-focus}

如果你需要在開啟選單時，可以自動對焦在內部的連結或表單元件，並鎖定焦點在內部的話，可以使用 Headless UI 的 `<FocusTrap>` 元件 (雖然沒有紀錄在 Headless UI 的文檔中)：

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
