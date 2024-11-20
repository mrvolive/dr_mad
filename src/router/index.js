import Vue from 'vue'
import VueRouter from 'vue-router'
import VirusesView from '../views/VirusesView.vue'
import ShopLoginView from '../views/ShopLoginView.vue'
import BankAccountView from '../views/BankAccountView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/shop/items',
    name: 'shopitems',
    component: VirusesView
  },
  {
    path: '/shop/login',
    name: 'shoplogin',
    component: ShopLoginView
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
