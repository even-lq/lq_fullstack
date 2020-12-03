// 箭头函数无this
let foo = {
  value: 1,
  getValue: () => console.log(this.value) // 没有花括号自动return
  // 打印undefined
}
let foo2 = {
  value: 1,
  getValue: function() {
    console.log(this.value);
  }
}
foo.getValue() // undefined: 箭头函数没有this不能像绑定函数的this那样绑定箭头函数的this
               // 此时的this指向全局(window)下的value，而全局下没有value，自动创建一个没有赋值的value
foo2.getValue() // 1
let test = foo2.getValue
test() // undefined

let foo3 = {
  value: 1,
  getValue: () => console.log(foo3.value) 
}
foo3.getValue() // 1
