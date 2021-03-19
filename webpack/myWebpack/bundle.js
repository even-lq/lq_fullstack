const fs = require('fs');
const path = require('path')
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default // 为什么要default？
const babel = require('@babel/core')

const getModuleInfo = (file) => {
  const body = fs.readFileSync(file, 'utf-8'); // 异步读取主模块内容（也就是入口文件）
  // (解析的对象, options)
  const ast = parser.parse(body, {
    sourceType: 'module' // 表示我们要解析的是ES模块
  })

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

  // 主模块es6 -> es5 解构返回的执行结果对象：严格模式下ES5代码
  const { code } = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env'] // es6转es5的模块类型(严格模式下的JS)
  })


  // 整合文件，依赖，和转换后的代码
  const moduleInfo = { file, deps, code }
  return moduleInfo


  // console.log(ast.program);
  // console.log(deps);
  console.log(code);
}

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
 
  console.log(depsGraph); // '路径': { code, deps }
  return depsGraph
}

// 处理 require exports
const bundle = (file) => {
  const depsGraph = JSON.stringify(parseModules(file))
  
  // code里面的require其实就是absRequire 返回闭包
  return `(function(graph) {
    function require(file) {
      function absRequire(relPatrh) {
        return require(graph[file].deps[relPatrh]) 
      }

      var exports = {};

      (function (require, exports, code) {
        eval(code) 
      })(absRequire, exports, graph[file].code)

      return exports
    }

    require('${file}')
  })(${depsGraph})`
}


const content = bundle('./src/index.js')
console.log(content);

fs.mkdirSync('./dist') // 同步地创建目录
fs.writeFileSync('./dist/app.js', content)
// parseModules('./src/index.js')
// getModuleInfo('./src/index.js')
// console.log(path.join('./src', './add.js'));
// console.log(path.dirname('./src/index.js'));
// console.log('./src\\minus'.split(path.sep).join('/'));
// console.log(path.sep);


// return `(function (graph) {
//   function require(file) {
//     function absRequire(relPatrh) {
//       return require(graph[file].deps[relPatrh])
//     }
//     var exports = {};
//     (function (require, exports, code) {
//       eval(code)
//     })(absRequire, exports， graph[file].code)
//     return exports
//     require('${file}')
//   }) (${ depsGraph })`