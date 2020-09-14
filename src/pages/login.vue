<template>
  <div class="container">
    <div class="header">
      <div class="login">
        <a href="/">
          <img src="../public/imgs/login/mistore_logo.png" />
        </a>
      </div>
    </div>
    <div class="body2">
      <div class="login-container">
        <div class="login-body">
          <div class="login-nav">
            <!-- 使用vue的动态组件 -->
            <!--  -->
            <div class="nav-tabs">
              <a href="javascript:;" @click="clickHandler('user-pass')">账号登录</a>
              <span class="sp"></span>
              <a href="javascript:;" @click="clickHandler('qr-code')">扫码登录</a>
            </div>
          </div>
          <component :is="isWho"></component>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavFooter from "../components/NavFooter";
import QrCode from "../components/login/QrCode";
import UserPass from "../components/login/UserPass";

export default {
  name: "login",
  methods: {
    clickHandler(who) {
      this.isWho = who;
    },
  },
  data() {
    return {
      isWho: "user-pass",
    };
  },
  components: {
    NavFooter,
    UserPass,
    QrCode,
  },
};
</script>

<style lang="scss" >
.container {
  //   顶栏
  .header {
    width: 1226px;
    height: 98px;
    margin: 0 auto;
    a {
      display: inline-block;
      img {
        width: 200px;
      }
    }
  }

  //   主体
  .body2 {
    height: 588px;
    margin-bottom: 150px;
    background: url(../public/imgs/login/banner.jpg) no-repeat center;
    .login-container {
      position: relative;
      padding-top: 28px;
      width: 1226px;
      height: 588px;
      margin: 0 auto;
      .login-body {
        position: absolute;
        right: 0;
        width: 410px;
        height: 560px;
        background-color: rgb(255, 255, 255);
        .login-nav {
          width: 100%;
          font-size: 0;
          .nav-tabs {
            height: 43px;
            line-height: 43px;
            width: 410px;
            padding: 20px 0;
            text-align: center;
            position: relative;
            a {
              display: inline-block;
              height: 36px;
              color: #f56600;
              border: 0;
              font-size: 24px;
              vertical-align: bottom;
              //   margin: 0 35px;
            }
            .sp {
              display: inline-block;
              margin: 0 35px;
              height: 28px;
              width: 1px;
              border: 1px solid #e0e0e0;
              background: #e0e0e0;
              vertical-align: bottom;
              //   position: absolute;
              //   top: 0;
              //   left: 0;
              //   right: 0;
              //   bottom: 0;
            }
          }
        }
        .login-form {
          width: 384px;
          margin: 0 auto;
          text-align: center;

          input {
            display: block;
            width: 352px;
            height: 22px;
            margin-bottom: 14px;
            padding: 13px 16px;
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            font-size: 14px;
            color: #4a4a4a;
          }
          .go {
            display: block;
            width: 384px;
            height: 50px;
            line-height: 50px;
            background-color: #ff6700;
            font-size: 14px;
            color: #fff;
          }
          .l_s {
            display: block;
            margin-top: 16px;
            a {
              font-size: 14px;
              color: #ff6700;
            }
          }
          .r_p {
            display: block;
            margin-top: 25px;
            color: #999;

            span {
              margin: 0 10px;
            }
            a {
              font-size: 14px;
              color: #999;
              &:hover {
                color: #ff6700;
              }
            }
          }
          .other-login {
            width: 384px;
            padding-top: 230px;
            fieldset {
              border: 0;
              border-top: 1px solid #e0e0e0;
              padding-top: 10px;
              color: #999;
              text-align: center;
              legend {
                margin: 0 auto;
                font-size: 14px;
              }
            }
            .other-icon {
              width: 384px;
              display: flex;
              justify-content: space-around;
              a {
                display: inline-block;
                font-size: 40px;
                color: #ff6700;
                font-weight: bold;
                &:nth-child(2),
                &:nth-child(3) {
                  font-size: 50px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>