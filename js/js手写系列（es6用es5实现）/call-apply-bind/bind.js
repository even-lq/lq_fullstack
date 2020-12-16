
let c = {
  name: 'xx',
}
function a(e, r) {
  console.log(e + r);
  console.log(this.name);
}

// let res = a.bind(c, 4, 5)
// console.log(res);
// res()
// let newA = new res()
// console.log(newA);

/**
 * 
 * @think bind 1.返回的是一个函数
 *             2.返回的是一个可以new出实例的构造函数（可以添加属性） 
 */
// 让this指向的函数去到obj里面生效  
Function.prototype.mybind = function (obj) {
  if (typeof this !== 'function') {
    throw new TypeError('type error')
  }
  const args = [...arguments].slice(1)
  const self = this
  const nop = function() {}

  // 绑定函数
  const bound = function() {
    return self.apply(obj, args)
  }

  // 简单版本，在apply的返回结果外包一层函数
  return bound
}

let f = {
  name: 'ds',
}
function g(e, r) {
  console.log(e + r);
  console.log(this.name);
}

// g.bind(f, 4, 5)()


let obj = {
  name: 'lq'
}
function name(a, b) {
  this.sex = 'boy'
  console.log(this.name);
  console.log(a + b);
}

const bound = function() {
  return name.apply(obj, [1, 2])
}
// let b = new bound()
// console.log(b);



// 让this指向的函数去到obj里面生效  
Function.prototype.mybind2 = function (obj) {
  if (typeof this !== 'function') {
    throw new TypeError('type error')
  }
  const args = [...arguments].slice(1)
  const self = this
  const nop = function () {}

  // 绑定函数
  const bound = function (a, b) {
    return self.apply(
      this instanceof nop ? this : obj,
      args
    )
  }
  if (this.prototype) {
    nop.prototype = this.prototype
  }
  bound.prototype = new nop()
  return bound
}


let q = {
  name: 'lq'
}
function w(a, b) {
  this.sex = 'boy'
  console.log(this.name);
  console.log(a + b);
}

let res = w.mybind2(q, 2, 3)
let b = new res()
console.log(b);
// console.log(w.prototype);

