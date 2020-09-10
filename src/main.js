import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import env from './env'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

const mock = false;
if (mock) {
  require('./mock/api');
}

Vue.use(VueAxios, axios);
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

Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'dist/error.png',
  loading: require('./public/imgs/loading-svg/loading-bars.svg'),
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')