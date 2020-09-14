<template>
  <div>
    <div class="login-form">
      <input type="text" v-model="user.name" placeholder="邮箱/手机号/小米ID" />
      <input type="password" v-model="user.password" placeholder="密码" />
      <a class="go" href="javascript:;" @click="submit">登录</a>
      <p class="l_s">
        <a href="javascript:;">手机短信登录/注册</a>
      </p>
      <p class="r_p">
        <a href="javascript:;">立即注册</a>
        <span>|</span>
        <a href="javascript:;">忘记密码?</a>
      </p>
      <div class="other-login">
        <fieldset>
          <legend>其他方式登录</legend>
        </fieldset>
        <div class="other-icon">
          <a href="javascript:;" class="iconfont icon-qq"></a>
          <a href="javascript:;" class="iconfont icon-weibo"></a>
          <a href="javascript:;" class="iconfont icon-weixin"></a>
          <a href="javascript:;" class="iconfont icon-zhifubao1"></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "user-pass",
  data() {
    return {
      user: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    // 映射actions
    ...mapActions(["saveUserName"]),

    submit() {
      // 网络请求
      this.axios.post("/api/login").then((data) => {
        // 根据业务需求对data进行一系列判断,此处简单一点
        if (data) {
          // 将用户id存入cookie
          this.$cookie.set("userId", data.id, { expires: "7D" });
          // 将数据存入vuex
          this.saveUserName(data.name);
          // 路由跳转
          this.$router.push({
            path: "/index",
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>