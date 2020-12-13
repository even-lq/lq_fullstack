const http = require('http')
const fs = require('fs')

// 用node搭建web服务
var server = http.createServer(function (req, res) {
  // 换成req.url也可以
  if (res.url !== '/favicon.ico') {
    res.writeHead(200, { "Content-type": "text/html" })
    // __dirname获取当前文件所在目录的绝对路径
    const myreadstream = fs.createReadStream(__dirname + '/views/http_demo.html', 'utf-8')
    // res.end(往前端输出文字)
    // 往前端输出文件流
    myreadstream.pipe(res)
  }
})

// 以socket的形式来请求web
// 建立socket连接必须要html文件才可以
var io = require('socket.io')(server)
io.on('connection', function (socket) {
  console.info('一个socket连接成功了')
  socket.on('link_to_server', (msg) => {
    // 接收客户端的请求
    console.info(`我收到一个问题 ${msg}`)
    // 响应客户端
    socket.emit('link_to_client', '当然了')
  })
})
// 服务一直监听该端口
// 如果请求该端口则返回html（每个端口必请求favicon，所以排除）
server.listen(8888, () => {
  console.log('server is running...');
})