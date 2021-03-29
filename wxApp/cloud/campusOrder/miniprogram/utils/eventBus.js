class EventBus {
  constructor() {
    this.events = this.events || new Map()
  }
  on (type, fn) {
    if (!this.events.get(type)) {
      this.events.set(type, fn)
    }
  }
  emit (type) {
    let handle = this.events.get(type)
    handle.apply(this, [...arguments].slice(1))
  }
}
let eventBus = new EventBus()
module.exports = {
  eventBus,
}