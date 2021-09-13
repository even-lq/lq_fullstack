<template>
  <header class="home-header wrap" :class="{ active: headerScroll }">
    <router-link to="/category">
      <i class="iconfont icon-menu"></i>
    </router-link>

    <div class="header-search">
      <span class="app-name">新蜂商城</span>
      <i class="iconfont icon-search"></i>
      <router-link tag="span" class="search-title" to="./product-list?from=home"
        >山河无恙，人间皆安</router-link
      >
    </div>

    <router-link class="login" tag="span" to="./login" v-if="!isLogin"
      >登录</router-link
    >
    <router-link class="login" tag="span" to="./user" v-else>
      <van-icon name="manager-o" />
    </router-link>
  </header>
  <navBar />
  <!-- 轮播图 -->
  <swiper :list="carousels" />
  <!-- 分类列表 -->
  <div class="category-list">
    <div v-for="item in categoryList" :key="item.categoryId">
      <img :src="item.imgUrl" alt="" />
      <span>{{ item.name }}</span>
    </div>
  </div>
  <!-- 商品列表 -->
  <goodList
    v-if="newGoodses.length !== 0"
    :title="'新品上线'"
    :goods="newGoodses"
  />
  <!-- 热门商品列表 -->
  <goodList
    v-if="hotGoodses.length !== 0"
    :title="'热门商品'"
    :goods="hotGoodses"
  />
  <!-- 最新推荐列表 -->
  <goodList
    v-if="hotGoodses.length !== 0"
    :title="'最新推荐'"
    :goods="hotGoodses"
    :style="{
      paddingBottom: '100px',
    }"
  />
</template>

<script>
import navBar from "@/components/NavBar";
import swiper from "@/components/Swiper";
import goodList from "@/components/GoodList";
import { Toast } from "vant";
import { onMounted, reactive, toRefs, nextTick } from "vue";

import { getHome } from "@/service/home";
import { getLocal } from "@/utils/utils";

export default {
  name: "home",
  components: {
    navBar,
    swiper,
    goodList,
  },
  setup() {
    const state = reactive({
      carousels: [],
      categoryList: [
        {
          name: "新蜂超市",
          imgUrl: "//s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png",
          categoryId: 100001,
        },
        {
          name: "新蜂服饰",
          imgUrl: "//s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png",
          categoryId: 100003,
        },
        {
          name: "全球购",
          imgUrl:
            "//s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png",
          categoryId: 100002,
        },
        {
          name: "新蜂生鲜",
          imgUrl: "//s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png",
          categoryId: 100004,
        },
        {
          name: "新蜂到家",
          imgUrl: "//s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png",
          categoryId: 100005,
        },
        {
          name: "充值缴费",
          imgUrl: "//s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png",
          categoryId: 100006,
        },
        {
          name: "9.9元拼",
          imgUrl: "//s.yezgea02.com/1604041127880/9.9%402x.png",
          categoryId: 100007,
        },
        {
          name: "领劵",
          imgUrl: "//s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png",
          categoryId: 100008,
        },
        {
          name: "省钱",
          imgUrl: "//s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png",
          categoryId: 100009,
        },
        {
          name: "全部",
          imgUrl: "//s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png",
          categoryId: 100010,
        },
      ],
      headerScroll: false, // 滚动透明判断
      newGoodses: [],
      hotGoodses: [],
      recommendGoodses: [],
      isLogin: false
    });

    onMounted(async () => {
      const token = getLocal('token');
      state.isLogin = !!token;
      console.log(state.isLogin);
      Toast.loading({
        duration: 0,
        message: "加载中",
        forbidClick: true,
      });
      const { data } = await getHome();
      Toast.clear();
      Object.assign(state, data);
      // state.carousels = data.carousels;
      // state.newGoodses = data.newGoodses;
      // state.hotGoodses = data.hotGoodses;
      // state.recommendGoodses = data.recommendGoodses;
    });

    // 页面滚动事件
    nextTick(() => {
      window.addEventListener("scroll", () => {
        let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        state.headerScroll = scrollTop > 100;
      });
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
@import "../common/style/mixin";
.home-header {
  position: fixed;
  left: 0;
  top: 0;
  .wh(100%, 50px);
  .fj();
  line-height: 50px;
  padding: 0 15px;
  .boxSizing();
  font-size: 15px;
  color: #fff;
  z-index: 10000;
  .icon-menu {
    color: @primary;
    font-size: 22px;
  }
  &.active {
    background: @primary;
    .icon-menu {
      color: #fff;
    }
    .login {
      color: #fff;
    }
  }

  .header-search {
    display: flex;
    .wh(74%, 20px);
    line-height: 20px;
    margin: 10px 0;
    padding: 5px 0;
    color: #232326;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 20px;
    .app-name {
      padding: 0 10px;
      color: @primary;
      font-size: 20px;
      font-weight: bold;
      border-right: 1px solid #666;
    }
    .icon-search {
      padding: 0 10px;
      font-size: 17px;
    }
    .search-title {
      font-size: 12px;
      color: #666;
    }
  }
  .icon-iconyonghu {
    color: #fff;
    font-size: 22px;
  }
  .login {
    color: @primary;
    line-height: 52px;
    .van-icon-manager-o {
      font-size: 20px;
      vertical-align: -3px;
    }
  }
}
.category-list {
  display: flex;
  flex-shrink: 0; // 不允许收缩：防止设置的宽高相等,显示候宽高不一致
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 13px;
  div {
    display: flex;
    flex-direction: column;
    width: 20%;
    text-align: center;
    img {
      .wh(36px, 36px);
      margin: 13px auto 8px auto;
    }
  }
}
.floor-list {
  width: 100%;
  padding-bottom: 50px;
  .floor-head {
    width: 100%;
    height: 40px;
    background: #f6f6f6;
  }
  .floor-content {
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    width: 100%;
    .boxSizing();
    .floor-category {
      width: 50%;
      padding: 10px;
      border-right: 1px solid #dcdcdc;
      border-bottom: 1px solid #dcdcdc;
      .boxSizing();
      &:nth-child(2n) {
        border-right: none;
      }
      p {
        font-size: 17px;
        color: #333;
        &:nth-child(2) {
          padding: 5px 0;
          font-size: 13px;
          color: @primary;
        }
      }
      .floor-products {
        .fj();
        width: 100%;
        img {
          .wh(65px, 65px);
        }
      }
    }
  }
}
</style>