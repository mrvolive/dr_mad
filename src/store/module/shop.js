import ShopService from '@/services/shop.service'

export default {
  namespaced: true,
  // state = les données centralisées
  state:() => ({
    viruses: [],
    shopUser: null,
  }),
  // mutations = fonctions synchrones pour mettre à jour le state (!!! interdit de modifier directement le state)
  mutations: {
    updateViruses(state, viruses) {
      state.viruses = viruses
    },
    updateShopUser(state, user) {
      state.shopUser = user
    },
  },
  // actions = fonctions asynchrone pour mettre à jour le state, en faisant appel aux mutations, via la fonction commit()
  actions: {
    async shopLogin({ commit, dispatch }, data) {
      console.log(data);
      let response = await ShopService.shopLogin(data)
      if (response.error === 0) {
        commit('updateShopUser', response.data)

        // Fait appel à la méthode getNavItems du module nav pour update la navbar
        dispatch('nav/getNavItems', null, { root: true })
      }
      else {
        console.log(response.data)
      }
    },
    async getAllViruses({ commit }) {
      console.log('récupération des viruses');
      let response = await ShopService.getAllViruses()
      if (response.error === 0) {
        commit('updateViruses', response.data)
      }
      else {
        console.log(response.data)
      }
    }
  }
}
