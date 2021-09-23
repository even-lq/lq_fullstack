<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from 'vue'

export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit'],
  setup (props, context) {
    const emailVal: Ref<string> | undefined = inject('emailVal')
    const submitForm = () => {
      context.emit('form-submit', true)
      if (emailVal) {
        console.log(emailVal.value)
      }
    }
    return {
      submitForm
    }
  }
})
</script>
