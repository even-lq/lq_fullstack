// let proxy = new Proxy({}, {
//   get(obj, prop) {
//     console.log('get');
//     return obj[prop]
//   },
//   set: function(obj, prop, value) {
//     console.log('set');
//     obj[prop] = value
//   }
// })

// proxy.time = 35
// console.log(proxy.time);

let handler = {
  // 隐藏对象的属性，不会被in运算符发现，拦截in运算符
  // target对象，key属性名
  has(target, key) {
    if (key[0] === '_') {
      // 有下划线的属性代表 私有
      return false
    }
    return key in target
  }
}

let target = {_prop: 'foo', prop: 'bar'}
let proxy = new Proxy(target, handler)
console.log('_prop' in proxy);