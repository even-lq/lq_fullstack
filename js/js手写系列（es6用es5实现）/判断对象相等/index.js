function eq(a, b, aStack, bStack) {
  // +0 -0
  if (a === b) return a !== 0 || 1 / a === 1 / b
  // NaN
  if (a !== a) return b !== b
  // null
  if (a === null || b === null) {
    return false
  }
  // let a = Number(NaN)
  // let b = Number(NaN)
  // + a === +b false
  if (+a !== +a) return +b !== +b
  // 排除非对象
  let type = typeof (a)
  if (type !== 'function' && type !== 'object' && typeof (b) !== 'object') return false
  // b不判断function的原因是下面的判断会false

  // 复杂对象
  // 嵌套对象， 'lq' === new String('wn') 变成 true
  return deepEq(a, b, aStack, bStack)
}

// var a = [1]
// var b = [1]
// // console.log(eq(a, b)); // true
// console.log(eq(0, 0)); //t
// console.log(eq(0, -0)); //f

// let toString = Object.prototype.toString
// toString.call('wn')
// toString.call(new String('wn'))

// console.log('wn' + '' === new String('wn') + '');
// console.log(toString.call('wn') === toString.call(new String('wn')));

let toString = Object.prototype.toString
function isFunction(obj) {
  return toString.call(obj) === '[object Function]'
}
function deepEq(a, b, aStack, bStack) {
  // ab的toString的'[object xxx]'不相等
  let className = toString.call(a)
  if (className !== toString.call(b)) {
    // 说明不是同一种类型
    return false
  }

  // '[object xxx]'
  switch (className) {
    case '[object RegExp]':
    case '[object String]':
      return '' + a === '' + b;
    case '[object Number]':
      // Number(NaN)
      if (+a !== +a) return +b !== +b
      // +0 === Number(0) true, 普通数字类型和数字对象
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case '[object Date]':
    case '[object Boolean]':
      return +a === +b;
  }

  // 构造函数的实例
  let areArrays = className === '[object Array]'
  if (!areArrays) {
    // 不是数组
    if (typeof a !== 'object' || typeof b !== 'object') return false

    // a与b的原型上具有constructor属性，并且他们不相等，并且还不是函数
    let aCtor = a.__proto__.constructor, bCtor = b.const.__proto__.constructor
    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && ('constructor' in a && 'constructor' in b)) {
      return false
    }
  }

  aStack = aStack || []
  bStack = bStack || []
  let length = aStack.length
  // 检查是否有循环引用的部分
  while (length--) {
    if (aStack[length] === a) {
      return bStack[length] === b
    }
  }
  aStack.push(a)
  bStack.push(b)

  // 数组
  if (areArrays) {
    length = a.length
    if (length !== b.length) return false
    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false
    }
  } else {
    // 同属于一个构造函数的对象的情况下
    let keys = Object.keys(a), key;
    length = keys.length
    if (Object.keys(b).length !== Object.keys(a).length) return false

    while (length--) {
      key = keys[length]
      // ab的键值是否相等，是的话继续纵深判断
      if (!(b.hasOwnProperty(key) && eq(a[key], b[key], aStack, bStack))) return false
    }
  }
  aStack.pop()
  bStack.pop()
  return true
}
function Person(name) {
  this.name = name
}
function Animal(name) {
  this.name = name
}
let person = new Person('t')
let animal = new Animal('t')
console.log(eq(NaN, Number(NaN)));
console.log(eq(1, Number(1)));
console.log(eq(person, animal));

a = { foo: { b: { foo: { c: { foo: null } } } } }
b = { foo: { b: { foo: { c: { foo: null } } } } }
a.foo.b.foo.c.foo = a
b.foo.b.foo.c.foo = b

console.log(eq(a, b));
console.log(eq(null, null));