// 事件中心
// 订阅 => 发布
class EventEmitter {
  constructor () {
    // 存储事件
    this.events = this.events || new Map()
  }
  // 监听事件
  addListener(type, fn) {
    if (!this.events.get(type)) {
      // 未发布：请求订阅
      this.events.set(type, fn)
    }
  }

  // 发布事件
  emit (type) {
    // map:获取key为type的值
    let handle = this.events.get(type)
    handle.apply(this, [...arguments].slice(1))
  }
}


let emitter = new EventEmitter()

// 订阅者收到消息
emitter.addListener('ages', age => {
  console.log(age);
})

// 发布者发布
emitter.emit('ages', 18)