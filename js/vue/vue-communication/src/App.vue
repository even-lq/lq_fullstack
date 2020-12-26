<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Hello :message="title" @sendData="getData"/>
    {{formChild}}
  </div>
</template>

<script>
import Hello from '@/components/Hello'
export default {
  name: 'App',
  data () {
    return {
      title: '我爱我的祖国',
      formChild: ''
    }
  },
  components: {
    Hello
  },
  methods: {
    getData (e) {
      console.log(e)
      this.formChild = e
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
