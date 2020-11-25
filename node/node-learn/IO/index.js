// glob 可以获取当前文件目录下的所有文件
const glob = require('glob')

// 阻塞式的I/O调用方式
// var result = null
// console.time('glob')
// // __dirname目录名  /**/* 目录通配符
// result = glob.sync(__dirname + '/**/*')
// console.timeEnd('glob')
// console.log(result);
// 调用时间： 9.084ms


// 非阻塞式的I/O调用方式
var result = null
console.time('glob')
// __dirname目录名  /**/* 目录通配符
glob(__dirname + '/**/*', function(err, res) {
  result = res
  // console.log(result);
  console.log('go result');
})
console.timeEnd('glob')
console.log(1 + 1);