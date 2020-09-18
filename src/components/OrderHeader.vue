<template>
  <div class="order-root">
    <div class="container">
      <div class="left">
        <a href="/" class="logo"></a>
        <div class="header-title">
          <h2>{{pageTitle}}</h2>
          <p>{{info}}</p>
        </div>
      </div>
      <div class="right">
        <slot name="panda"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "order-header",
  props: {
    pageTitle: String,
    info: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";

.order-root {
  border-bottom: 2px solid #ff6700;
  background: #fff;
}
.container {
  @include clearfix();
  width: 1226px;
  margin: 0 auto;
  padding: 25px 0;
  line-height: 1;

  .left {
    .logo {
      float: left;
      margin-right: 55px;
      display: block;
      height: 55px;
      width: 55px;
      overflow: hidden;
      background-color: $colorA;
      cursor: pointer;
      &::before {
        content: "";
        display: inline-block;
        width: 55px;
        height: 55px;
        opacity: 1;
        background: url(../public/imgs/mi-logo.png) no-repeat center;
        background-size: contain;
        transition: all 0.2s;
      }
      &::after {
        content: "";
        display: inline-block;
        width: 55px;
        height: 55px;
        background: url(../public/imgs/mi-home.png) no-repeat center;
        background-size: contain;
      }
      &:hover::before {
        opacity: 0;
        margin-left: -55px;
        transition: all 0.2s;
      }
    }
    h2,
    p {
      float: left;
    }
    h2 {
      line-height: 55px;
      margin-bottom: 0;
      font-size: 28px;
      font-weight: 400;
      color: #424242;
    }
    p {
      height: 20px;
      line-height: 20px;
      margin-top: 20px;
      margin-left: 15px;
      color: #757575;
    }
  }

  .right {
    float: right;
    line-height: 65px;
    // background-color: pink;
    a {
      position: relative;
      height: 40px;
      text-align: center;
      color: #757575;
      font-size: 12px;
      padding: 0 10px;
      i {
        font-size: 12px;
      }

      .child {
        @include position(absolute, 15px, 0, 72px, 0);
        height: 0;
        overflow: hidden;
        background-color: pink;
      }

      &:hover {
        color: $colorA;
        .child {
          height: 100px;
        }
      }
    }
    span {
      font-size: 12px;
      height: 40px;
      color: #b0b0b0;
    }
  }
}
</style>