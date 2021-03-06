# js执行引擎
  分为编译和执行两个步骤，编译交由编译器编译代码
# 编译器
# 作用域
- 查找变量的顺序
  从里往外找
  
- 词法作用域层级
  
  ```js
  // 词法作用域
  // 动态作用域
  var a = 'a';
  var c = 'c';
  function foo() {
      console.log(a);
  }
  function bar() {
      var a = 'a1'
      function baz() {
          console.log(c);
      }
      baz() // baz声明在bar中所以查找顺序是：先访问bar内部再访问全局
      foo()
  }
  bar(); // a 词法作用域生效：访问的变量与其调用位置无关，跟声明位置有关
  ```
  
  两大层级：函数{}，windows全局
  函数的{}是一个作用域，可以访问全局变量，而反过来在windows全局作用域中不可以访问function作用域里面的变量
  
  - 特例
    1. eval() 欺骗词法作用域
        将eval()里面的参数搬进eval()同级的词法作用域里面并生效
    2. with
        修改对象的属性，若修改的对象不存在该属性，则给该对象添加属性，并将该属性完全隔离成一个词法作用域。
        该全新的词法作用域将会泄露到windows（全局）
  
- 块级作用域
  不完全对：函数会给自己创建一个作用域，而其他结构不会
  如：for (var i = 0; i < 10; i++) 里面的i，在全局作用域可以打印（var i = 0的本质就是在全局作用域中创建的）
  var 使得if、for等内的变量在全局内创建，扰乱变量的作用域范围
  let 可以给if、for等创建块级作用域{},制约{}内变量的作用范围
  ```js
  var foo = true
  if (foo) {
    var a = 2
  }
  console.log(a) // 2
  // 如果改成let就无法访问，达到块级作用域的效果
  ```
  
- 变量重名：隐藏函数和变量
  - 具名函数：可以在函数和变量外面套一层函数，实现函数和变量在全局作用域的隐藏
  - 匿名函数：让函数和变量外面包裹一层自执行函数，实现函数和变量在全局作用域的隐藏