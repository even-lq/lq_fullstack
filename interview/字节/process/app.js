const http = require('http')

// 单线程服务
// http.createServer((req, res) => {
//   // 响应头，响应码，响应格式
//   res.writeHead(200, {
//     'Content-Type': 'text/plain'
//   })
//   // 响应体
//   res.end('hello world')

// }).listen(3000, () => {
//   console.log('listen 3000');

// })


// 利用多个CPU，多进程服务
module.exports = http.createServer((req, res) => {
  // 响应头，响应码，响应格式
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  // 响应体
  res.end('hello world')

}).listen(3000, () => {
  console.log('listen 3000');

})