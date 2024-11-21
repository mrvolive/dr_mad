<template>
  <div class="d-flex justify-content-between gap-5">
    <router-view name="left" style="width: 20dvw; padding: 0 0 0 10px;"/>
    <router-view name="center" style="width: 60dvw;"/>
    <router-view name="right" style="width: 20dvw; padding: 0 10px 0 0;"/>
  </div>
</template>

<script>
export default {
  name: 'LeftCenterRightViews',
}
</script>