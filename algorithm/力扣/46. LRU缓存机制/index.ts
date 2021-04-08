class LRUCache {
  queue: number[] = []
  obj: {
    [key: string]: any,
    [key: number]: any
  }


  constructor(public capacity: number) {
    this.queue = []
    this.obj = {}
    let x = this.queue.shift()
  }

  get(key: number): number {
    if (this.obj[key] === undefined) return -1
    else {
      this.queue.splice(this.queue.indexOf(key), 1)
      this.queue.push(key)
      return this.obj[key]
    }
  }

  put(key: number, value: number): void {
    if (this.obj[key] === undefined) this.queue.push(key)
    // put 最新值是否改变位置？？？
    // else {
    //   this.queue.splice(this.queue.indexOf(key), 1)
    //   this.queue.push(key)
    // }
    if (this.queue.length > this.capacity) {
      delete this.obj[this.queue.shift()]
    }
    this.obj[key] = value
  }
}


let cache = new LRUCache(2)
cache.put(3, 4)
cache.put(2, 5)
cache.get(3)
cache.put(4, 5)
console.log(cache.obj);


