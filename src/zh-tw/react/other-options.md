# 其他選項 {#other-options}

## 顯示/隱藏 {#show-hide}

因為顯示的控制權在 Headless UI 元件中，通常可以不需要做任何設定就可以直接使用。

但如果需要手動控制浮動元素 (`<Menu.Items>`) 的顯示的時候，就需要設定 `show`。然後在浮動元素的組件上設定 `static` 變成靜態的，讓我們可以手動控制顯示狀態：

```jsx
const [show, setShow] = useState(false)
const toggle = () => {
  setShow(!show)
}

<Menu>
  <Float show={show}>
    <Menu.Button onClick={toggle}>
      Options
    </Menu.Button>

    <Menu.Items static>
      ...
    </Menu.Items>
  </Float>
</Menu>
```

HTML 元素也可以直接使用，一樣是設定 `show` 來控制浮動元素 (`<div>`) 的顯示：

```jsx
const [show, setShow] = useState(false)
const toggle = () => {
  setShow(!show)
}

<Float show={show}>
  <button onClick={toggle}>
    Options
  </button>

  <div>
    ...
  </div>
</Float>
```

## z-index

為浮動元素設定 z-index，預設值是 9999，也可以設定其他數值：

```jsx
<Float zIndex={100}>
```

## 定位模式 {#position-mode}

預設會使用 CSS 的 transform 來定位浮動元素，如果會造成 transform 屬性的衝突的話，可以設為 `false` 來使用 `top` / `left` 做定位：

```jsx
<Float transform={false}>
```
