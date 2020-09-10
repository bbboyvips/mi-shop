<template>
  <div>
    <nav-header :items="items"></nav-header>
    <router-view />
    <nav-footer></nav-footer>
  </div>
</template>
<script>
// 引入组件
import NavHeader from "../components/NavHeader";
import NavFooter from "../components/NavFooter";

export default {
  name: "nav-home",
  data() {
    return {
      // 导航栏数据
      items: [
        {
          id: 1,
          img: require("../public/imgs/nav-img/nav-1.png"),
          name: "小米cc9",
          price: "￥1999",
        },
        {
          id: 2,
          img: require("../public/imgs/nav-img/nav-2.png"),
          name: "小米cc9e",
          price: "￥1000",
        },
        {
          id: 3,
          img: require("../public/imgs/nav-img/nav-3.png"),
          name: "小米cc9Pro",
          price: "￥4999",
        },
        {
          id: 4,
          img: require("../public/imgs/nav-img/nav-4.png"),
          name: "小米9",
          price: "￥2999",
        },
        {
          id: 5,
          img: require("../public/imgs/nav-img/nav-5.png"),
          name: "小米10",
          price: "￥1999",
        },
        {
          id: 6,
          img: require("../public/imgs/nav-img/nav-6.png"),
          name: "小米Mix2s",
          price: "￥1999",
        },
      ],
    };
  },
  components: {
    NavHeader,
    NavFooter,
  },
};
</script>

<style lang="less" scoped></style>