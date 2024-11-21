export default {
    namespaced: true,
    state: () => ({
        navItems: [],
    }),
    mutations: {
        updateNavItems(state, navItems) {
            state.navItems = navItems
        },
    },
    actions: {
        async getNavItems({commit, rootState}) {
            let navItem = [];

            if (rootState.shop.shopUser) {
                navItem.push(
                    {
                        text: 'Acheter',
                        pathName: 'buy',
                    },
                    {
                        text: 'Payer',
                        pathName: 'pay',
                    },
                    {
                        text: 'Mes commandes',
                        pathName: 'myorders',
                    }
                );
            } else {
                navItem.push(
                    {
                        text: 'Login',
                        pathName: 'shoplogin',
                    }
                );
            }

            commit('updateNavItems', navItem);
        }
    }
}