# Composable Mode <Badge type="tip" text="v0.11+" />

The original design of `<Float>` is simple to use, but it can only be used with a **reference element** and a **floating element**, which may not be sufficient for more complex components. With the introduction of composable mode, `<Float.Reference>` and `<Float.Content>` components are provided, which allows the positioning of the **reference element** and **floating element** to be changed freely in the DOM.

For example, here's an example without using the composable mode:

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

And the same result with composable mode:

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

With composable mode, the design of components can be more flexible:

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

## Dialog mode

The mode for positioning dialog around a reference element is designed by integrating the dialog box, which can be positioned around a reference element. This mode uses **composable mode**. If `<Transition>` is used, you also need to enable `transitionChild` on `<Float.Content>` and use `<Transition.Child>` from Headless UI to set the transition.

Note that in dialog, `<Float.Content>` needs to be set to `as={Fragment}`, and the first element inside it must be `<Dialog.Panel>`.

Here is an example of integrating dialog:

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
