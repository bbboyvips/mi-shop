<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "app",
  mounted: function () {
    this.getUser();
    this.getCartCount();
  },
  methods: {
    ...mapActions(["saveUserName", "saveCartCount"]),
    getUser() {
      // 通过缓存在cookie里的userid进行数据请求
      this.axios.get("/api/user").then((data) => {
        this.saveUserName(data.name);
      });
    },
    getCartCount() {
      this.axios.get("/api/carts/sum").then((data) => {
        this.saveCartCount(data.count);
      });
    },
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

