const cluster = require('cluster') // 多核 多进程

// 主CPU：不干活
if (cluster.isMaster) {
  // 查询CPU数 物理的cpu：require('os').cpus().length / 2
  // console.log(require('os').cpus().length);
  for (let i = 0; i < require('os').cpus().length / 2; i++) {
    // 衍生工作进程
    createWorker();    
  }

  function createWorker() {
    var worker = cluster.fork(); // 子进程
  }
} else {
  // 工作进程可以共享任何 TCP 连接。
  // 在本例子中，共享的是 HTTP 服务器。
  require('./app')
}