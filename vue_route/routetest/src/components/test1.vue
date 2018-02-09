<template>
  <div>test111</div>
</template>

<script>
  export default {
    name: "test1",
    mounted() {
      console.log(this.$route)
    },
    created() {
      this.setTitle()
    },
    methods: {
      setTitle() {
        document.title= 'test1改变了标题'
      }
    }
  }
</script>

<style scoped>

</style>
