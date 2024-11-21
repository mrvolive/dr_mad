<template>
  <div id="app" class="d-flex flex-column gap-3">
    <NavBar :navItems="navItems" />


    <div class="container d-flex flex-column gap-3">
      <router-view />
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
        pathName: 'shopitems',
      },
      {
        text: 'Compte bancaire',
        pathName: 'bankaccount',
      },
      {
        text: 'Login',
        pathName: 'shoplogin',
      },
    ],
  }),
};
</script>
