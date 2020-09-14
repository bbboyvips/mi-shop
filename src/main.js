import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import env from './env'
import VueLazyload from 'vue-lazyload'
var VueCookie = require('vue-cookie');

Vue.config.productionTip = false

const mock = true;

if (mock) {
  require('./mock/api');
}

import storage from "./storage";
Vue.prototype.$storage = storage;

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
  if (data.status === 0) {
    return data.data;
  } else {
    0;
  }
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

Vue.use(VueAxios, axios);

Vue.use(VueLazyload, {
  preLoad: 1.5,
  // error: 'dist/error.png',
  loading: require('./public/imgs/loading-svg/loading-bars.svg'),
  attempt: 1
})
// Tell Vue to use the plugin
Vue.use(VueCookie);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')