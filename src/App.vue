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
<style lang="scss" scope>
// 项目初始化样式
@import "./assets/scss/reset.scss";
// 字体图标
@import "./assets/font/iconfont.css";
// 引入config css,不知道为什么不能成功
// @import "./assets/scss/config.scss";
</style>

