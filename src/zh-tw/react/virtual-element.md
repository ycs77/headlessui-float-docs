# 虛擬元素 <Badge label="v0.11+" /> {#virtual-element}

使用 Floating UI [虛擬元素](https://floating-ui.com/docs/virtual-elements) 功能定位的元件，可以讓浮動元素相對於虛擬元素來定位，常用於實現右鍵選單、跟隨鼠標等功能。

## 右鍵選單 {#context-menu}

`<Float.ContextMenu>` 元件是一個無樣式的右鍵選單元件，可以自己設計右鍵選單的內容，如果要用 `<Menu>` 元件的話，還要把 `<Menu.Items>` 的 `static` 開啟：

```jsx
import { Float } from '@headlessui-float/react'

<Float.ContextMenu
  enter="transition-opacity duration-200 ease-out"
  enter-from="opacity-0"
  enter-to="opacity-100"
>
  {({ close }) => (
    <Menu>
      <Menu.Items static className="w-48 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden focus:outline-none">
        ...
      </Menu.Items>
    </Menu>
  )}
</Float.ContextMenu>
```

## 跟隨鼠標 {#following-cursor}

`<Float.Cursor>` 元件提供了跟隨鼠標定位功能，可以讓任何元素跟隨鼠標移動，同時也支援觸控移動：

```jsx
import { Float } from '@headlessui-float/react'

<Float.Cursor as="div">
  <div className="w-5 h-5 bg-emerald-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
</Float.Cursor>
```

預設 `<Float.Cursor>` 會增加 CSS 來隱藏鼠標，如果要關掉這個功能的話，可以將 `globalHideCursor` 設為 `false`：

```jsx
<Float.Cursor globalHideCursor={false}>
```

## 自訂虛擬元素 {#custom-virtual-element}

當然也可以使用 `<Float.Virtual>` 來自訂自己的虛擬元素元件，比如這裡用 `<Float.Virtual>` 來做一個定位到右鍵選單的元件，先定義一個 `onInitial` 事件，可以在這裡初始化虛擬元素：

```jsx
import { Float } from '@headlessui-float/react'

<Float.Virtual portal onInitial={onInitial}>
  <div>content</div>
</Float.Virtual>
```

然後可以在 props 裡解構出 `show`、`setShow`、`refs`，`show`、`setShow` 是當前元件顯示或隱藏的狀態，`refs.setPositionReference()` 可以設定參考元素，不過是用虛擬元素的設定方式。虛擬元素需要包含一個 `getBoundingClientRect()` 方法，裡面可以自訂元素尺寸、座標位置等。因為是可以自訂位置的元素，通常都會搭配鼠標相關的事件，像這裡我們要作右鍵選單，可以綁定 `contextmenu` 事件：

```jsx
import { useEffect } from 'react'

function onInitial({ setShow, refs }) {
  function onContextMenu(e) {
    e.preventDefault()

    refs.setPositionReference({
      getBoundingClientRect() {
        return {
          width: 0,
          height: 0,
          x: e.clientX,
          y: e.clientY,
          top: e.clientY,
          left: e.clientX,
          right: e.clientX,
          bottom: e.clientY,
        }
      },
    })

    setShow(true)
  }

  useEffect(() => {
    document.addEventListener('contextmenu', onContextMenu)
    return () => document.removeEventListener('contextmenu', onContextMenu)
  }, [])
}
```

當然在點擊右鍵選單之外的地方時，需要設定可以關閉選單：

```jsx
import { useOutsideClick } from '@headlessui-float/react'

function onInitial({ setShow, refs }) {
  ...
  useOutsideClick(refs.floating, () => {
    setShow(false)
  })
}
```

為了讓右鍵選單不會受其他 `z-index` 的影響，可以把 `portal` 開啟，渲染到 `<body>` 的底部：

```jsx
<Float.Virtual portal onInitial={onInitial}>
```

最後放上一個簡易的右鍵選單虛擬元素範例：

```jsx
function ContextMenu() {
  function onInitial({ setShow, refs }) {
    function onContextMenu(e) {
      e.preventDefault()

      refs.setPositionReference({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: e.clientX,
            y: e.clientY,
            top: e.clientY,
            left: e.clientX,
            right: e.clientX,
            bottom: e.clientY,
          }
        },
      })

      setShow(true)
    }

    useEffect(() => {
      document.addEventListener('contextmenu', onContextMenu)
      return () => document.removeEventListener('contextmenu', onContextMenu)
    }, [])

    useOutsideClick(refs.floating, () => {
      setShow(false)
    })
  }

  return (
    <Float.Virtual portal onInitial={onInitial}>
      <div>content</div>
    </Float.Virtual>
  )
}
```

## 虛擬元素顯示 {#show-virtual-element}

`<Float.Virtual>` 除了可以在內部修改顯示之外，也可以由外部來做控制：

```jsx
import { useState } from 'react'

function ContextMenu() {
  const [show, setShow] = useState(false)

  setShow(true)

  return (
    <Float.Virtual show={show}>
      <div>content</div>
    </Float.Virtual>
  )
}
```
