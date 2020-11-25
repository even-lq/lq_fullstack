// var playerAction = process.argv[process.argv.length - 1]
const game = require('./lib')

// const result = game(playerAction)
// console.log(result);
// 扩展模块逻辑
let count = 0
// 获取进程的标准输入(维持当前进程的执行)
process.stdin.on('data', e => {
  // trim去除空格
  const playerAction = e.toString().trim()
  const result = game(playerAction)
  console.log(result);
  if (result == -1) {
    count ++
  }
  if (count === 3) {
    console.log('你太厉害了，我不跟你玩了');
    process.exit()
  }
})