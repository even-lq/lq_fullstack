<template>
  <global-header :user="currentUser" />
  <!-- text="拼命加载中" background="rgba(0, 0, 0, .8)" -->
  <loader v-if="isLoading" />
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, watch } from 'vue'
import { useStore } from 'vuex';
import { GlobalDataProps } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalHeader from './components/header/GlobalHeader.vue';
import Loader from './components/loader/Loader.vue';
import createMessage from '@/components/message/createMessage';

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    Loader
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    const currentUser = computed(() => store.state.user);
    const isLoading = computed(() => store.state.loading);
    const error = computed(() => store.state.error);
    watch(() => error.value.status, () => {
      const { status, message } = error.value;
      if (status && message) {
        createMessage(message, 'error');
      }
    })
    // const inputRef = ref<any>()
    // const emailVal = ref('')
    // const passwordVal = ref('')
    // const emailRules: RulesProp = [
    //   { type: 'required', message: '电子邮箱地址' },
    //   { type: 'email', message: '请输入正确的电子邮箱格式' }
    // ]
    // const passwordRules: RulesProp = [
    //   { type: 'required', message: '密码' }
    // ]
    // provide('emailVal', emailVal)
    // const onFormSubmit = (result: boolean) => {
    //   console.log('result', inputRef.value.val)
    // }
    return {
      currentUser,
      isLoading,
      error
      // onCloseMessage
      // emailRules,
      // emailVal,
      // passwordRules,
      // passwordVal,
      // onFormSubmit,
      // inputRef
    }
  }
})
</script>

<style lang="less">
 .message {
  background: rgba(255, 255, 255, .5);
  width: 100%;
  height: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
 }
</style>
