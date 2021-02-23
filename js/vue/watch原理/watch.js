// 能独立监听某个数据的变化
// 提供可执行函数的场所

class watcher {
  constructor (opts) {
    this.$data = this.getBaseType(opts.data) === 'Object' ? opts.data : {}
    
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
      get() {
        return this.$data[_key]
      },
      set(newVal) {
        const oldVal = this.$data[_key]
        if (newVal === oldVal) return newVal
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

    }
  }
})

vm.a = 1