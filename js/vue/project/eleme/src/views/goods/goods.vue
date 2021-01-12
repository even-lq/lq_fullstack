<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li class="menu-item" 
        @click="selectMenu(index)" 
        v-for="(item, index) in goods" 
        :key="index"
        :class="{'current' : currentIndex === index}">
          <span class="text">
            <span class="icon"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper"></div>
  </div>
</template>

<script>
import { getGoods } from "@/api"
export default {
  data() {
    return {
      currentIndex: 0,
      goods: []
    }
  },
  methods: {
    selectMenu(index) {
      this.currentIndex = index
    }
  },
  created() {
    getGoods().then(goods => {
      this.goods = goods
    })
  },
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable';
.goods
  display flex
  position absolute
  top 176px
  bottom 46px
  width 100%
  overflow hidden
  .menu-wrapper
    flex 0 0 80px
    width 80px
    background #f3f5f7
    .menu-item
      display flex
      align-items center
      width 56px
      height 54px
      padding 0 12px
      line-height 14px
      font-size $fontsize-small
      &.current
        background #ffffff
        font-weight 700
</style>