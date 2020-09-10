<template>
  <div class="service-container">
    <ul class="service">
      <li>
        <i class="iconfont icon-banshou"></i> 预约维修服务
      </li>
      <li>
        <i class="iconfont icon-qitianwuliyoutuihuan"></i>7天无理由退货
      </li>
      <li>
        <i class="iconfont icon-15tianbaotui01"></i>15天免费换货
      </li>
      <li>
        <i class="iconfont icon-99yuanbaoyou"></i>满99元包邮
      </li>
      <li>
        <i class="iconfont icon-dizhi1"></i>520余家售后网点
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "service-bar",
};
</script>
<style lang="scss" scoped>
.service-container {
  width: 1226px;
  height: 80px;
  margin: 0 auto;
  ul {
    display: block;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    li {
      height: 25px;
      width: 20%;
      border-right: 1px solid #e0e0e0;
      font-size: 16px;
      text-align: center;
      &:nth-last-child(1) {
        border-right: 0;
      }
      i {
        font-size: 24px;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
  }
}
</style>