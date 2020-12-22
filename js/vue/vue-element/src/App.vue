<template>
  <div class="page">
    <p>
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于</router-link>
    </p>

    <!-- 路由入口 -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <!-- 替换了当前路径的组件 <div class="home">home</div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave-active {
  opacity: 0;
  /* transition: opacity 0.5s; */
}
.page {
  text-align: center;
}
p {
  text-align: center;
}
</style>