# 其他選項

## 顯示/隱藏

如果浮動元素是 Headless UI 元件，因為顯示的控制權在 Headless UI 元件中，可以直接使用。

但如果需要手動控制浮動元素的顯示與否，就需要設定 `show` 了：

```html
<Float :show="show">

<script setup>
const show = ref(false)
</script>
```

> 如果浮動元素使用 HTML 元素，而不是 Headless UI 元件的話，就需要設定 `show`。

## z-index

為浮動元素設定 `z-index`，預設值是 9999，也可以設定其他數值：

```html
<Float :z-index="100">
```

## 定位模式

預設會使用 CSS 的 transform 來定位浮動元素，如果會造成 transform 屬性的衝突的話，可以設為 `false` 來使用 `top` / `left` 做定位：

```html
<Float :transform="false">
```
