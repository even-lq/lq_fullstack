npm init -y

npm install express

npm install nodemon -g  实时用node命令执行js文件

npm i socket.io

用node搭建web服务

http://localhost:8888/socket.io/socket.io.js  其实是请求http_demo.html里面的

服务端推送消息的主要方式

1.socket.emit() ：向建立该连接的客户端广播

2.socket.broadcast.emit() ：向除去建立该连接的客户端的所有客户端广播

3.io.sockets.emit() ：向所有客户端广播，等同于上面两个的和 



io => 服务端与端口建立连接

```js
var io = require('socket.io')(server)
io.on('connection', function (socket) {})
```

socket.emit => 客户端发送

```js
var socket = io()
socket.emit('link_to_server',`....`)
```

socket.on => 服务端接收

io.emit => 服务端向所有客户端广播（同一端口的不同会话）

等同于io.sockets.emit()

```js
io.on('connection', function (socket) {
  socket.on('link_to_server', (msg) => {
    // 接收客户端的请求
    console.info(`我收到一个问题 ${msg}`)
    // 响应客户端
    io.emit('link_to_client', msg)
    // io.sockets.emit('link_to_client', msg)
    // socket.emit('test_link', '服务器发来了消息。')
    // socket.broadcast.emit('test_client_link', msg) 
  })
})
```

`socket.emit('test_link', '服务器发来了消息。')` 向建立该连接的客户端广播

`socket.broadcast.emit('test_client_link', msg) ` 向除去建立该连接的客户端的所有客户端广播

客户端对应不同请求

```js
socket.on('link_to_client', (msg) => {
    document.getElementById('infos').append(msg)
})

socket.on('test_link', (msg) => {
    console.info(msg);
})

socket.on('test_client_link', (msg) => {
    document.getElementById('infos').append(msg)
})
```

