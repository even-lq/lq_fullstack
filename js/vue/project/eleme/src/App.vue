<template>
  <div id="app">
    <Header :seller="seller"></Header>
    <div class="tab">
      <div class="tab-wrapper">
        <router-link to="/">商品</router-link>
      </div>
       <div class="tab-wrapper">
        <router-link to="/comment">评论</router-link>
      </div>
       <div class="tab-wrapper">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>

    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
// import header from '@/components/header/Header'
import { getSeller } from "@/api"
import qs from 'qs'

export default {
  data() {
    return {
      seller: {
        //  qs.parse将URL解析成对象的形式
        id: qs.parse(location.search).id
      }
    }
  },
  components: {
    Header,
    // 'v-header': header 组件标签重命名
  },
  created() {
    getSeller({
      id: this.seller.id
    }).then(seller => {
      console.log(seller);
      // 把seller合并到this.seller再合并到{}中返回合并后的对象
      this.seller = Object.assign({}, this.seller, seller)
      console.log(this.seller);
    })
  },
}
</script>

<style lang="stylus">
@import './common/stylus/variable';
.tab
  width 100%
  display flex
  height 36px
  line-height 36px
  &-wrapper
    flex 1
    text-align center
    a
      width 100%
      display inline-block
      color #666
      text-decoration none
    .router-link-exact-active
      color $color-red
      border-bottom 2px solid $color-red
</style>
