<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="/">小米商城</a>
          <span>|</span>
          <a href="javascript:;">MIUI</a>
          <span>|</span>
          <a href="javascript:;">loT</a>
          <span>|</span>
          <a href="javascript:;">云服务</a>
          <span>|</span>
          <a href="javascript:;">金融</a>
          <span>|</span>
          <a href="javascript:;">有品</a>
          <span>|</span>
          <a href="javascript:;">小爱开放平台</a>
          <span>|</span>
          <a href="javascript:;">企业团购</a>
          <span>|</span>
          <a href="javascript:;">资质证照</a>
          <span>|</span>
          <a href="javascript:;">协议规则</a>
          <span>|</span>
          <a href="javascript:;">下载app</a>
          <span>|</span>
          <a href="javascript:;">智能生活</a>
          <span>|</span>
          <a href="javascript:;">Select Location</a>
        </div>
        <div class="topbar-user">
          <a v-if="!username" href="javascript:;" @click="toLogin">登录</a>
          <a v-if="!username" href="javascript:;">注册</a>
          <a v-if="username" href="javascript:;">{{ username }}</a>
          <a v-if="username" href="javascript:;" @click="logout">退出登录</a>
          <a href="javascript:;">消息通知</a>
          <a v-if="username" href="javascript:;">我的订单</a>
          <a href="/#/cart" class="cart">
            <span class="cart-icon iconfont icon-icon4"></span>
            购物车({{ cartCount }})
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div>
          <a href="/" class="logo"></a>
        </div>
        <div class="production">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <!-- 可以使用v-for循环渲染 -->
                <li v-for="(item, index) in items" :key="index" class="pro">
                  <a href="javascript:;" class="item-img">
                    <img v-lazy="item.img" :alt="item.name" />
                  </a>
                  <a href="javascript:;" class="item-name">{{ item.name }}</a>
                  <a href="javascript:;" class="item-price">{{ item.price }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Redmi手机</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
          </div>
          <div class="item-menu">
            <span>笔记本</span>
          </div>
          <div class="item-menu">家电</div>
          <div class="item-menu">路由器</div>
          <div class="item-menu">智能硬件</div>
          <div class="item-menu">服务</div>
          <div class="item-menu">社区</div>
        </div>
        <div class="search">
          <input placeholder="5G手机" class="input" type="text" />
          <a href="javascript:;" class="searchicon iconfont icon-search"></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "nav-header",
  props: ["items"],
  data() {
    return {};
  },
  computed: {
    // 映射vuex的属性
    ...mapState(["username", "cartCount"]),
  },
  mounted() {},
  methods: {
    // 将mutations映射为组件方法
    ...mapMutations(["saveUserName", "saveCartCount"]),
    // 去往登录页面
    toLogin() {
      this.$router.push("/login");
    },
    // 用户退出登录
    logout() {
      // 清空vuex保存的数据
      this.saveUserName("");
      this.saveCartCount(0);
      // 如果有服务器对接应该发送一个服务器请求,让服务器清楚相关的数据
    },
  },
};
</script>

<style lang="scss" scoped>
// 变量
@import "../assets/scss/config.scss";

.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: rgb(51, 51, 51);
    color: rgb(176, 176, 176);

    .container {
      width: 1226px;
      margin-right: auto;
      margin-left: auto;
      display: flex;
      justify-content: space-between;
      .topbar-menu {
        span {
          color: rgb(150, 150, 150);
          margin: 0 5px;
        }
        a {
          display: inline-block;
          color: rgb(176, 176, 176);
          &:hover {
            color: $colorG;
          }
        }
      }
      .topbar-user {
        height: 39px;
        a {
          height: 39px;

          display: inline-block;
          margin-left: 8px;
          color: rgb(176, 176, 176);
          &:hover {
            color: $colorG;
          }
        }
        .cart {
          display: inline-block;
          width: 110px;
          height: 39px;
          background-color: rgb(66, 66, 66);
          text-align: center;
          transition: all 0.2s;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          vertical-align: bottom;
          &:hover {
            background-color: $colorG;
            color: $colorA;
          }
          .cart-icon {
            display: inline-block;
            vertical-align: -2px;
          }
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100px;
      margin: 0 auto;
      width: $min-width;
      // background-color: pink;
      .logo {
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
      .production {
        display: flex;
        height: 100px;
        align-items: center;
        justify-items: center;
        .item-menu {
          height: 100px;
          line-height: 100px;
          margin: 0 10px;
          font-size: 16px;
          color: rgb(51, 51, 51);
          &:hover {
            span {
              color: $colorA;
              cursor: pointer;
            }
            .children {
              height: 225px;
              background-color: rgb(255, 255, 255);
              opacity: 1;
              padding-bottom: 35px;
              z-index: 999;
            }
          }
          .children {
            border-top: 1px solid #e0e0e0;
            box-shadow: 0 3px 4px rgba(0, 0, 0, 0.18);
            position: absolute;
            top: 100px;
            left: 0;
            text-align: center;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            transition: all 0.5s;
            ul {
              display: flex;
              justify-content: center;
              li {
                margin: 35px 0;
                border-right: 1px solid #e0e0e0;
                overflow: hidden;
              }
              li:nth-last-child(1) {
                border-right: 0;
              }
              .pro {
                a {
                  display: block;
                }
                .item-img {
                  width: 185px;
                  img {
                    width: 160px;
                    height: 110px;
                  }
                }
                .item-name {
                  padding: 0 2px;
                  width: 180px;
                  height: 20px;
                  line-height: 20px;
                  font-size: 12px;
                  color: #333;
                }
                .item-price {
                  padding: 0 2px;
                  width: 180px;
                  height: 20px;
                  line-height: 20px;
                  font-size: 12px;
                  color: $colorA;
                }
              }
            }
          }
        }
      }
      .search {
        width: 296px;
        height: 50px;
        display: flex;
        border: 1px solid #e0e0e0;
        justify-content: center;
        align-items: center;
        .input {
          outline: none;
          display: inline-block;
          border: 0;
          border-right: 1px solid #e0e0e0;
          padding: 0 10px;
          width: 240px;
          height: 50px;
          font-size: 14px;
        }
        .searchicon {
          display: inline-block;
          width: 52px;
          height: 50px;
          line-height: 50px;
          color: $colorB;
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          transition: all 0.2s;
          &:hover {
            background-color: $colorA;
            color: $colorG;
          }
        }
      }
    }
  }
}
</style>