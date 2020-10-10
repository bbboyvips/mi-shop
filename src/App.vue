<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>

// 设置页面标题
document.title = "小米商城";

import { mapActions } from "vuex";

export default {
  name: "app",
  mounted: function () {
    this.getUser();
    this.getCartCount();
  },
  methods: {
    ...mapActions(["saveUserName", "saveCartCount"]),
    // 请求用户数据
    async getUser() {
      let user = await this.axios.get("/api/user");
      // 将用户名存入vuex
      this.saveUserName(user.username);
    },
    // 请求购物车数据
    async getCartCount() {
      let cartCount = await this.axios.get("/api/carts/sum");
      // 将购物车数量存入vuex
      this.saveCartCount(cartCount);
    },
  },
};
</script>
<style lang="scss">
// 项目初始化样式
@import "./assets/scss/reset.scss";
// 引入config css,不知道为什么不能成功
// @import "./assets/scss/config.scss";
// 字体图标
@import "./assets/font/iconfont.css";
// 小米商城字体
@import "./assets/font/xiaomi.css";
</style>

