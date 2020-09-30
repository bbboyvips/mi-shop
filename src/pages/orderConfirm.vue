<template>
  <div class="root-container">
    <order-header
      :pageTitle="'订单确认'"
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
      <div class="address">
        <div class="title">收货地址</div>
        <div class="adr-container">
          <div
            class="addressbox"
            :class="{ 'addressbox-checked': addcheck == index }"
            @click="addcheck = index"
            v-for="(item, index) in addrs"
            :key="index"
          >
            <p class="name">{{ item.name }}</p>
            <p class="phonenumber">{{ item.phone }}</p>
            <p class="dizhi">{{ item.add }} <br />{{ item.adddesc }}</p>
            <div class="edit">
              <a href="javascript:;">修改</a>
            </div>
          </div>
          <div class="addressbox">
            <div class="tianjia">
              <span class="iconfont icon-tianjia"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="pro">
        <div class="title">商品及优惠券</div>
        <div class="oder-container">
          <div class="pro-box">
            <div class="pro-icon">
              <img
                src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1589439786.76992727.jpg?thumb=1&w=38&h=38"
              />
            </div>
            <div class="pro-title">小米真无线蓝牙耳机Air2 SE 白色</div>
            <div class="price_count">168元*5</div>
            <div class="totalprice">840元</div>
          </div>
          <div class="pro-box">
            <div class="pro-icon">
              <img
                src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1589439786.76992727.jpg?thumb=1&w=38&h=38"
              />
            </div>
            <div class="pro-title">小米真无线蓝牙耳机Air2 SE 白色</div>
            <div class="price_count">168元*5</div>
            <div class="totalprice">840元</div>
          </div>
        </div>
      </div>
      <div class="baoyou">
        <div class="title">配送方式</div>
        <span class="fangshi">包邮</span>
      </div>
      <div class="fapiao">
        <div class="title">电子发票</div>
        <span class="fangshi">电子普通发票个人> 个人</span>
      </div>
      <div class="detail">
        <div class="title">订单详情</div>
        <div class="right-section">
          <p>商品件数:<span>5件</span></p>
          <p>商品总价:<span>586元</span></p>
          <p>活动优惠:<span>-10元</span></p>
          <p>优惠券抵扣:<span>-265元</span></p>
          <p>运费:<span>15元</span></p>
          <p>应付总额:<span>200元</span></p>
        </div>
      </div>
      <div class="btn-group">
        <a href="/#/order/pay">立即下单</a>
        <a href="/#/cart">返回购物车</a>
      </div>
    </div>
  </div>
</template>
<script>
import OrderHeader from "../components/OrderHeader";

export default {
  name: "order-confirm",
  data() {
    return {
      // 收货地址
      addrs: [
        {
          name: "罗潘",
          phone: "18512857416",
          add: "火星殖民地9-2号陨石坑",
          adddesc: "三号洞口",
        },
        {
          name: "罗潘",
          phone: "18512857416",
          add: "火星殖民地9-2号陨石坑",
          adddesc: "三号洞口",
        },
        {
          name: "罗潘",
          phone: "18512857416",
          add: "火星殖民地9-2号陨石坑",
          adddesc: "三号洞口",
        },
        {
          name: "罗潘",
          phone: "18512857416",
          add: "火星殖民地9-2号陨石坑",
          adddesc: "三号洞口",
        },
        {
          name: "罗潘",
          phone: "18512857416",
          add: "火星殖民地9-2号陨石坑",
          adddesc: "三号洞口",
        },
        {
          name: "罗潘",
          phone: "18512857416",
          add: "火星殖民地9-2号陨石坑",
          adddesc: "三号洞口",
        },
        {
          name: "罗潘",
          phone: "18512857416",
          add: "火星殖民地9-2号陨石坑",
          adddesc: "三号洞口",
        },
      ],
      // 地址选中状态
      addcheck: 1,
    };
  },
  components: { OrderHeader },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
.root-container {
  background-color: #f5f5f5;
  padding-bottom: 20px;
}
.container {
  background-color: #ffffff;
  width: 1226px;
  padding: 20px 24px;
  margin: 10px auto 0;
  box-sizing: border-box;
  .title {
    color: #333;
    font-size: 18px;
    margin: 20px 0;
  }
  .address {
    border-bottom: 1px solid #e0e0e0;

    .adr-container {
      flex-wrap: wrap;
      @include clearfix();

      .addressbox {
        position: relative;
        box-sizing: border-box;
        margin: 0 17px 20px 0;
        float: left;
        width: 270px;
        padding: 20px;
        height: 180px;
        color: #333;
        cursor: pointer;
        border: 1px solid #e0e0e0;
        font-size: 14px;
        .tianjia {
          text-align: center;
          height: 138px;
          line-height: 138px;
          .icon-tianjia {
            color: rgb(185, 177, 177);
            font-size: 80px;
          }
        }

        &:hover {
          border: 1px solid #999898;
          .edit {
            font-size: 14px;
          }
        }
        .name {
          font-size: 18px;
        }
        .phonenumber {
          margin: 10px 0;
        }
        .edit {
          position: absolute;
          right: 20px;
          bottom: 20px;
          font-size: 0;
          a {
            color: rgb(255, 102, 0);
          }
        }
      }
      .addressbox-checked {
        position: relative;
        box-sizing: border-box;
        margin: 0 17px 20px 0;
        float: left;
        width: 270px;
        padding: 20px;
        height: 180px;
        color: #333;
        cursor: pointer;
        border: 1px solid rgb(255, 102, 0);
        font-size: 14px;
        .tianjia {
          text-align: center;
          height: 138px;
          line-height: 138px;
          .icon-tianjia {
            color: rgb(185, 177, 177);
            font-size: 80px;
          }
        }

        &:hover {
          border: 1px solid rgb(255, 102, 0);

          .edit {
            font-size: 14px;
          }
        }
        .name {
          font-size: 18px;
        }
        .phonenumber {
          margin: 10px 0;
        }
        .edit {
          position: absolute;
          right: 20px;
          bottom: 20px;
          font-size: 0;
          a {
            color: rgb(255, 102, 0);
          }
        }
      }
    }
  }
  .pro {
    border-bottom: 1px solid #e0e0e0;
    .pro-box {
      height: 30px;
      position: relative;
      margin: 5px 0;
      padding: 15px 0;
      display: flex;
      justify-content: space-between;
      line-height: 30px;
      vertical-align: middle;
      font-size: 14px;
      .pro-icon {
        width: 30px;
      }
      .pro-title {
        width: 650px;
      }
      .price_total {
        width: 150px;
      }
      .totalprice {
        text-align: right;
        width: 190px;
        color: rgb(255, 102, 0);
      }
    }
  }
  .baoyou {
    border-bottom: 1px solid #e0e0e0;
    height: 64px;
    display: flex;
    justify-content: flex-start;
    .title {
      width: 200px;
    }
    .fangshi {
      font-size: 14px;
      line-height: 64px;
      color: rgb(255, 102, 0);
    }
  }
  .fapiao {
    border-bottom: 1px solid #e0e0e0;
    height: 64px;
    display: flex;
    justify-content: flex-start;
    .title {
      width: 200px;
    }
    .fangshi {
      font-size: 14px;
      line-height: 64px;
      color: rgb(255, 102, 0);
    }
  }
  .detail {
    border-bottom: 1px solid #e0e0e0;

    @include clearfix();
    .right-section {
      float: right;
      font-size: 14px;
      p {
        display: block;
        width: 162px;
        text-align: right;
        margin: 5px 0;
        white-space: nowrap;
        color: #757575;
        span {
          color: rgb(255, 102, 0);
          display: inline-block;
          width: 80px;
          text-align: right;
        }
        &:nth-last-child(1) {
          span {
            font-size: 24px;
          }
        }
      }
    }
  }
  .btn-group {
    @include clearfix();
    a {
      float: right;
      width: 158px;
      height: 38px;
      padding: 0;
      margin: 0;
      border: 1px solid #b0b0b0;
      font-size: 14px;
      line-height: 38px;
      text-align: center;
      color: #b0b0b0;
      margin: 20px 20px;
      &:nth-child(1) {
        background-color: #ff6700;
        color: #fff;
        border-color: #ff6700;
      }
    }
  }
}
</style>