<template>
   <div class="">
     <div class="shop-cart">
       <div class="content">
         <div class="content-left">
           <div class="logo-wrapper">
             <div class="logo">
                <!-- highlight -->
               <i class="icon-shopping_cart"></i>
              </div>
              <div class="num">4</div>
           </div>
           <div class="price">￥50</div>
           <div class="desc">另需配送费￥4元</div>
         </div>
         <div class="content-right">
           <div class="pay">
             还差20元起送
           </div>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
export default {

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

</style>