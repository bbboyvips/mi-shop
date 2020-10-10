<template>
  <div class="root">
    <!-- 商品菜单以及轮播图 -->
    <div class="swiper-box">
      <!-- 侧栏菜单 -->
      <div class="menu-nav">
        <ul>
          <li v-for="(menu, index) in navmenus" :key="index">
            <div class="menu-item">
              <a href="javascript:;">
                {{ menu.content }}
                <i class="iconfont icon-tubiao-"></i>
              </a>
            </div>
            <!-- 展开菜单 -->
            <div class="menu-child">
              <div class="menu-container">
                <ul>
                  <li v-for="(item, index) in menu.items" :key="index">
                    <a :href="'/#/product/' + item.id">
                      <img v-lazy="item.img" />
                      <span>{{ item.name }}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in swipers"
            :key="index"
          >
            <a href="javascript:;">
              <img :src="item.img" />
            </a>
          </div>
        </div>
        <div class="swiper-button-next swiper-button"></div>
        <div class="swiper-button-prev swiper-button"></div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!-- 首页广告位 -->
    <div class="ad">
      <div class="ad-img" v-for="(item, index) in adimgs" :key="index">
        <a href>
          <img v-lazy="item" />
        </a>
      </div>
    </div>
    <!-- banner -->
    <div class="banner-container">
      <div class="banner">
        <a href="javascript:;">
          <img v-lazy="banner" alt />
        </a>
      </div>
    </div>
    <!-- 商品展示 -->
    <div class="product-container">
      <div class="product">
        <div class="left">
          <img v-lazy="pro_left" alt />
        </div>
        <div class="right">
          <ul>
            <li v-for="(item, index) in products" :key="index">
              <a href="javascript:;">
                <img v-lazy="item.img" :alt="item.name" />
                <h3 class="name">{{ item.name }}</h3>
                <p class="msg">{{ item.msg }}</p>
                <p class="price">
                  <span>{{ item.price }}</span
                  >元起
                  <del class="del">{{ item.price }}元</del>
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 服务 -->
    <service-bar></service-bar>
    <!-- 模态框 -->
    <modal
      @submit="modal.showModel = false"
      @cancel="modal.showModel = false"
      :showModel="modal.showModel"
      :title="modal.title"
      :btnType="modal.btnType"
      :sureText="modal.sureText"
      :cancelText="modal.cancelText"
    >
      <template v-slot:modalBody>
        <div class="modal-body-text">
          所有数据均采用mock模拟,并没有交换后台数据,所以交互有限,购物愉快!
        </div>
      </template>
    </modal>
  </div>
</template>
<script>
// 引入组件
import ServiceBar from "../components/ServiceBar";
import Modal from "../components/Modal";
// swiper
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  name: "index",
  data() {
    return {
      // 模态框数据
      modal: {
        title: "欢迎光临",
        btnType: 3,
        showModel: false,
        sureText: "这就开始体验",
        cancelText: "勉强体验一回吧",
      },
      // 轮播图数据
      swipers: [],
      // 轮播图菜单数据
      navmenus: [],
      // 商品展示数据
      products: [],
      pro_left: null,
      // 广告图
      adimgs: [],
      // banner
      banner: null,
    };
  },
  components: {
    ServiceBar,
    Modal,
  },
  async mounted() {
    // 欢迎
    this.welcome(3000);
    // 轮播图
    await this.getSwipers();
    this.SwiperInit();
    this.getNavmenus();
    // 商品展示
    this.getProducts();
    // adimg
    this.getAdimg();
    // banner
    this.getBanner();
    // Pro_left
    this.getPro_left();
  },
  methods: {
    // 初始化swiper 轮播图
    SwiperInit() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          loop: true, // 循环模式选项
          autoplay: {
            delay: 1000,
            disableOnInteraction: false,
          }, // 自动播放 3秒
          observer: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          effect: "fade",
        });
      });
    },
    // time秒后弹出欢迎界面
    welcome(time) {
      // console.log(this.$storage);
      // 如果是本地会话第一次打开,就展示
      if (this.$storage.getItem("welcome")) {
        return;
      }
      setTimeout(() => {
        this.modal.showModel = true;
        this.$storage.setItem("welcome", true);
      }, time);
    },
    // 请求轮播图数据
    async getSwipers() {
      this.swipers = await this.axios.get("/api/index/swipers");
    },
    // 请求轮播图菜单数据
    async getNavmenus() {
      this.navmenus = await this.axios.get("/api/index/navmenus");
    },
    // 请求商品展示数据
    async getProducts() {
      this.products = await this.axios.get("/api/index/products");
    },
    // adimg
    async getAdimg() {
      this.adimgs = await this.axios.get("/api/index/adimg");
    },
    // banner
    async getBanner() {
      this.banner = await this.axios.get("/api/index/banner");
    },
    // pro_left
    async getPro_left() {
      this.pro_left = await this.axios.get("/api/index/pro_left");
    },
  },
};
</script>

<style lang="scss"  scoped>
@import "../assets/scss/config.scss";
// 轮播菜单
.swiper-box {
  width: 1226px;
  height: 460px;
  margin: 0 auto;
  // 导航菜单
  .menu-nav {
    position: absolute;
    box-sizing: border-box;
    width: 234px;
    height: 460px;
    padding: 20px 0;
    z-index: 998;
    color: #fff;
    background: rgba(105, 101, 101, 0.5);
    font-size: 14px;
    ul {
      display: flex;
      height: 100%;
      flex-direction: column;
      flex-wrap: nowrap;
      // justify-content: space-between;
      li {
        height: 42px;
        line-height: 42px;
        width: 234px;
        cursor: pointer;
        .menu-item {
          box-sizing: border-box;
          padding-left: 30px;
          height: 42px;
          line-height: 42px;
          width: 234px;
        }
        &:hover {
          .menu-item {
            background-color: $colorA;
          }
          .menu-child {
            display: block;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.18);
            border: 1px solid #e0e0e0;
            border-right: 0;
          }
        }
        a {
          color: #fff;
          i {
            position: absolute;
            right: 20px;
          }
        }
        .menu-child {
          display: none;
          position: absolute;
          width: 992px;
          left: 234px;
          top: 0;
          overflow: hidden;
          background-color: rgb(255, 255, 255);
          height: 458px;
          transition: width 0.1s;
          color: #333;
          ul {
            width: 992px;
            display: flex;
            flex-flow: row wrap;
            // justify-content: space-around;
            li {
              width: 208px;
              height: 40px;
              line-height: 40px;
              padding: 18px 20px;
              // text-align: center;
              a {
                color: #333;
                line-height: 40px;
                &:hover {
                  color: $colorA;
                }
                img {
                  width: 40px;
                  height: 40px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
  // 轮播图
  .swiper-container {
    --swiper-theme-color: #ff6600; /* 设置Swiper风格 */
    --swiper-navigation-color: #00ff33; /* 单独设置按钮颜色 */
    --swiper-navigation-size: 30px; /* 设置按钮大小 */
    .swiper-button {
      height: 69px;
      line-height: 69px;
      width: 41px;
      text-align: center;
      &:hover {
        background-color: rgba(91, 102, 111, 0.2);
      }
    }
    .swiper-button-next {
      position: absolute;
      right: 0;
    }
    .swiper-button-prev {
      position: absolute;
      left: 234px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
// 首页广告位
.ad {
  width: 1226px;
  height: 170px;
  margin: 15px auto 0;
  display: flex;
  justify-content: space-between;
  .ad-img {
    width: 295px;
    height: 170px;
    background-color: #ffae31;
    overflow: hidden;
    a {
      display: block;
      height: 170px;
      width: 295px;
    }
    img {
      height: 170px;
    }
  }
}
// banner
.banner-container {
  // background-color: #f5f5f5;
  .banner {
    width: 1226px;
    margin: 15px auto 0;
    a {
      display: block;
      img {
        width: 1226px;
      }
    }
  }
}
// 产品展示部位
.product-container {
  background-color: #f5f5f5;
  margin-bottom: 15px;
  // 高度大于子元素高度,用于层次分明的背景
  height: 650px;

  .product {
    width: 1226px;
    height: 628px;
    margin: 15px auto 0;
    display: flex;
    flex-direction: row;

    .left {
      height: 628px;
      width: 234px;
      transition: all 0.5s;
      &:hover {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      height: 628px;
      width: 992px;
      ul {
        height: 628px;
        width: 992px;
        padding-left: 14px;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;
        li {
          width: 234px;
          height: 260px;
          background-color: rgb(255, 255, 255);
          text-align: center;
          padding: 20px 0;
          transition: all 0.5s;
          img {
            display: block;
            margin: 0 37px 18px;
            width: 160px;
          }
          .name {
            margin: 0 10px 2px;
            font-size: 14px;
            font-weight: 400;
            color: #333;
          }
          .msg {
            margin: 0 10px 10px;
            height: 18px;
            font-size: 12px;
            color: #b0b0b0;
          }
          .price {
            margin: 0 10px 14px;
            color: #ff6700;
            font-size: 14px;
          }
          .del {
            color: #b0b0b0;
            font-size: 12px;
          }
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          }
        }
      }
    }
  }
}

// 模态框
.modal-body-text {
  text-align: center;
}
</style>