<template>
  <div class="d-flex flex-column gap-5">
    <div class="container">
      <router-view name="center" />
    </div>

    <router-view name="bottom" style="padding: 0 10px; width: 100%;"/>
  </div>
</template>

<script>
export default {
  name: 'BottomAndCenterView'
}
</script>