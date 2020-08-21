<template>
  <div>
    order
    <order-header></order-header>
    <router-view />
    <order-footer></order-footer>
  </div>
</template>
<script>
// 引入组件
import OrderHeader from "../components/OrderHeader";
import OrderFooter from "../components/OrderFooter";

export default {
  name: "nav-home",
  components: {
    OrderHeader,
    OrderFooter,
  },
};
</script>

<style lang="less" scoped></style>