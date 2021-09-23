<template>
  <div class="validate-input-container pb-2">
    <input
      v-if="tag !== 'textarea'"
      class="form-control"
      :class="{ 'is-invalid': error }"
      @blur="validateInput"
      v-model="val"
      v-bind="$attrs"
    />
    <textarea
      v-else
      class="form-control"
      :class="{'is-invalid': error}"
      @blur="validateInput"
      v-model="val"
      v-bind="$attrs"
    />
    <span v-if="error" class="invalid-feedback" >{{ message }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType, toRefs, onMounted, watch, computed } from 'vue'
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

interface RuleProp {
  type: 'required' | 'email' | 'custom';
  message: string;
  validator?: () => boolean;
}
export type RulesProp = RuleProp[];
export type TagType = 'input' | 'textarea';
export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String,
    tag: {
      type: String as PropType<TagType>,
      default: 'input'
    }
  },
  inheritAttrs: false,
  setup (props, context) {
    const inputlRef = reactive({
      val: computed({
        get: () => props.modelValue || '',
        set: val => {
          context.emit('update:modelValue', val);
        }
      }),
      error: false,
      message: ''
    })
    const validateInput = (): boolean => {
      if (props.rules) {
        const allPassed = props.rules.every((rule: RuleProp): boolean => {
          let passed = true;
          inputlRef.message = rule.message;
          switch (rule.type) {
            case 'required':
              passed = (inputlRef.val.trim() !== '');
              inputlRef.message = rule.message + '不能为空';
              break;
            case 'email':
              passed = emailReg.test(inputlRef.val);
              break;
            case 'custom':
              passed = rule.validator ? rule.validator() : true;
              break;
            default:
              break;
          }
          return passed;
        })
        inputlRef.error = !allPassed;
        return allPassed;
      }
      return true;
    }
    return {
      ...toRefs(inputlRef),
      validateInput
    }
  }
})
</script>
