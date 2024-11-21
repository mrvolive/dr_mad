import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import shop from './module/shop'
import bank from './module/bank'

export default new Vuex.Store({
  modules:{
    shop,
    bank
  }
})
