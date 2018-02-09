<template>
<div class="nav">
  hello this is a pig!
  </div>
</template>

<script>
  export default {
    name: "pig",
    created() {
      this.setTitle()
    },
    methods: {
      setTitle() {
        document.title= 'pig改变了标题'
      }
    }
  }
</script>

<style scoped>

</style>
