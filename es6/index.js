// console.log(foo); // undefined：声明提升
// var foo = 'bar'
console.log(foo); // 报错：let 不会声明提升
let foo = 'bar'

// const foo = 'bar'
// foo = 123
// console.log(foo); // 报错