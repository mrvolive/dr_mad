<template>
  <div id="app" class="d-flex flex-column gap-3">
    <NavBar :navItems="navItems"/>


    <div class="d-flex flex-column gap-5">
      <div class="d-flex justify-content-between gap-5">
        <router-view name="left" style="width: 20dvw; padding: 0 0 0 10px;"/>
        <router-view name="center" style="width: 60dvw;"/>
        <router-view name="right" style="width: 20dvw; padding: 0 10px 0 0;"/>
      </div>

      <router-view name="bottom" style="padding: 0 10px; width: 100%;"/>
    </div>
  </div>
</template>

<script>

import NavBar from "@/components/NavBar";
import {mapActions, mapState} from "vuex";

export default {
  name: 'App',
  components: { NavBar },
  created() {
    this.getNavItems();
  },
  computed: {
    ...mapState('nav', ['navItems']),

    hasCenterView() {
      return this.$route.matched.some(record => record.components && record.components.center);
    },
    hasLeftView() {
      return this.$route.matched.some(record => record.components && record.components.left);
    },
    hasRightView() {
      return this.$route.matched.some(record => record.components && record.components.right);
    },
    hasLeftAndRight() {
      return this.hasLeftView && this.hasRightView;
    }
  },
  methods: {
    ...mapActions('nav', ['getNavItems'])
  }
};
</script>
