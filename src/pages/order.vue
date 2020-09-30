<template>
  <div>
    <router-view />
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