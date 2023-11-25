# 組合模式 {#composable-mode}

原本的 `<Float>` 設計上為了使用簡單，只能且一定要有**參考元素**和**浮動元素**，但沒辦法使用在更複雜的元件上使用。啟用組合模式後提供了 `<Float.Reference>` 和 `<Float.Content>` 元件，可以自由更改**參考元素**和**浮動元素**在 DOM 中的位置。

::: tip 提示
需要將套件升級至 **v0.11+** 才能使用組合模式。
:::

比如這裡有一個沒有使用組合模式的範例：

```jsx
<Popover>
  <Float>
    <Popover.Button className="...">
      Options
    </Popover.Button>

    <Popover.Panel className="...">
      ...
    </Popover.Panel>
  </Float>
</Popover>
```

同樣的結果但使用組合模式：

```jsx {2,3,7,9,13}
<Popover>
  <Float composable>
    <Float.Reference>
      <Popover.Button className="...">
        Options
      </Popover.Button>
    </Float.Reference>

    <Float.Content>
      <Popover.Panel className="...">
        ...
      </Popover.Panel>
    </Float.Content>
  </Float>
</Popover>
```

在組合模式下設計元件上可以更加靈活了：

```jsx {2,4,8,15,19}
<Popover>
  <Float composable>
    <div>
      <Float.Reference>
        <Popover.Button className="...">
          Options
        </Popover.Button>
      </Float.Reference>
    </div>

    <div>
      <div>...</div>
      <div>
        <div>
          <Float.Content>
            <Popover.Panel className="...">
              ...
            </Popover.Panel>
          </Float.Content>
        </div>
      </div>
    </div>
  </Float>
</Popover>
```

## Dialog 模式 {#dialog-mode}

整合 Dialog 對話框，讓 Dialog 可以定位在參考元素的周圍而設計的模式，會同時開啟**組合模式**。如果同時使用了 `<Transition>` 的時候，還需要在 `<Float.Content>` 上啟用 `transitionChild`，改用 Headless UI 的 `<Transition.Child>` 來設定轉場。

需要注意的是，在 Dialog 中要把 `<Float.Content>` 設為 `as={Fragment}`，以及裡面的第一個元素一定要是 `<Dialog.Panel>`。

下面是整合 Dialog 的範例：

```jsx {18,22,30,48-58,80}
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Float } from '@headlessui-float/react'

export default function ExampleDialog() {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <Float
      dialog
      placement="bottom-start"
      offset={4}
    >
      <Float.Reference>
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </Float.Reference>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="duration-300 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Float.Content
                as={Fragment}
                transitionChild
                enter="duration-300 ease-out"
                enterFrom="opacity-0 scale-50"
                enterTo="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-50"
                tailwindcssOriginClass
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-[transform,opacity] select-none">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Dialog Title
                  </Dialog.Title>

                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Some text...
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Float.Content>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Float>
  )
}
```
