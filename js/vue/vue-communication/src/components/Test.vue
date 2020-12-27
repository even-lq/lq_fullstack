<template>
  <div class="hello">
    子：{{testSync}}
    <br>
    <button @click="send">测试sync修饰符</button>
  </div>
</template>

<script>
export default {
  props: ['testSync'],
  data () {
    return {
      // msg: '子'
    }
  },
  methods: {
    send () {
      this.$emit('update:testSync', !this.testSync)
    }
  },
  mounted: {
  }
}
</script>

<style>
.hello {
  color: brown;
  font-size: 20px;
  /* width: 100px; */
  /* height: 50px;
  border: 2px dotted darkturquoise;
  margin: 0 auto; */
}
</style>
