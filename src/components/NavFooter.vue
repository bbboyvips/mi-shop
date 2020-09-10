<template>
  <div class="container">
    <div class="logo">
      <img src="../public/imgs/mi-logo.png" alt />
      <p>小米商城</p>
    </div>
    <div class="link">
      <a href="javascript:;">小米商城</a>
      <span>|</span>
      <a href="javascript:;">MIUI</a>
      <span>|</span>
      <a href="javascript:;">米家</a>
      <span>|</span>
      <a href="javascript:;">米聊</a>
      <span>|</span>
      <a href="javascript:;">多看</a>
      <span>|</span>
      <a href="javascript:;">游戏</a>
      <span>|</span>
      <a href="javascript:;">Select Location</a>
    </div>
    <div class="copyright">
      <p>
        Copyright ©2019
        <span class="info">panda.com</span> All Rights Reserved.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-footer",
};
</script>

<style lang="scss" scoped>
// 变量
@import "../assets/scss/config.scss";

.container {
  background-color: rgb(51, 51, 51);
  height: 234px;
  border-top: 4px solid $colorA;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .logo {
    margin-top: 46px;
    margin-bottom: 31px;
  }
  .link {
    margin-bottom: 13px;
    a {
      color: #999999;
    }
    span {
      margin: 0 10px;
    }
  }
  .copyright {
    .info {
      color: $colorA;
    }
  }
}
</style>