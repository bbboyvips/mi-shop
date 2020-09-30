<template>
  <div class="product-nav" :class="{ topfixed: istopfixed }">
    <div class="container">
      <div class="product-title">
        <h2>小米10至尊纪念版</h2>
      </div>
      <div class="product-menu">
        <a
          href="javascript:;"
          :class="{ checked: checked === 0 }"
          @click="checked = 0"
          >概述</a
        >
        <span class="sp">|</span>
        <a
          href="javascript:;"
          :class="{ checked: checked === 1 }"
          @click="checked = 1"
          >参数</a
        >
        <span class="sp">|</span>
        <a href="javascript:;">F码通道</a>
        <span class="sp">|</span>
        <a
          href="javascript:;"
          :class="{ checked: checked === 2 }"
          @click="checked = 2"
          >研发历程</a
        >
        <span class="sp">|</span>
        <a href="javascript:;">咨询客服</a>
        <span class="sp">|</span>
        <a
          href="javascript:;"
          :class="{ checked: checked === 3 }"
          @click="checked = 3"
          >用户评价</a
        >
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "product-param",
  props: ["checkedtemp"],
  data() {
    return {
      // 导航栏指定数据
      istopfixed: false,
      navTopY: 0,
      // 导航栏选中数据
      checked: 0,
    };
  },
  mounted() {
    // 导航栏数据
    if (this.checkedtemp) {
      this.checked = this.checkedtemp;
    }
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
  z-index: 4;
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
        &.checked {
          color: #ff6600;
        }
        &:hover {
          color: #ff6600;
        }
      }
      .sp {
        margin: 0 10px;
      }
    }
  }
}
</style>