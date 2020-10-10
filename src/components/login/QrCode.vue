<template>
  <div>
    <div class="login-form">
      <!-- 二维码图片 -->
      <div class="qrcode">
        <img :src="qrcodeimg" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "order-confirm",
  data() {
    return {
      qrcodeimg: require("../../public/imgs/login/qrcode.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>