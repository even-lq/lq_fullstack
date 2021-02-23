class Math {
  @log
  add(a, b) {
    return a + b
  }
}
// let math = new Math()
// console.log(math.add(2, 4));

// 装饰器作用：附加打印功能，如果每个方法都写log会很麻烦，用装饰器比较方便
// math.add(2, 4)

function log(target, name, descriptor) {
  let oldValue = descriptor.value

  descriptor.value = function(...args) {
    console.log(`Calling ${name} with`, args);
    return oldValue.apply(this, args)
  }
  return descriptor
}

let math = new Math()
math.add(2, 4)