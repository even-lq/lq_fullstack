<template>
  <teleport to="#back">
    <div
      class="d-flex justify-content-center align-items-center h-100 w-100 loading-container"
      :style="{backgroundColor: background || ''}"
    >
      <div class="loading-content">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">{{ text || 'loading'}}</span>
        </div>
        <p v-if="text" class="text-primary small">{{ text }}</p>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, computed } from 'vue';
import useDOMCreate from '@/hooks/useDOMCreate';

export default defineComponent({
  props: {
    text: {
      type: String
    },
    background: {
      type: String
    }
  },
  setup() {
    useDOMCreate('back');

    const app = document.getElementById('app')
    const node = document.createElement('div');
    node.id = 'back';
    document.body.insertBefore(node, app);
    onUnmounted(() => {
      document.body.removeChild(node);
    })
    // document.body.appendChild(node);
  }
})
</script>

<style lang="less">
.loading-container {
  background: rgba(255, 255, 255, .5);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
}
// .loading-container {
//   text-align: center;
// }
</style>
