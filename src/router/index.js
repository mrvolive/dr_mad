import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import VirusesView from '@/views/VirusesView.vue'
import ShopLoginView from '@/views/ShopLoginView.vue'
import BankAccountView from '@/views/BankAccountView.vue'
import ShopView from "@/views/ShopView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      left: HomeView,
      center: HomeView,
      right: HomeView
    },
  },
  {
    path: '/shop',
    name: 'shopmain',
    components:{
      left: ShopView,
    },
    children: [
      {
        path: '/shop/home',
        name: 'shopHome',
        component: ShopLoginView
      },
      {
        path: '/shop/login',
        name: 'shopLogin',
        component: ShopLoginView
      },
      {
        path: '/shop/buy',
        name: 'shopBuy',
        component: ShopLoginView
      },
      {
        path: '/shop/pay/:orderId',
        name: 'shopPay',
        component: ShopLoginView
      },
      {
        path: '/shop/orders',
        name: 'shopOrders',
        component: ShopLoginView
      },
    ]
  },
  {
    path: '/shop/items',
    name: 'shopitems',
    component: VirusesView
  },
  {
    path: '/shop/login',
    name: 'shoplogin',
    components: {
      center: ShopLoginView,
    }
  },
  {
    path: '/bank/account',
    name: 'bankaccount',
    component: BankAccountView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
