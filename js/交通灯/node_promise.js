const fs = require('fs')
let readFile = (url) => new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   fs.readFile('./index.html', 'utf8', (err, file) => {
  //     resolve(file);
  //   })
  // }, 2000);
  fs.readFile(url, 'utf8', (err, file) => {
    if (err) {
      reject();
    } else {
      resolve(file);
    }
  })
})
// 封装
readFile('./index.js').then(res => console.log(res))
// 回调嵌套
readFile('./index.js')
  .then(res => {
    console.log(res)
    return readFile('./index.html')
  })
  .then(res => {
    console.log(res)
  })