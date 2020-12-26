<template>
  <div class="hello">
    {{message}}
    <hr/>

    <button @click="send">发送</button>
  </div>
</template>

<script>
export default {
  props: ['message'],
  data () {
    return {
      msg: '子'
    }
  },
  methods: {
    send () {
      this.$emit('sendData', this.msg)
    }
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
