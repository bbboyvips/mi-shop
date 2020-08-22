import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import env from './env'

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

// axios配置
axios.defaults.timeout = 5000;
axios.defaults.baseUrl = env.baseUrl;

// axios请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么,比如添加请求头
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// axios响应拦截器
axios.interceptors.response.use(function (res) {
  let data = res.data;
  // if (data.status === 0) {} else {}
  console.log(data);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')