<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
  mounted: function () {
    // this.axios.get("/api/user/login").then(function (res) {
    //   console.log(res);
    // });
  },
};
</script>
<style lang="scss">
// 项目初始化样式
@import "./assets/scss/reset.scss";
// 字体图标
@import "./assets/font/iconfont.css";
</style>
