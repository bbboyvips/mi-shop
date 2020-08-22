<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
// 封装的SessionStorage api
import ss from "./storage";

export default {
  name: "app",
  mounted: function () {
    ss.setItem("user", {});
  },
};
</script>
<style>
</style>
