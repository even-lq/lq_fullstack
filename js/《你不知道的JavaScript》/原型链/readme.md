### 原型链

1. 在原型上再加一个原型，把原型连成链，访问顺序为逐级访问

2. 原型链的增删改查

   查：逐级查询

   删：只能通过原型自己删除

   改：通过原型自己来修改（但是实例对象可以更改原型的引用类型属性）

   增：通过原型自己来增加（但是实例对象可以增加原型的引用类型属性）

3. Object.create() 创建一个对象，可以把对象当作原型传进去，凭空“继承”原型

   ```js
   let a ={ name: 'wn'}
   Object.create(a) // {}
   {}.__proto__ = a
   ```

4. 所有对象最终都会继承 Object.prototype ?  答案是错误

   ```js
   var obj = Object.create(null)
   // 打印obj，boj是没有原型的空对象 
   // [Object: null prototype] {}
   ```

string/number/boolean/undefined/null