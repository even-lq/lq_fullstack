// 能独立监听某个数据的变化
// 提供可执行函数的场所

class watcher {
  constructor (opts) {
    this.$data = this.getBaseType(opts.data) === 'Object' ? opts.data : {}
    this.$watch = this.getBaseType(opts.watch) === 'Object' ? opts.watch : {}

    for (let key in opts.data) {
      this.setData(key)
    }
  }

  getBaseType(target) {
    const typeStr = Object.prototype.toString.call(target) // "[object Object]"
    // slice(begin, end)
    // 左闭右开，如果end是负数，则从倒数第end个开始截取(不包括)
    return typeStr.slice(8, -1)
  }

  setData(_key) {
    Object.defineProperty(this, _key, {
      // Object.defineProperty(this) 会把上下文指向当前对象 this.$data
      get() {
        return this.$data[_key]
      },
      set(newVal) {
        const oldVal = this.$data[_key]
        if (newVal === oldVal) return newVal
        this.$data[_key] = newVal
        // 调用opts里面的watch里面的函数
        this.$watch[_key] && this.getBaseType(this.$watch[_key]) === 'Function' && (
          // 第一个是新值，第二个是老值
          // a.call(b) 源码中a函数直接放到了b对象中，所以a的this就是b
          this.$watch[_key].call(this, newVal, oldVal)
        )

      }
    })

  }
}


let vm = new watcher({
  data: {
    a: 0,
    b: 'hello'
  },
  watch: {
    a(newVal, oldVal){
      console.log(newVal, oldVal);
    }
  }
})

vm.a = 1
// Object.defineProperty(this) 会把上下文指向当前对象 this.$data
// 所以vm就代表了vm.$data