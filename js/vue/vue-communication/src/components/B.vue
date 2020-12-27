<template>
  <div class="wrap">i am B {{bItem}}</div>
</template>

<script>
import Bus from '@/bus/index'
export default {
  data () {
    return {
      bItem: ''
    }
  },
  mounted () {
    Bus.$on('sendA', (e) => {
      this.bItem = e
    })
  }
}
</script>

<style>
</style>
