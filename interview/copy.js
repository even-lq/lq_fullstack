// 浅拷贝：拷贝的值会受拷贝来源的值的影响
// 深拷贝：克隆

// 浅拷贝
// let a = {
//   age: 1
// }
// let b = a // 指针复制
// a.age = 2
// console.log(b.age);
// a = {
//   age: 2
// }
// console.log(b.age);



// 深拷贝
// 1. JSON方法（缺点：1. 拷贝的function（不能序列化函数）,undefined,symbol会丢失 2. 不能解决循环引用的对象的问题）
// 2. Object.assign方法（前提：要拷贝的对象中无引用类型）
// 3. 对象解构（前提：要拷贝的对象中无引用类型）
// let a = {
//   age: 1,
//   job: undefined
// }
// let b = JSON.parse(JSON.stringify(a)) // JSON.parse():JSON字符串转JSON对象 JSON.stringify(a):把对象转为JSON字符串
// a.age = 2
// a.job = 'coder'
// console.log(b.age);
// console.log(b);
// console.log(a);


// let a = {
//   age: 1
// }
// let b = Object.assign({}, a) // Object.assign({}, a) 把a的属性值全部（此时只有基本数据类型，可实现深拷贝）拼接到了一个新对象中，再把这个新对象赋值给b
// a.age = 2
// console.log(b.age);



// let c = {
//   age: 1
// }
// let d = {...c} // 解构出来的属性放到一个新对象中{}
// c.age = 2
// console.log(d.age);



// 浅拷贝
// 1. Object.assign方法（前提：要拷贝的对象有引用类型）
// 2. 对象解构（前提：要拷贝的对象有引用类型）：实现方法与Object.assign相同
// let a = {
//   age: 1,
//   info: {
//     name: 'lq'
//   }
// }
// let b = Object.assign({}, a) // b中的原始类型是深拷贝，而引用类型是浅拷贝
// a.age = 2
// a.info.name = '李庆'
// console.log(b.age); // 1
// console.log(b.info.name); // '李庆'



// JSON.parse(JSON.stringify())
// let test = {
//   age: undefined,
//   sex: Symbol('man'),
//   jobs: function() {},
//   name: 'wn'
// }
// let o =JSON.parse(JSON.stringify(test))
// console.log(o);

// lodash深拷贝方法
 

