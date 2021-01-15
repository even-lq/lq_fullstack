<template>
   <div class="">
     <div class="shop-cart" ref="logoCart">
       <div class="content" @click="toggleList">
         <div class="content-left">
           <div class="logo-wrapper" ref="logoWrapper">
             <div class="logo" :class="{'highlight' : totaolCount > 0 }" ref="logo">
                <!-- highlight -->
               <i class="icon-shopping_cart" :class="{'highlight' : totaolCount > 0 }"></i>
              </div>
              <div class="num"
              ref="num" 
              v-show="totaolCount > 0"
              :class="{'circle' : totaolCount < 10}"
              >{{totaolCount}}</div>
              <!-- :style="totaolCount > 9 ? 'border-radius: 16px' : 'border-radius: 50%'" -->

           </div>
           <div class="price" :class="{'highlight' : totaolCount > 0 }">￥{{totaolPrice}}</div>
           <div class="desc">另需配送费￥{{deliveryPrice}} 元</div>
         </div>
         <div class="content-right">
           <div class="pay" :class="payClass">
             {{priceDesc}}
           </div>
         </div>
       </div>
       <!-- 购物车列表 -->
       <transition name="fold">
         <div class="shopcart-list" v-show="listShow">
           <div class="list-header">
             <h1 class="title">购物车</h1>
             <span class="empty" @click="empty">清空</span>
           </div>
           <div class="list-content" ref="listContent">
             <ul>
               <li class="food" v-for="(item, index) in selectFoods" :key="index">
                 <span class="name">{{item.name}}</span>
                 <div class="price"><span>￥{{item.price * item.count}}</span></div>
                 <div class="cartcontrol-wrapper">
                    <CartControl :food="item"></CartControl>
                  </div>
               </li>
             </ul>
           </div>
         </div>
       </transition>
     </div>
   </div>
</template>

<script>
import CartControl from "@/components/cart-control/Cart-control";
import BScroll from "better-scroll";
export default {
  props: {
    selectFoods: {
      type: Array,
      default() {
        return []
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
    }
  },
  data() {
    return {
      fold: false
    }
  },
  computed: {
    totaolCount() {
      let count = 0
      this.selectFoods.forEach(food => count += food.count)
      return count
    },
    totaolPrice() {
      let totaolPrice = 0
      this.selectFoods.forEach(food => totaolPrice += food.count * food.price)
      return totaolPrice
    },
    priceDesc() {
      if (this.totaolPrice === 0) {
        return `还差${this.minPrice}元起送`
      } else if (this.totaolPrice < this.minPrice) {
        let diff = this.minPrice - this.totaolPrice
        return `还差${diff}元起送`
      } else {
        return `去结算`
      }
    },
    payClass() {
      if (this.totaolPrice < this.minPrice) {
        return 'not-enough'
      } else {
        return `enough`
      }
    },
    listShow() {
      if (!this.totaolCount) {
        this.fold = true
        return false
      }
      let show = !this.fold
      if (show) {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.listContent, {
              click: true
            })
          } else {
            this.scroll.refresh()
          }
        })
      }
      return show
    },
  },

  components: {
    CartControl
  },
  methods: {
    toggleList() {
      if (this.selectFoods.length === 0) {
        return;
      }
      this.fold = !this.fold
    },
    empty() {
      this.fold = false
      this.selectFoods.forEach(food => food.count = 0)
      // 父selectFoods也会改变，父selectFoods所有的count都变成0
    },
    getShopCartClass() {
      let dom = {
        structure: this.$refs.logoWrapper,
        height: this.$refs.logoCart.offsetHeight,
      }
      return dom
    }
  }

}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable'
.shop-cart
  position fixed
  left 0
  bottom 0
  z-index 50
  width 100%
  height 50px
  .content
    display flex
    background $color-background
    color $color-light-grey
    &-left 
      flex 1
      display flex
      align-items center
      height 50px
      .logo-wrapper
        display inline-block
        position relative
        top -8px
        margin 0 12px
        padding 6px
        width 56px
        height 56px
        border-radius 50%
        box-sizing border-box
        background #141d27
        // background $color-dark-grey
        .logo
          width 100%
          height 100%
          border-radius 50%
          background $color-dark-grey
          text-align center
          line-height 44px
          &.highlight
            background $color-blue
          .icon-shopping_cart
            line-height 44px
            font-size $fontsize-large-xxx
            color #80858a
            &.highlight
              color $color-white
        .num
          position absolute
          top 0
          right 0
          width 24px
          height 16px
          line-height 16px
          text-align center
          border-radius 16px
          font-size $fontsize-small-s
          font-weight bold
          color $color-white
          // background $color-red
          // background-image: linear-gradient(to right, #f9d423 0%, #ff4e50 100%);
          background: linear-gradient(90deg,#fc9153,#f01414);
          // background: linear-gradient(to right, #f9d423 0%, #ff4e50 100%
          &.circle
            width 16px
            border-radius 50%
      .price
        display inline-block
        line-height 24px
        padding-right 12px
        border-right 1px solid rgba(255, 255, 255, .1)
        font-size $fontsize-large
        font-weight 700
        &.highlight
          color $color-white
      .desc
        display inline-block
        margin-left: 12px;
        line-height 24px
        font-size $fontsize-small
    &-right
      flex 0 0 105px
      width 105px
      .pay
        height 50px
        line-height 50px
        text-align center
        font-size $fontsize-small
        &.not-enough
          background #2b333b
        &.enough
          background $color-green
          color $color-white
          font-weight 700
  .shopcart-list
    position absolute
    left 0
    top 0
    width 100%
    z-index -1
    transform translate3d(0, -100%, 0)
    &.fold-enter-active, &.fold-leave-active
      transition all 0.5s
    &.fold-enter, &.fold-leave-to
      transform translate3d(0, 0, 0)  
    .list-header
      display flex
      justify-content space-between
      align-items center
      padding 0 18px
      height 40px
      line-height 40px
      border-bottom 1px solid $color-background-sss 
      background $color-background-ssss 
      .title
        font-size $fontsize-medium
        color $color-background
      .empty
        font-size $fontsize-small
        color $color-blue
    .list-content
      padding 0 18px
      max-height 217px
      overflow hidden
      background #fff
      .food
        position relative
        padding 12px 0
        box-sizing border-box
        .name
          line-height 24px
          font-size 14px
          color rgb(7, 17, 27)
        .price
          position absolute
          right 90px
          bottom 12px
          line-height 24px
          font-size 14px
          font-weight 700
          color rgb(240, 20, 20)
        .cartcontrol-wrapper
          position absolute
          right 0
          bottom 6px

</style>