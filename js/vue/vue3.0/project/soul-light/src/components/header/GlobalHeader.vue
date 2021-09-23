<template>
   <nav class="navbar navbar-dark bg-white justify-content-between mb-4 px-4">
      <!-- <a class="navbar-brand text-primary fs-4" href="#">心灯</a> -->
      <a class="navbar-brand text-primary fs-4 d-inline-block align-middle" href="#">
        <img src="../../assets/soul-light.svg" alt="" width="30" height="30" class="align-middle">
        <span class="d-inline-block h-100 align-middle ps-1">心灯</span>
      </a>
      <!-- <van-search v-model="value" shape="round" input-align="center" placeholder="请输入搜索关键词" /> -->
      <ul v-if="!user.isLogin" class="user list-inline mb-0">
        <li class="list-inline-item"><router-link to="/login" class="btn btn-link my-2">登陆</router-link></li>
        <li class="list-inline-item"><router-link to="/signup" class="btn btn-outline-primary my-2">注册</router-link></li>
      </ul>
      <ul v-else class="list-inline mb-0">
          <li class="list-inline-item">
            <dropdown :title="`你好 ${user.nickName}`">
              <dropdown-item><router-link to="/create" class="dropdown-item">新建文章</router-link></dropdown-item>
              <dropdown-item disabled><a href="#" class="dropdown-item">编辑资料</a></dropdown-item>
              <dropdown-item><a href="#" class="dropdown-item">退出登录</a></dropdown-item>
            </dropdown>
          </li>
      </ul>
   </nav>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import Dropdown from '../dropdown/Dropdown.vue';
import DropdownItem from '../dropdown/DropdownItem.vue';
import { UserProps } from '../../store';

export default defineComponent({
  name: 'GlobalHeader',
  components: {
    Dropdown,
    DropdownItem
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
  setup () {
    const value = ref('')
    return { value }
  }
})
</script>

<style lang="less" scoped>
  .navbar {
    &-brand {
      font-weight: 700;
    }
    box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  }
</style>
