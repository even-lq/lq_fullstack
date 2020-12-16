// 让this指向的函数去到obj里面生效  
Function.prototype.myapply = function (obj, arg) {
  if (typeof this !== 'function') {
    throw new TypeError('type error')
  }
  // const args = arguments[1] 只传一个参数
  // const args = [...arguments].slice(1)[0]

  // 保证定义出来的变量或常量是唯一的
  const fn = Symbol('fn') // 防止fn被占用
  obj = obj || 'window'
  obj[fn] = this
  const result = obj[fn](...arg)
  delete obj[fn]

  return result
}


let c = {
  name: 'xx',
}
function a(e, r) {
  console.log(e + r);
  console.log(this.name);
}

a.myapply(c, [1, 2])