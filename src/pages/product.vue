<template>
  <div>
    <!-- 商品站吸顶栏组件 -->
    <ProductParam>
      <template v-slot:buy>
        <a class="buy" :href="'/#/detail/' + id">立即送钱</a>
      </template>
    </ProductParam>
    <div class="content">
      <div class="pro-container">
        <!-- 商品站详情展示组件 -->
        <div class="section1"></div>
        <div class="section2">
          <a href="javascript:;" @click="videoHandler"></a>
          <video
            src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/mi10ultra/index_08.mp4"
            muted
            loop
            autoplay
          ></video>
        </div>
        <div class="section3">
          <div class="readme">
            <p>你即将拿起的，</p>
            <p>是我们最自豪的一部作品。</p>
            <p>
              凝聚了众多创新技术，
              <span>120X</span>超远变焦、 <span>120W</span>秒充科技、
              <span>120Hz</span>专业屏幕。
            </p>
            <p>
              它还由小米智能工厂打造，以更未来、更智能的制造工艺，呈现中国科技的力量。
            </p>
            <p>现在，就让它与你一起，</p>
            <p>拾级而上，一往无前。</p>
          </div>
          <ul>
            <li>
              <img src="../public/imgs/product/mi10/xiangji.png" />
            </li>
            <li>
              <img src="../public/imgs/product/mi10/touming.png" />
            </li>
            <li>
              <img src="../public/imgs/product/mi10/jishen.png" />
            </li>
          </ul>
        </div>
        <div class="section4">
          <div class="textcontainer">十年献礼，巅峰美学</div>
          <div class="swiper-mi10">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../public/imgs/product/mi10/swiper01.png" />
              </div>
              <div class="swiper-slide">
                <img src="../public/imgs/product/mi10/swiper02.png" />
              </div>
              <div class="swiper-slide">
                <img src="../public/imgs/product/mi10/swiper03.png" />
              </div>
            </div>
            <div class="swiper-pagination-container">
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 视频模态框 -->
    <div
      class="video-dialog"
      :class="{ 'video-dialog-show': isShowVideo }"
      @click.self="closeVideo"
    >
      <div class="video-container">
        <a
          href="javascript:;"
          class="iconfont icon-guanbi"
          @click="closeVideo"
        ></a>
        <video
          id="videoId"
          src="../public/videos/product/mi10_1.mp4"
          controls
          loop
          preload="auto"
        ></video>
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
  name: "product",
  data() {
    return {
      id: this.$route.params.id, //获取商品ID
      // 是否展示视频模态框
      isShowVideo: false,
      // 模态框video元素
      video: null,
      // 导航栏选中数据
      check: 0,
    };
  },
  components: { ProductParam },
  mounted() {
    // 初始化swiper 轮播图
    this.SwiperInit();
    // 获取视频框元素视频
    this.getVideo();
  },
  methods: {
    // 获取视频组件
    getVideo() {
      this.video = document.querySelector("#videoId");
    },
    // 初始化视频播放的一系列状态
    videoHandler() {
      this.isShowVideo = true;
      this.video.load();
      this.video.play();
    },
    // 关闭视频模态框行为
    closeVideo() {
      this.isShowVideo = false;
      this.video.pause();
    },
    // 初始化swiper
    SwiperInit() {
      new Swiper(".swiper-mi10", {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        }, // 自动播放 3秒
        observer: true,
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        effect: "fade",
      });
    },
  },
};
</script>
<style lang="scss" >
@import "../assets/scss/mixin.scss";
.product-nav .container .product-menu a.buy {
  color: #fff;
  display: inline-block;
  background-color: #ff6600;
  height: 30px;
  width: 118px;
  font-size: 12px;
  line-height: 30px;
  margin-left: 5px;
  vertical-align: inherit;
  text-align: center;
  &:hover {
    color: #fff;
  }
}

.pro-container {
  background: #000;
  .section1 {
    height: 1252px;
    background: url(../public/imgs/product/mi10/section1.jpg) no-repeat center;
  }
  .section2 {
    position: relative;
    width: 100%;
    a {
      @include position(absolute, 50%, 50%, 88px, 88px);
      transform: translate(-50%, -50%);
      background: url(../public/imgs/product/mi10/play_icon.png) no-repeat
        center;
      background-size: 100%;
      z-index: 3;
    }
    video {
      width: 100%;
      outline: none;
      object-fit: cover;
    }
  }
  .section3 {
    .readme {
      margin: 300px 0;
      text-align: center;
      font-size: 23px;
      color: #bdbdbd;
      line-height: 37px;
      span {
        color: rgb(255, 255, 255);
      }
    }
    ul {
      margin: 0 15px 200px;
      display: flex;
      justify-content: space-around;
      li {
        width: 637px;
        height: 875px;
        img {
          height: 100%;
        }
      }
    }
  }
  .section4 {
    text-align: center;
    padding-bottom: 150px;
    .textcontainer {
      color: rgb(255, 255, 255);
      font-size: 60px;
      font-weight: bold;
      -webkit-font-smoothing: antialiased;
    }
    .swiper-mi10 {
      position: relative;
      height: 921px;
      margin: 100px 0 0;
      img {
        height: 100%;
      }
      .swiper-pagination-container {
        position: absolute;
        right: 50px;
        bottom: 50px;
        width: 273px;
        height: 42px;
        .swiper-pagination {
          position: absolute;
          left: 0;
          top: 50%;
          height: 24px;
          width: 100%;
          transform: translateY(-50%);
          .swiper-pagination-bullet {
            width: 15px;
            height: 15px;
            margin: 0 15px;
            background-color: rgb(255, 255, 255);
          }
        }
      }
    }
  }
}

// 视频模态框
// 初始隐藏状态
.video-dialog {
  @include position(fixed, -100%, 0);
  opacity: 0;
  overflow: hidden;
  background-color: rgba(#000000, 0.5);
  z-index: 5;
  transition: opacity 0.5s;
  .video-container {
    @include position(absolute, -100%, 50%, 997px, 561px);
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: top, opacity 0.5s;
    a {
      position: absolute;
      right: 15px;
      top: 10px;
      color: #757575;
      font-size: 20px;
      z-index: 6;
      &:hover {
        color: rgb(255, 255, 255);
      }
    }
    video {
      height: 100%;
      outline: none;
      object-fit: cover;
    }
  }
}
// 展示状态
.video-dialog-show {
  opacity: 1;
  top: 0;
  .video-container {
    opacity: 1;
    top: 50%;
  }
}
</style>