<template>
  <div class="product-nav" :class="{ topfixed: istopfixed}">
    <div class="container">
      <div class="product-title">
        <h2>小米10至尊纪念版</h2>
      </div>
      <div class="product-menu">
        <a href="javascript:;">概述</a>
        <span class="sp">|</span>
        <a href="javascript:;">参数</a>
        <span class="sp">|</span>
        <a href="javascript:;">F码通道</a>
        <span class="sp">|</span>
        <a href="javascript:;">研发历程</a>
        <span class="sp">|</span>
        <a href="javascript:;">咨询客服</a>
        <span class="sp">|</span>
        <a href="javascript:;">用户评价</a>
        <span class="sp">|</span>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "product-param",
  data() {
    return { istopfixed: false, navTopY: 0 };
  },
  mounted() {
    this.navTop();
  },
  destroyed() {
    // 在组件销毁后移出监听事件,避免浪费性能
    window.removeEventListener("scroll", this.scrollHandler, false);
  },
  methods: {
    // 导航栏吸顶功能
    navTop() {
      //   var that = this;
      this.navTopY = this.getoffsetTop();
      //给window添加滚动监听事件
      window.addEventListener("scroll", this.scrollHandler);
    },
    //获取元素y轴位置
    getoffsetTop() {
      // 获取元素位置
      return document.querySelector(".product-nav").offsetTop;
    },
    scrollHandler() {
      // 获取页面滚动位置
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.istopfixed = scrollTop > this.navTopY ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
// 导航栏置顶样式
.topfixed {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 999;
}
.product-nav {
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.07);
  border-top: 1px solid #e0e0e0;
  background: #fff;
  border-bottom: 1px solid #e0e0e0;

  .container {
    width: 1226px;
    margin: 0 auto;
    display: flex;
    height: 60px;
    line-height: 60px;
    justify-content: space-between;

    .product-title h2 {
      font-size: 18px;
      font-weight: 400;
      line-height: 60px;
      color: #424242;
    }
    .product-menu {
      a {
        vertical-align: middle;
        color: #616161;
        font-size: 14px;
        &:hover {
          color: #ff6600;
        }
        &:last-child {
          display: inline-block;
          background-color: #ff6600;
          height: 30px;
          width: 118px;
          font-size: 12px;
          line-height: 30px;
          color: #fff;
          margin-left: 5px;
          vertical-align: inherit;
          text-align: center;
        }
      }
      .sp {
        margin: 0 10px;
      }
    }
  }
}
</style>