<template>
  <div class="nav">
    hello this is a cat! and he has a {{$route.params.id}}
    <router-link to="/cat/son/test1">test1</router-link>
    <router-link to="/cat/son/test2">test2</router-link>
    <router-link to="/cat/son/test3">test3</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "cat",
    mounted() {
      console.log(this.$route)
      setTimeout(()=>{
          // this.$router.push({name: 'dog',query:{name: 'zhangsan'}})
          // this.$router.replace({name: 'dog',query:{name: 'zhangsan'}})
      },2000)

      this.setTitle()
    },
    methods: {
      setTitle() {
        document.title= 'cat改变了标题'
      }
    }
  }
</script>

<style scoped>

</style>
