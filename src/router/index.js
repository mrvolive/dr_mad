import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import VirusesView from '@/views/VirusesView.vue'
import ShopLoginView from '@/views/ShopLoginView.vue'
import BankAccountView from '@/views/BankAccountView.vue'
import ShopView from "@/views/ShopView.vue";
import ShopHome from "@/views/ShopHome.vue";
import ShopBuy from "@/views/ShopBuy.vue"
import ShopPay from "@/views/ShopPay.vue"
import ShopOrders from "@/views/ShopOrders.vue"

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
        name: 'shophome',
        components: {
          center: ShopHome
        },
        alias: '/shop'
      },
      {
        path: '/shop/login',
        name: 'shoplogin',
        components: {
          center: ShopLoginView
        }
      },
      {
        path: '/shop/buy',
        name: 'shopbuy',
        components: {
          center: ShopBuy
        }
      },
      {
        path: '/shop/pay/:orderId',
        name: 'shoppay',
        components: {
          center: ShopPay
        }
      },
      {
        path: '/shop/orders',
        name: 'shoporders',
        components: {
          center: ShopOrders
        }
      },
    ]
  },
  {
    path: '/shop/items',
    name: 'shopitems',
    component: VirusesView
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
