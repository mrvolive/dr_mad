import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import shop from './shop'
import bank from './bank'

export default new Vuex.Store({
  modules:{
    shop,
    bank
  }
})
