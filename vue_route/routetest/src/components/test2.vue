<template>
  <div>test2</div>
</template>

<script>
  export default {
    name: "test2",
    created() {
      this.setTitle()
    },
    methods: {
      setTitle() {
        document.title= 'test2改变了标题'
      }
    }
  }
</script>

<style scoped>

</style>
