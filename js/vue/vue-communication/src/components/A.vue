<template>
  <div class="wrap">
    i am A
    <button @click="sendA">a按钮</button>
  </div>
</template>

<script>
import Bus from '@/bus/index'
export default {
  data () {
    return {
      item: 'A数据'
    }
  },
  methods: {
    sendA () {
      Bus.$emit('sendA', this.item)
    }
  }
}
</script>

<style>

</style>
