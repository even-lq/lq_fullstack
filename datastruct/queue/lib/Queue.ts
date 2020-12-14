interface QueueObj {
  // key类型约束 value类型任意
  [propName: number]: any
}
export default class Queue {
  // ts类的变量要声明
  private count: number; // 元素的数量
  private lowestCount: number; // 最小数量
  private items: QueueObj; // json Object
  
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // 参数类型任意
  enqueue(item: any) {
    this.items[this.count] = item
    this.count++;
  }

  // 返回队首元素
  peek() {
    if(this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.count = 0;
    this.items = {}
  } 

  isEmpty() {
    return this.count - this.lowestCount == 0
  }

  toString() {
    if(this.isEmpty()) {
      return ""
    }
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`
    }
    return objString
  }

  dequeue() {
    // 先进先出 FIFO
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount]
    this.lowestCount++;
    return result;
  }
}