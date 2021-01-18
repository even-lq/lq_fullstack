
var MyQueue = function () {
  // this.stack = []
  this.stack1 = []
  this.stack2 = []
}


MyQueue.prototype.push = function (x) {
  // this.stack.push(x)
  this.stack1.push(x)
  this.stack2.splice(0, this.stack2.length);  
  for (let index = this.stack1.length - 1; index >= 0; index--) {
    this.stack2.push(this.stack1[index])
  }
  console.log(this.stack2);
}

MyQueue.prototype.pop = function () {
  this.stack1.shift()
  return this.stack2.pop()
  // return this.stack.shift()
}


MyQueue.prototype.peek = function () {
  return this.stack2[this.stack2.length - 1]
  // return this.stack[0]
}

MyQueue.prototype.empty = function () {
  return !this.stack2.length
}


const queue = new MyQueue();
queue.push(1);
queue.push(2);
// queue.push(3);
console.log(queue.peek());// 返回 1
console.log(queue.pop());// 返回 1
console.log(queue.empty());// 返回 false



