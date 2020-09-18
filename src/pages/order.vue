<template>
  <div>
    <order-header :pageTitle="'我的购物车'" :info="'温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算'">
      <template v-slot:panda>
        <div>
          <a href="javascript:;">
            PanDa
            <i class="iconfont icon-xiala"></i>
            <div class="child">test</div>
          </a>
          <span>|</span>
          <a href="javascript:;">我的订单</a>
        </div>
      </template>
    </order-header>
    <router-view />
    <nav-footer></nav-footer>
  </div>
</template>
<script>
// 引入组件
import OrderHeader from "../components/OrderHeader";
import NavFooter from "../components/NavFooter";

export default {
  name: "nav-home",
  components: {
    OrderHeader,
    NavFooter,
  },
};
</script>

<style lang="less" scoped></style>