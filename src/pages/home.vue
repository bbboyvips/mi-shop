<template>
  <div>
    home
    <nav-header></nav-header>
    <router-view />
    <nav-footer></nav-footer>
  </div>
</template>
<script>
// 引入组件
import NavHeader from "../components/NavHeader";
import NavFooter from "../components/NavFooter";

export default {
  name: "nav-home",
  components: {
    NavHeader,
    NavFooter,
  },
};
</script>

<style lang="less" scoped></style>