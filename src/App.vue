<template>
  <div id="app" class="d-flex flex-column gap-3">
    <NavBar :navItems="navItems"/>

    <component :is="getViewComponent()"/>
  </div>
</template>

<script>

import NavBar from "@/components/NavBar";
import {mapActions, mapState} from "vuex";
import CompleteView from "@/components/views/CompleteView.vue";
import CenterView from "@/components/views/CenterView.vue";
import LeftAndCenterView from "@/components/views/LeftAndCenterView.vue";
import RightAndCenterView from "@/components/views/RightAndCenterView.vue";
import BottomAndCenterView from "@/components/views/BottomAndCenterView.vue";

export default {
  name: 'App',
  components: {
    NavBar,
    CompleteView,
    CenterView,
    LeftAndCenterView,
    RightAndCenterView,
    BottomAndCenterView
  },
  created() {
    this.getNavItems();
  },
  computed: {
    ...mapState('nav', ['navItems']),
  },
  methods: {
    ...mapActions('nav', ['getNavItems']),

    hasCenterView() {
      return this.$route.matched.some(record => record.components && record.components.center);
    },
    hasLeftView() {
      return this.$route.matched.some(record => record.components && record.components.left);
    },
    hasRightView() {
      return this.$route.matched.some(record => record.components && record.components.right);
    },
    hasBottomView() {
      return this.$route.matched.some(record => record.components && record.components.bottom);
    },
    getViewComponent() {
      if (this.hasCenterView() && this.hasLeftView() && this.hasRightView() && this.hasBottomView()) {
        return 'CompleteView';
      } else if (this.hasCenterView() && !this.hasLeftView() && !this.hasRightView() && !this.hasBottomView()) {
        return 'CenterView';
      } else if (this.hasLeftView() && this.hasCenterView() && !this.hasRightView() && !this.hasBottomView()) {
        return 'LeftAndCenterView';
      } else if (this.hasCenterView() && this.hasRightView() && !this.hasLeftView() && !this.hasBottomView()) {
        return 'RightAndCenterView';
      } else if (this.hasCenterView() && this.hasBottomView() && !this.hasLeftView() && !this.hasRightView()) {
        return 'BottomAndCenterView';
      } else {
        return null;
      }
    }
  }
};
</script>
