<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Hello :message="title" :fromHi="fromHi" @sendData="getData" @click="modifyTitle"/>
    {{formChild}}
    <Hi @sendHi="getHi"/>
    <hr>
    <Test :testSync.sync="test"/>
    <div v-show="test">父：{{test}}</div>
    <br>
    <br>
    <br>
    <hr>
    <A/>
    <br>
    -----------------------------------------AB分割线------------------------------------------------------
    <br>
    <br>
    <B/>

  </div>
</template>

<script>
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import Test from '@/components/Test'
import A from '@/components/A'
import B from '@/components/B'
export default {
  name: 'App',
  data () {
    return {
      title: '我爱我的祖国',
      formChild: '',
      fromHi: '',
      test: true
    }
  },
  components: {
    Hello,
    Hi,
    Test,
    A,
    B
  },
  methods: {
    getData (e) {
      console.log(e)
      this.formChild = e
    },
    getHi (e) {
      this.fromHi = e
    },
    modifyTitle () {
      this.title = 'test'
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
