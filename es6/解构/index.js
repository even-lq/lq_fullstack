// let a = 1
// let b = 2
// let c = 3

// let [a, b, c] = [1, 2, 3]
// let [a, [b, c]] = [1, [2, 3]]
// let [, , c] = [1, 2, 3]
// let [a, b, ...c] = [1, 2, 3, 4, 5, 6, 7]
// let [a, b, ...c] = [1] // []
// let [a] = 1 // 该解构不能迭代 

// console.log(c);

// set
// let arr = [1, 2, 2, 4, 6, 3, 5, 4]
// let newArr = new Set(arr)
// console.log(newArr); // set去重，返回set对象


// let [x, y, z] = {a: 'a', b: 'b', c: 'c'} // 无法解构
// set可以解构
// let [x, y, z] = new Set(['a', 'b', 'c'])
// console.log(x);


// let [foo = true] = [] // 解构设置默认值
// // let [foo = true] = [false] 
// console.log(foo);

// let [x, y = 'b'] = ['a', undefined] 
// console.log(y); // 不赋值就代表undefined，所以打印的还是b


// let [x, y = 'b'] = ['a', null]
// console.log(y); // null

// let {x, y} = {x: 'aaa', y: 'bbb'} // 对象解构
// console.log(x);

// let { y, x } = { x: 'aaa', y: 'bbb' } // 对象解构：顺序无关，根据key决定
// console.log(x);


// let { log, sin, cos, abs} = Math // 解构实现封装
// console.log(abs(-2));
// const {log} = console
// log(123)


// let {foo} = {foo: 'aaa', bar: 'bbb'}
// console.log(foo); // aaa
// let { foo:baz } = { foo: 'aaa', bar: 'bbb' }
// console.log(baz); // aaa 无法打印foo =号才是默认值


// 解构嵌套
// let obj = {
//   p: ['hello', { y: 'world'}]
// }
// let { p: [x, { y }] } = obj
// console.log(x);


const [a, b, c, d, e] = 'hello' // 字符串解构
console.log(c);