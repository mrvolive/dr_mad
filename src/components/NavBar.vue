<template>
  <nav class="navbar navbar-expand bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link :to="{name: 'home'}" class="navbar-brand">DrMad</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-for="(link, index) in navItems" :key="index" class="nav-item">
            <router-link :to="{name: link.pathName}" class="nav-link">
              {{link.text}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

<!--  <div>-->
<!--    <table>-->
<!--      <tr>-->
<!--        <td v-for="(link, index) in titles" :key="index">-->
<!--          <button-->
<!--              @click="$emit('menu-clicked', index)"-->
<!--              class="nav-button"-->
<!--          >-->
<!--            {{link.text}}-->
<!--          </button>-->
<!--        </td>-->
<!--      </tr>-->
<!--    </table>-->
<!--  </div>-->
</template>

<script>
export default {
  name: "NavBar",
  props: { navItems: Array},
}
</script>

<style scoped>

</style>