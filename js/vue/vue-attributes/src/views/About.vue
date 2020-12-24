<template>
  <div class="about">
    <p>当前温度：{{ temperture }}</p>
    <p>推荐穿衣：{{ suggest }}</p>

    <div>
      <button @click="add">+</button>
      <button @click="reduce">-</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
      temperture: 9,
      // temperture: {
      //   num: 9
      // },
      suggest: ''
    }
  },
  computed: {
    newCount () {
      return (this.count + 10) ** 2
    }
    // suggest () {
    //   if (this.temperture <= -1) {
    //     return '羽绒服'
    //   } else if (this.temperture < 14) {
    //     return '棉袄'
    //   } else if (this.temperture < 24) {
    //     return '夹克'
    //   } else {
    //     return '短袖'
    //   }
    // }
  },
  methods: {
    add () {
      this.temperture += 5
      // this.temperture.num += 5
    },
    reduce () {
      this.temperture -= 5
      // this.temperture.num -= 5
    }
  },
  watch: {
    // temperture (newVal, oldVal) {
    //   console.log(newVal, oldVal)
    //   if (newVal <= -1) {
    //     this.suggest = '羽绒服'
    //   } else if (newVal < 14) {
    //     this.suggest = '棉袄'
    //   } else if (newVal < 24) {
    //     this.suggest = '夹克'
    //   } else {
    //     this.suggest = '短袖'
    //   }
    // }
    // 监听对象的属性
    // 'temperture.num': {}
    temperture: {
      handler (newVal, oldVal) {
        if (newVal <= -1) {
          // newVal.num <= -1
          this.suggest = '羽绒服'
        } else if (newVal < 14) {
          this.suggest = '棉袄'
        } else if (newVal < 24) {
          this.suggest = '夹克'
        } else {
          this.suggest = '短袖'
        }
      },
      immediate: true
      // deep: true
    }
  }
}
</script>

<style>
</style>
