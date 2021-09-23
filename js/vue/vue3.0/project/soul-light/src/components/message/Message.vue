<template>
  <teleport to="#message">
    <div class="alert message-info w-50 mx-auto d-flex justify-content-between"
      :class="classObject" v-if="isVisible">
      <span>{{message}}</span>
      <button type="button" class="btn-close" aria-label="Close" @click.prevent="hide"></button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, PropType, onUnmounted, ref } from 'vue';
import useDOMCreate from '@/hooks/useDOMCreate';
import store from '@/store';
export type MessageType = 'success' | 'error' | 'default';

export default defineComponent({
  props: {
    message: String,
    type: {
      type: String as PropType<MessageType>,
      default: 'default'
    }
  },
  emits: ['close-message'],
  setup(props, context) {
    useDOMCreate('message');
    const isVisible = ref(true);
    const classObject = {
      'alert-success': props.type === 'success',
      'alert-danger': props.type === 'error',
      'alert-primary': props.type === 'default'
    }
    const hide = () => {
      isVisible.value = false;
      context.emit('close-message', true);
    }
    return {
      classObject,
      isVisible,
      hide
    }
  }
})
</script>

<style lang="less" scoped>
  .alert {
    top: 50%;
    transform: translateY(-50%);
  }
</style>
