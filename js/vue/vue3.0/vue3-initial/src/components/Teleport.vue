<template>
  <div class="confirm-modal">
    <button @click="isOpen = true">打开</button>
    <teleport to='#foot-container'>
      <div v-if="isOpen">
        <p>的撒大苏打实打实</p>
        <button @click="isOpen = false">取消</button>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const isOpen = ref(false)
    
    return {
      isOpen
    }
  }
}
</script>

<style>

</style>