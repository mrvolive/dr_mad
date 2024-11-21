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
      center: ShopView,
    },
    children: [
      {
       path: 'home',
        name: 'shophome',
        components: {
          right: ShopHome
        },
        alias:'/shop'
      },
      {
        path: 'login',
        name: 'shoplogin',
        components: {
          right: ShopLoginView,
        }
      },
      {
        path: 'buy',
        name: 'shopbuy',
        components: {
          right: ShopBuy
        }
      },
      {
        path: 'pay/:orderId',
        name: 'shoppay',
        components: {
          right: ShopPay
        }
      },
      {
        path: 'orders',
        name: 'shoporders',
        components: {
          right: ShopOrders
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
