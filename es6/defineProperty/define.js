let obj = {}
Object.defineProperty(obj, 'num', {
  value: 1,
  writable: false, // 是否可更改
  enumerable: true,// 是否可遍历
  configurable: false // 是否可配置
})

obj.num = 2
delete obj.num
console.log(obj.num);