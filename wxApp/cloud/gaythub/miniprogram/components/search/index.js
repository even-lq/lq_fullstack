// components/search/index.js
Component({
  /**
   * 组件的属性列表
   */
  field: true, // 字段
  classes: ['cancel-class'], // 属性
  properties: {
    focus: Boolean,
    error: Boolean,
    disabled: Boolean,
    readonly: Boolean, // 只读
    inputAlign: String, // input框里面文字的居中方式
    customClass: String,// 定制样式
    showAction: Boolean,// 显示动作
    useActionSlot: Boolean,// 业务相关
    placeholder: String,
    placeholderStyle: String,
    background: {
      type: String,
      value: '#f2f2f2'
    },
    maxlength: {
      type: Number,
      value: -1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange: function onChange(event) {
      this.setData({
        value: event.detail
      });
      this.$emit('change', event.detail);
    },
    onCancel: function onCancel() {
      this.setData({
        value: ''
      });
      this.$emit('cancel');
      this.$emit('change', '');
    },
    onSearch: function onSearch() {
      this.$emit('search', this.data.value);
    },
    onFocus: function onFocus() {
      this.$emit('focus');
    },
    onBlur: function onBlur() {
      this.$emit('blur');
    }
  }
})
