import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 主页
  {
    path: '/',
    name: 'home',
    redirect: '/index',
    component: () => import('../pages/home'),
    children: [{
        path: 'index',
        name: 'index',
        component: () => import('../pages/index')
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('../pages/product')
      },
      {
        path: 'detail/:id',
        name: 'detail',
        component: () => import('../pages/detail')
      }
    ]
  },
  // 登录页面
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login.vue')
  },
  // 购物车
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../pages/cart')

  },
  // 订单
  {
    path: '/order',
    name: 'order',
    component: () => import('../pages/order'),
    children: [{
        path: 'list',
        name: 'order-list',
        component: () => import('../pages/orderList')
      },
      {
        path: 'confirm',
        name: 'order-confirm',
        component: () => import('../pages/orderConfirm')
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: () => import('../pages/orderPay')
      }

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router