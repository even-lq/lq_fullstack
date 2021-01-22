const fs = require('fs');

fs.readFile('./例题(函数式编程)：简化方法.js', 'utf-8', (err, content) => {
  console.log(content);
})

let arr = [1, 2, 3]
arr.forEach((item, i) => {
  console.log(item);
});

// 手写回调
function readFile(cb) {
  setTimeout(() => {
    cb('hello world')
  }, 2000);
}

readFile((c) => {
  console.log(c);
}) 