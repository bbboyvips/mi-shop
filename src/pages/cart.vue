<template>
  <div class="cart-root">
    <order-header
      :pageTitle="'我的购物车'"
      :info="'温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算'"
    >
      <template v-slot:panda>
        <div>
          <a href="javascript:;">
            PanDa
            <i class="iconfont icon-xiala"></i>
            <div class="child">test</div>
          </a>
          <span>|</span>
          <a href="/#/order/list">我的订单</a>
        </div>
      </template>
    </order-header>
    <div class="cart-container">
      <div class="cart-header">
        <ul>
          <li class="allcheck">
            <a href="javascript:;">
              <i class="iconfont icon-unchecked" @click="allcheck($event)"></i>
            </a>
            全选
          </li>
          <li class="name">商品名称</li>
          <li class="singleprice">单价</li>
          <li class="count">数量</li>
          <li class="totalprice">小计</li>
          <li class="cao">操作</li>
        </ul>
      </div>
      <div class="cart-body">
        <div
          class="itembox"
          v-for="(item, index) in carts.cartProductVoList"
          :key="index"
        >
          <ul>
            <li class="allcheck">
              <a href="javascript:;">
                <!-- @click="check($event)" -->
                <i
                  class="iconfont icon-unchecked"
                  :class="{ 'icon-icons-': item.productSelected }"
                ></i>
              </a>
            </li>
            <li class="pro-img">
              <img :src="item.productMainImage" />
            </li>
            <li class="name">{{ item.productName }}</li>
            <li class="singleprice">{{ item.productPrice }}</li>
            <li class="count">
              <div class="count-cart">
                <a href="javascript:;" @click="item.quantity--">-</a>
                <input type="text" :value="item.quantity" />
                <a href="javascript:;" @click="item.quantity++">+</a>
              </div>
            </li>
            <li class="totalprice">{{ item.quantity * item.productPrice }}</li>
            <li class="cao">
              <a href="javascript:;" @click="remove(index)">×</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="cart-bar">
        <div class="left">
          <a href="/">继续购物</a>
          <span class="sp">|</span>
          <span class="info">
            共
            <span class="t">3</span>件商品，已选择 <span class="t">1件</span>件
          </span>
        </div>
        <div class="right">
          <span class="totalprice">
            合计:
            <span class="t">{{ carts.cartTotalPrice }}</span
            >元
          </span>
          <a class="gopay" href="/#/order/confirm">去结算</a>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
// 引入组件
import OrderHeader from "../components/OrderHeader";
import NavFooter from "../components/NavFooter";
export default {
  name: "cart",
  data() {
    return {
      carts: [],
    };
  },
  components: {
    OrderHeader,
    NavFooter,
  },
  watch: {},
  mounted() {
    this.getCarts();
  },
  methods: {
    // 请求购物车聊表
    async getCarts() {
      this.carts = await this.axios.get("/api/carts");
    },
    // 删除商品
    remove(i) {
      this.carts.cartProductVoList.splice(i, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
.cart-root {
  background-color: #f5f5f5;
}
.cart-container {
  width: 1226px;
  margin: 0 auto;
  .cart-header {
    background-color: #ffffff;
    ul {
      @include clearfix();
      font-size: 14px;
      line-height: 70px;
      li {
        text-align: center;
        float: left;
      }
      .allcheck {
        width: 110px;
        a {
          color: #ff6600;
          i {
            font-weight: bold;
            font-size: 18px;
          }
        }
      }
      .name {
        width: 500px;
      }
      .singleprice {
        width: 160px;
      }
      .count {
        width: 150px;
      }
      .totalprice {
        width: 200px;
      }
      .cao {
        width: 106px;
      }
    }
  }
  .cart-body {
    background-color: #ffffff;
    .itembox {
      border-top: 1px solid #e0e0e0;
      ul {
        @include clearfix();
        font-size: 14px;
        line-height: 70px;
        li {
          text-align: center;
          float: left;
        }
        .allcheck {
          width: 110px;
          a {
            color: #ff6600;
            i {
              font-weight: bold;
              font-size: 18px;
            }
          }
        }
        .pro-img {
          width: 120px;
          img {
            width: 80px;
          }
        }
        .name {
          width: 380px;
          color: #424242;
          font-size: 18px;
          font-weight: 400;
        }
        .singleprice {
          width: 160px;
        }
        .count {
          width: 148px;
          padding: 15px 0;
          .count-cart {
            height: 40px;
            border: 1px solid #e0e0e0;
            a {
              float: left;
              width: 38px;
              height: 40px;
              line-height: 40px;
              color: #757575;
              font-size: 20px;
              transition: all 0.3s;
              &:hover {
                background-color: #e0e0e0;
              }
            }
            input {
              float: left;
              width: 70px;
              height: 40px;
              line-height: 40px;
              padding: 0;
              border-width: 0;
              color: #424242;
              font-size: 16px;
              text-align: center;
            }
          }
        }
        .totalprice {
          width: 200px;
          color: #ff6700;
          font-size: 16px;
        }
        .cao {
          width: 106px;
          a {
            display: inline-block;
            width: 28px;
            height: 28px;
            line-height: 28px;
            text-align: center;
            border-radius: 50%;
            color: #757575;
            font-size: 20px;
            &:hover {
              background-color: rgb(229, 57, 53);
              color: rgb(255, 255, 255);
            }
          }
        }
      }
    }
  }
  .cart-bar {
    margin: 15px 0;
    background-color: #ffffff;
    height: 50px;
    line-height: 50px;
    text-align: center;
    .left {
      float: left;
      margin-left: 32px;
      font-size: 14px;
      a {
        color: #757575;
        font-size: 14px;
        &:hover {
          color: #ff6700;
        }
      }
      .sp {
        margin: 0 10px;
        color: #eee;
      }
      .info {
        color: #757575;
        .t {
          color: #ff6700;
        }
      }
    }
    .right {
      float: right;
      font-size: 14px;
      .totalprice {
        padding-left: 13px;
        color: #ff6700;
        .t {
          font-size: 30px;
        }
      }
      .gopay {
        display: inline-block;
        width: 200px;
        height: 48px;
        line-height: 48px;
        font-size: 18px;
        margin-left: 50px;
        vertical-align: top;
        background-color: #ff6700;
        border-color: #f25807;
        color: #fff;
        &:hover {
          background-color: rgb(242, 88, 7);
        }
      }
    }
  }
}
</style>