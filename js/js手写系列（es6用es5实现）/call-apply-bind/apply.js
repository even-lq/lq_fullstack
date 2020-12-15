// 让this指向的函数去到thisArg里面生效
Function.prototype.myapply = function (thisArg) {
  // 调用call方法的一定是函数
  if (typeof this !== 'function') {
    throw new TypeError('type error')
  }

  // 保证定义出来的变量或常量是唯一的
  const fn = Symbol('fn') // 防止fn被占用
  const args = [...arguments].slice(1)
  thisArg = thisArg || 'window'
  thisArg[fn] = this
  const result = thisArg[fn](...args)
  delete thisArg[fn]

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