<template>
  <div>
    <nav-header></nav-header>
    <div>这里是cart</div>
    <order-footer></order-footer>
  </div>
</template>
<script>
// 引入组件
import NavHeader from "../components/NavHeader";
import OrderFooter from "../components/OrderFooter";

export default {
  name: "cart",
  components: {
    NavHeader,
    OrderFooter,
  },
};
</script>

<style lang="less" scoped></style>