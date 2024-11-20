<template>
  <div id="app" class="d-flex flex-column gap-3">
    <NavBar :navItems="navItems" @menu-clicked="goTo($event)"></NavBar>


    <div class="container d-flex flex-column gap-3">
      <h1>Welcome to DrMad app</h1>

      <router-view/>
    </div>
  </div>
</template>

<script>

import NavBar from "@/components/NavBar";

export default {
  name: 'App',
  components: {NavBar},
  data: () => ({
    navItems: [
      {
        text: 'Virus',
      },
      {
        text: 'Compte bancaire',
      },
      {
        text: 'Login',
      },
    ],
    currentIndex: -1
  }),
  methods: {
    goTo(index) {
      if (this.currentIndex === index) {
        return
      }

      this.currentIndex = index

      if (index === 0) {
        this.$router.push('/shop/items')
      } else if (index === 1) {
        this.$router.push('/bank/account')
      } else if (index === 2) {
        this.$router.push('/shop/login')
      }
    }
  },
};
</script>
