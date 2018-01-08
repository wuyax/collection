<template>
<div class="nav">
  hello this is a dog ww!
  <router-link to="/dog/x">x</router-link>
  <router-link to="/dog/y">y</router-link>
  <router-view></router-view>
  <router-view name="a"></router-view>
  <router-view name="b"></router-view>
  </div>
</template>

<script>
  export default {
    name: "dog"
  }
</script>

<style scoped>

</style>
