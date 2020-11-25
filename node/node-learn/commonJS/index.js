// console.log('start require');
// console.log(require('./lib.js'));
// console.log('end require');

// exports导出的应用和require是同一个引用
let lib = require('./lib.js')
console.log(lib);
lib.name = '蜗牛'