<template>
  <div class="hi">
    <p @click="sendHi">{{hi}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hi: 'hi！ Vue',
      hiMsg: 'hi数据'
    }
  },
  methods: {
    sendHi () {
      this.$emit('sendHi', this.hiMsg)
    }
  }
}
</script>

<style>

</style>
