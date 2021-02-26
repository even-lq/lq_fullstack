<template>
  <div id="app">
    <p>{{this.$store.state.num}}</p>
    <p>{{this.$store.getters.getNum}}</p>
    <button @click="$store.commit('add', 1)">+1</button>
    <button @click="$store.dispatch('actionAdd', 2)">+2</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
