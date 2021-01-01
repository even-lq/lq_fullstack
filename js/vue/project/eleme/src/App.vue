<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
// import header from '@/components/header/Header'
export default {
  components: {
    Header,
    // 'v-header': header 组件标签重命名
  }
}
</script>

<style lang="stylus">

</style>
