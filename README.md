# vue-modal-parent-handler

Vue 2 混入(Mixin)用于处理父级模态框定位

## 功能特性

- 自动计算模态框相对于父容器的位置
- 响应式调整位置
- 轻量级实现，无额外依赖

## 安装

```bash
npm install vue-modal-parent-handler
# 或
yarn add vue-modal-parent-handler
```

## 使用

在你的 Vue Modal 组件中引入并应用该混入：

```javascript
import ModalParentHandler from 'vue-modal-parent-handler'

export default {
  mixins: [ModalParentHandler],
  // ... 组件其他选项
}
```