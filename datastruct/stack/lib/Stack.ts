export default class Stack {
  // 属性
  // items 按一定的方法去操作
  private items: any[];
  constructor() {
    // 构造函数初始化
    this.items = [] //items初始化为空
  }
  push(item: any) {
    this.items.push(item)
  }
  pop() {
    return this.items.pop()
  }
  // 返回栈顶元素
  peek() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length == 0
  }
  clear() {
    this.items = []
  }
  size(): number {
    return this.items.length
  }
  toString() {
    return this.items.toString()
  }
}