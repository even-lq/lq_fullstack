<template>
  <div class="cart-control">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count > 0" @click.stop="decreaseCart">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    
    <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop="addCart($event)"></div>
  </div>
</template>

<script> 
export default {
  props: {
    food: {
      type: Object
    },
    shopCartDom: {
      type: Object
    },
  },
  methods: {
    addCart($event) {
      console.log($event.pageX, $event.pageY, $event.target.offsetWidth );
      let x = $event.pageX - $event.target.offsetWidth / 2;
      let y = $event.pageY - $event.target.offsetWidth / 2;
      this.$nextTick(() => {
        this.$emit('getIcon')
      })
      this.createBall(x, y)
      if (!this.food.count) {
        this.$set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
    },
    decreaseCart() {
      if (this.food.count) {
        this.food.count -- 
      }
    },
    createBall(x, y) {
      let bar = document.createElement('div');
      bar.style.position = 'absolute'
      bar.style.left = (x) + 'px'
      bar.style.top = (y) + 'px'
      bar.style.width = '0.533333rem'
      bar.style.height = '0.533333rem'
      bar.style.borderRadius = '50%'
      bar.style.backgroundColor = '#02b6fd'
      bar.style.transition = 'left .6s linear, top .6s cubic-bezier(0.5, -0.5, 1, 1)'

      document.body.appendChild(bar)
      // 添加动画属性
      setTimeout(() => {
          bar.style.left = (this.shopCartDom.offsetLeft + this.shopCartDom.offsetWidth - 16) + 'px'
          bar.style.top = (this.shopCartDom.offsetTop) + 'px'
      }, 0);

      /**
       * 动画结束后，删除自己
       */
      bar.ontransitionend = function () {
          this.remove()
      }
    }
        
  }
}
</script>

<style lang="stylus" scoped>
.cart-control
  font-size 0
  .cart-decrease
    display inline-block
    padding 6px
    opacity 1
    transform translate3d(0, 0, 0)
    .inner
      display inline-block
      line-height 24px
      font-size 24px
      color rgb(0, 160, 220)
      transition all .4s linear
      transform rotate(0)
    &.move-enter-active, &.move-leave-active
      transition all 0.4s linear
    &.move-enter, &.move-leave-to
      opacity 0
      transform translate3d(24px, 0, 0)
      .inner
        transform rotate(180deg)
  .cart-count
    display inline-block
    padding-top 6px
    line-height 24px
    text-align center
    font-size 10px
    color rgb(147, 153, 159)
    vertical-align top
  .cart-add
    display inline-block
    padding 6px
    line-height 24px
    font-size 24px
    color rgb(0, 160, 220)
</style>