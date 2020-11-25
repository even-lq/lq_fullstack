### commonJS

1. exports抛出一个对象，他的快捷方式是module.exports

   `exports.hello = 'world'`  

   { hello: 'world' }

2. 模块抛出

   ```js
    module.exports = function minus(a, b) {
      return a - b
    }
   ```

   [Function: minus]   注意与exports的区别

3. exports导出的应用和require是同一个引用
4. npm node.js包管理工具
5. node.js 内置模块

