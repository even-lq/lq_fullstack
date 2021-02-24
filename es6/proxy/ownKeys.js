let target = {
  _bar: 'foo',
  _prop:'bar',
  prop: 'baz'
}

let handler = {
  ownKeys (target) {
    // ownKeys返回目标对象所有自身的属性的属性名
    // Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法就能在Reflect对象上找到对应的方法

    // 拦截下划线的属性

    return Reflect.ownKeys(target).filter(key => key[0] !== '_')
  }
}

let p = new Proxy(target, handler)
console.log(p);
for (let key of Object.keys(p)) {
  console.log(target[key]);
}
