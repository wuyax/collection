<template>
  <div>test3</div>
</template>

<script>
  export default {
    name: "test3",
    created() {
      this.setTitle()
    },
    methods: {
      setTitle() {
        document.title= 'test3改变了标题'
      }
    }
  }
</script>

<style scoped>

</style>
