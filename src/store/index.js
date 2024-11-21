import Vue from 'vue'
import Vuex from 'vuex'
import shop from './shop'
import bank from './bank'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    shop,
    bank
  }
});
