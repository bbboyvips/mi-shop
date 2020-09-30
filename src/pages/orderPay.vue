<template>
  <div class="orderpay-root">
    <order-header
      :pageTitle="'订单支付'"
      :info="'请仔细确认相关信息无误,比如收货地址'"
    >
      <template v-slot:panda>
        <div>
          <a href="javascript:;">
            PanDa
            <i class="iconfont icon-xiala"></i>
            <div class="child">Test</div>
          </a>
        </div>
      </template>
    </order-header>
    <div class="container">
      <div class="pay">
        <div class="succicon"><i class="iconfont icon-chenggong"></i></div>
        <div class="ordermsg">
          <div class="fl">
            <p class="msg">订单提交成功！去付款咯～</p>
            <p class="time">
              请在 <span class="timewarn">47 小时 59 分</span> 内完成支付,
              超时后将取消订单
            </p>
            <p class="adr" v-if="adrb">
              收货信息：火星殖民者PanDa 1SX****ABB5 火星村 不知名陨石坑
            </p>
          </div>
          <div class="fr">
            <p>
              应付总额：<span class="money">579</span>
              <span class="rmb">元</span>
            </p>
            <p class="opendetail">订单详情<i class="icon-panda"></i></p>
          </div>
        </div>
      </div>
      <div class="pay-type">
        <div class="title">选择以下支付方式付款</div>
        <div class="content">
          <a href="javascript:;" class="item">
            <img src="../public/imgs/order/wechat.jpg" alt="微信支付" />
          </a>
          <a href="javascript:;" class="item">
            <img src="../public/imgs/order/alipay.jpg" alt="支付宝支付" />
          </a>
          <a href="javascript:;" class="item">
            <img src="../public/imgs/order/xmqb.jpg" alt="小米钱包" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OrderHeader from "../components/OrderHeader";
export default {
  name: "order-pay",
  data: function () {
    return {
      adrr: true,
    };
  },
  components: { OrderHeader },
};
</script>

<style lang="scss" scoped>
.orderpay-root {
  background-color: #f5f5f5;
  padding: 0 0 20px;
  .container {
    width: 1226px;
    margin: 0 auto;
    .pay {
      position: relative;
      height: 135px;
      padding: 30px 48px;
      margin: 20px 0;
      background-color: #fff;
      .succicon {
        // height: 80px; 利用高度塌陷的特点让下边的元素升上去
        i {
          width: 80px;
          height: 80px;
          line-height: 80px;
          position: absolute;
          top: 30px;
          left: 50px;
          font-size: 65px;
          color: #83c44e;
          text-align: center;
          overflow: hidden;
        }
      }
      .ordermsg {
        width: 995px;
        float: right;
        .fl,
        .fr {
          height: 135px;
          font-size: 14px;
        }
        .fl {
          float: left;
          display: flex;
          width: 600px;
          flex-direction: column;
          justify-content: space-between;
          .msg {
            font-size: 24px;
            font-weight: 400;
            line-height: 36px;
          }
          .timewarn {
            color: rgb(255, 102, 0);
          }
        }
        .fr {
          color: #757575;
          float: right;
          width: 150px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .money {
            font-size: 20px;
            color: rgb(255, 102, 0);
          }
          .rmb {
            font-size: 14px;
            color: rgb(255, 102, 0);
          }
          .opendetail {
            cursor: pointer;
            &:hover {
              color: rgb(255, 102, 0);
              .icon-panda {
                border-color: rgb(255, 102, 0);
              }
            }
            .icon-panda {
              display: inline-block;
              margin-left: 5px;
              width: 8px;
              height: 8px;
              border-bottom: 2px solid #757575;
              border-right: 2px solid #757575;
              transform: rotateZ(45deg) translateY(-50%);
            }
          }
        }
      }
    }
    .pay-type {
      background-color: #fff;
      .title {
        font-size: 18px;
        border-bottom: 1px solid #e0e0e0;
        padding: 20px 10px;
      }
      .content {
        display: flex;
        padding: 10px;
        flex-wrap: wrap;
        a {
          width: 180px;
          height: 60px;
          margin: 10px 10px 10px 0;
          border: 1px solid #e0e0e0;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>