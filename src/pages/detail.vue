<template>
  <div>
    <ProductParam :checkedtemp="-1"></ProductParam>

    <div class="pro-box">
      <div class="box-left">
        <!-- 轮播图 -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in currPro.swipers" :key="index">
              <img :src="item" />
            </div>
          </div>
          <div class="swiper-button-next swiper-button"></div>
          <div class="swiper-button-prev swiper-button"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="box-right" :price="price">
        <h2>{{versions.title}}</h2>
        <p class="desc">{{versions.desc}}</p>
        <p class="price">{{price}}元</p>
        <div class="buyparams">
          <div class="child">
            <p class="title">选择颜色</p>
            <ul>
              <li
                :class="{'active':(item.name==proactive)}"
                v-for="(item,index) in versions.type"
                :key="index"
                @click="colorHandler(item)"
              >
                <a href="javascript:;">{{item.name}}</a>
              </li>
            </ul>
          </div>
          <div class="child">
            <p class="title">选择版本</p>
            <ul>
              <li
                :class="{'active':(item.msg==romramactive)}"
                v-for="(item,index) in currPro.romram"
                :key="index"
                @click="romramHandler(item)"
              >
                <a href="javascript:;">{{item.msg}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="total">
          <p class="title">{{versions.title}}+{{currPro.name}}+{{ romramactive}}</p>
          <p class="price">总计:{{price}}元</p>
        </div>
        <div class="btn-box">
          <a class="tocart" href="javascript:;">加入购物车</a>
          <a class="like iconfont icon-shoucang" href="javascript:;">&nbsp;喜欢</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductParam from "../components/ProductParam";
// swiper
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  name: "detail",
  data() {
    return {
      id: this.$route.params.id, //获取商品ID
      // 商品版本数据
      versions: {},
      // 当前商品
      currPro: {},
      // active 激活状态
      proactive: "陶瓷黑",
      romramactive: "",
      // 价钱
      price: 0,
      // swiper实例
      swiper: {},
    };
  },
  components: { ProductParam },
  async mounted() {
    // 获取商品数据
    await this.getProduct();
    // 初始化当前商品数据
    this.currProInit();
    // 初始化swiper 轮播图
    this.SwiperInit();
  },
  methods: {
    async getProduct() {
      await this.axios.get("/api/products/" + this.id).then((res) => {
        this.versions = res;
      });
    },
    SwiperInit() {
      // 下一个UI帧再初始化swiper,从往上看到得到方法,确保数据已经加载完毕再初始化swiper,我用这个方法解决了不能loop的问题
      this.$nextTick(() => {
        this.swiper = new Swiper(".swiper-container", {
          loop: true, // 循环模式选项
          autoplay: {
            delay: 3000,
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
    // 初始化所有数据
    currProInit() {
      let first_key = Object.keys(this.versions.type)[0];
      this.currPro = this.versions.type[first_key];
      this.proactive = this.versions.type[first_key].name;
      this.romramHandler(
        this.currPro.romram[Object.keys(this.currPro.romram)[0]]
      );
    },
    // 颜色版本点击处理器
    colorHandler(item) {
      this.swiper.destroy(false); //销毁swiper
      this.currPro = item;
      this.proactive = item.name;
      // 下一个UI帧再初始化swiper,从往上看到得到方法,确保数据已经加载完毕再初始化swiper
      this.SwiperInit();
      this.romramHandler(
        this.currPro.romram[Object.keys(this.currPro.romram)[0]]
      );
    },
    // 容量版本点击处理器
    romramHandler(item) {
      this.price = item.price;
      this.romramactive = item.msg;
    },
  },
};
</script>

<style lang="scss" >
@import "../assets/scss/mixin.scss";

.pro-box {
  width: 1226px;
  margin: 20px auto;
  @include clearfix();
  .box-left {
    float: left;
    width: 606px;
    text-align: center;
    img {
      width: 560px;
    }
    // swiper微调
    // 前进后退
    .swiper-button {
      width: 41px;
      height: 69px;
      background: url(../public/imgs/detail/icon-slides.png) no-repeat;
    }
    .swiper-button-prev {
      background-position: -84px 100%;
      &:hover {
        background-position: 0 50%;
      }
    }
    .swiper-button-next {
      background-position: -125px 50%;
      &:hover {
        background-position: -42px 50%;
      }
    }
    // 切换器
    .swiper-pagination-bullet {
      background: #ccc;
      width: 50px;
      border-radius: 0;
      border: 0;
      height: 5px;
    }
  }
  .box-right {
    // background-color: pink;
    margin-left: 20px;
    float: right;
    width: 600px;
    h2 {
      font-size: 24px;
      font-weight: 400;
      color: #212121;
    }
    .desc {
      color: #b0b0b0;
      margin: 0;
      padding: 0;
      padding-top: 8px;
      line-height: 1.5;
    }
    .price {
      display: block;
      font-size: 18px;
      line-height: 1;
      color: #ff6700;
      padding: 12px 0 10px;
    }
    .buyparams {
      .child {
        margin-bottom: 30px;
        .title {
          font-size: 18px;
        }
        ul {
          @include clearfix();
          li {
            float: left;
            margin-right: 6px;
            margin-top: 10px;
            line-height: 42px;
            height: 42px;
            position: relative;
            border: 1px solid #e0e0e0;
            cursor: pointer;
            transition: all 0.2s ease;
            width: 292px;
            font-size: 16px;
            text-align: center;
            a {
              color: #757575;
            }
          }
          .active {
            border: 1px solid #ff6700;
            a {
              color: #ff6700;
            }
          }
        }
      }
    }
    .total {
      background: #f9f9fa;
      padding: 30px;
      margin-bottom: 30px;
      .title {
        font-size: 14px;
        line-height: 1;
        color: #616161;
      }
      .price {
        color: #ff6700;
        font-size: 24px;
        padding-top: 20px;
      }
    }
    .btn-box {
      .tocart {
        display: inline-block;
        background: #ff6700;
        border-color: #ff6700;
        color: #fff;
        width: 298px;
        height: 52px;
        line-height: 52px;
        font-size: 16px;
        text-align: center;
        margin-right: 10px;
      }
      .like {
        display: inline-block;
        background: #b0b0b0;
        color: #fff;
        width: 142px;
        height: 52px;
        line-height: 52px;
        font-size: 16px;
        text-align: center;
        &:hover {
          background-color: #757575;
          border-color: #757575;
          color: #fff;
        }
      }
    }
  }
}
</style>