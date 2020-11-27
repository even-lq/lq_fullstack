const fs = require('fs');
const { exec } = require('child_process') // 子进程
const http = require('http');

// 启动一个http服务器
const server = http.createServer((req, res) => {
 // 请求响应
 // 不指定请求，所有请求都响应祝福穿hello world
 //  res.end('hello world')
  if (req.url === '/') {
    const files = [];
    // 同步读取目录，返回目录中文件的名称
    fs.readdirSync('./').forEach(url => {
      files.push(`<a href="/${url}">${url}</a>`)
    })
    // 响应内容
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<head><meta charset="utf-8"/></head>');
    res.end(files.join('</br>'), 'utf-8');
  } else {
    // 静态服务器：live-server的工作流程
    // 如果路径存在，则返回 true，否则返回 false。
    console.log(req.url);
    const exist = fs.existsSync('.' + req.url)
    if (!exist) {
      res.statusCode = 404;
      res.end('404')
      return;
    }
    fs.readFile('.' + req.url, (err, file) => {
      if (!err) {
        const path = require('path');
        const extname = path.extname('.' + req.url); // 获取后缀名
        console.log(extname);
        const map = {
          '.js': 'application/javascript;charset=utf-8',
          '.md': 'text/plain;charset=utf-8'
        }
        res.setHeader('Content-Type', `${map[extname]}`)
        // res.writeHead(200, { 'Content-Type': 'application/json' });
        // res.write('<head><meta charset="utf-8"/></head>');
        res.end(file);
      }
    })
  }
})
// 服务器监听连接
server.listen(8080, () => {
  const url = 'http://127.0.0.1:8080'
  if (process.platform === 'darwin') {
    // exec 衍生 shell，然后在 shell 中执行 命令，并缓冲任何产生的输出。
    exec(`open ${url}`)
  } else {
    exec(`start ${url}`)
  }
})

