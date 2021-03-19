## myWebpack

代码自动化构建工具

### 初始化

```js
npm init -y
```

### 打包流程

1. 读取入口文件里面的内容
2. 分析入口文件，会递归的读取模块所依赖的文件内容，生成AST语法树（抽象语法树）
3. 根据AST语法树，生成浏览器能够运行的代码

### 具体细节

1. 获取主模块内容
2. 分析模块
   - 如何把代码转成AST（@babel/parser解析）
3. 处理模块里面的内容
   - 遍历AST收集依赖（即收集所有import的文件：@babel/traverse）
4. 递归所有模块
   - es6转es5（@babel/core @babel/preset-env）
5. 注意两个关键字 require exports（浏览器还是无法识别）
6. 生成最终代码

### webpack被定义的过程

1. ES6读不懂import

   src下创建了两个数学函数，由index.js导入，再放到index.html中，结果报错

   为什么我们平时写不会报错？

   因为被webpack打过包了

   webpack => 读懂import => 生成AST => 生成浏览器能够运行的代码

2. 模拟webpack

   - bundle.js

     1. 读取主模块

        `fs.readFileSync(file, 'utf-8') // 异步读取主模块内容（也就是入口文件）`

     2. 分析模块（生成AST）

        ```js
        npm i @babel/parser
        
        // (解析的对象, options)
        const ast = parser.parse(body, {
            sourceType: 'module' // 表示我们要解析的是ES模块
        })
        console.log(ast);
        ```

3. 处理模块里面的内容

   - 遍历AST收集依赖（即收集所有import的文件：@babel/traverse）

     ```js
     npm install -save @babel/traverse
     
     // 依赖收集
     const deps = {}
     traverse(ast, {
         // node 类型 自带遍历
         ImportDeclaration({ node }) {
             const dirname = path.dirname(file) // 会返回 index.js 的目录名 ./src
             const adspath = './' + path.join(dirname, node.source.value + '.js') // ode.source.value => './add.js 返回src\add.js
             deps[node.source.value + '.js'] = adspath.split(path.sep).join('/') // path.sep获取路径分隔符 ['./src', 'minus'].join('/')
             // deps：{ './add.js': ' ./src/add.js', ' ./minus.js': ' ./src/minus.js' }
     
         }
     })
     ```

4. 递归所有模块

   - es6转es5 转换AST语法树（@babel/core @babel/preset-env）

     ```js
     npm i @babel/core @babel/preset-env
     
     // 主模块es6 -> es5 解构返回的执行结果对象：严格模式下ES5代码
     const { code } = babel.transformFromAst(ast, null, {
         presets: ['@babel/preset-env'] // es6转es5的模块类型(严格模式下的JS)
     })
     
     // 递归所有模块
     const parseModules = (file) => {
       const entry = getModuleInfo(file)
       const temp = [entry]
       const depsGraph = {}
     
       for (let i = 0; i < temp.length; i++) {
         const deps = temp[i].deps
         if (deps) {
           for (const key in deps) {
             if (deps.hasOwnProperty(key)) {
               temp.push(getModuleInfo(deps[key]))          
             }
           }
         }
       }
     
       // 格式化数据
       temp.forEach(moduleInfo => {
         depsGraph[moduleInfo.file] = {
           code: moduleInfo.code,
           deps: moduleInfo.deps
         }
       })
     
       console.log(depsGraph);
       return depsGraph
     }
     ```

5. 处理 require exports 

   不是node的require 而是require函数



