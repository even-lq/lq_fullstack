### JS

#### 数据类型

1. 原始类型：boolean null undefined number string symbol

2. null是对象吗？  是 `console.log(typeof (null)); // object`

   因为000代表对象，而null的二进制都是0

3. 原始类型为什么具有属性和方法？`console.log(“hello”.length); // 5`

   包装类，定义的其实是一个字符串对象

4. number 精度丢失 `0.1 + 0.2 = 0.300000004`

   解决办法：在相加前，把两个值都\*10  得出结果再/10

5. 原始类型和对象类型的差别

   原始类型储存的是值，对象类型存的是地址（指针）

6.  typeof能正确判断的类型是

   原始类型（null除外）

   instanceof判断引用类型（判断某个对象是不是令一个对象的实例），其原理是通过原型链来查找。

   让instanceof既能判断原始类型和引用类型的方法：

   `[Symbol.hasInstance]`

7. 类型转换

   - 转为boolean
   - 转为number
   - 转为string
   - 对象转原始值
     - 对象在类型转换时会调用内置的 [[ToPrimitive]]
     - 如果是基本类型，则不转换
     - 调用 x.valueOf()，如果转为基本类型，则返回值
     - 否则调用jx.toString()，如果转为基本类型，则返回值
     - 否则报错

8. 四则运算

   \+：只认识数字和字符串，隐式类型转换

   1. 运算中其中一方为字符串，另一方一定会转成字符串

   2. 如果双方都不是数字或者字符串，那就将它们转换成数字或字符串

      （true = 1，false = 0）

   除加法外的运算：只要其中一方为数字，另一方一定会转为数字进行运算

9.  == 和 ===  的区别？

10. 什么是闭包？

11. 深浅拷贝

    深拷贝：[JSON.parse(JSON.stringify(obj))](https://www.jianshu.com/p/b084dfaad501) 优缺点

