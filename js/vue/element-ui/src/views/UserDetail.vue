<template>
  <div class="user-detail">
    用户详情
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 2,
      price: 100
    }
  },
  computed: {
    value() {
      return this.num ** 4
    }
  }
}
</script>

<style>

</style>