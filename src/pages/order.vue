<template>
  <div>
    <!-- 子路由渲染 -->
    <router-view />
    <!-- 订单的footer -->
    <nav-footer></nav-footer>
  </div>
</template>
<script>
// 引入组件
import NavFooter from "../components/NavFooter";
export default {
  name: "order-confirm",
  components: {
    NavFooter,
  },
};
</script>

<style lang="scss" scoped></style>