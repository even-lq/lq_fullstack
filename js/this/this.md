### this

1. 箭头函数除了简化function代码，还具有this词法行为

   用当前的词法作用域覆盖了 this 本来的值

2. ```js
   function foo(num) {
   console.log( "foo: " + num );
   // 记录 foo 被调用的次数
   // 注意，在当前的调用方式下（参见下方代码），this 确实指向 foo
   this.count++;
   }
   foo.count = 0;
   var i;
   for (i=0; i<10; i++) {
   if (i > 5) {
   // 使用 call(..) 可以确保 this 指向函数对象 foo 本身
   foo.call( foo, i );
   }
   }
   // foo: 6
   // foo: 7
   // foo: 8
   // foo: 9
   // foo 被调用了多少次？
   console.log( foo.count ); // 4
   ```

3. this 是在**运行时进行绑定的**，并不是在编写时绑定，它的**上下文**取决于函数**调用时**的各种条件。 this 的绑定和函数声明的位置没有任何关系，只取决于**函数的调用方式**。

4. this存储位置：函数被调用时的执行上下文（活动记录）

   这个记录会包含函数在哪里被调用（调用栈）、函数的调用方法、传入的参数等信息。 this 就是记录的其中一个属性，会在函数执行的过程中用到。

#### 1. 调用位置