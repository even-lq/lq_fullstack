// 石头剪刀布
// process.argv 属性会返回一个数组，其中包含当 Node.js 进程被启动时传入的命令行参数。
// 第一个元素是 process.execPath。 如果需要访问 argv[0] 的原始值，则参见 process.argv0。
// 第二个元素是正被执行的 JavaScript 文件的路径。 
// 其余的元素是任何额外的命令行参数。
// console.log(process.argv);

// 获取命令行输入的参数
// var playerAction = process.argv[process.argv.length - 1]
// // console.log(playerAction);

// // 电脑随机生成石头剪刀布
// var random = Math.random() * 3
// if(random < 1) {
//   var computerAction = 'rock'
// } else if (random > 2) {
//   var computerAction = 'scissor'
// } else {
//   var computerAction = 'paper'
// }

// // 进行比较
// if (computerAction === playerAction) {
//   console.log('平局');
// } else if ((computerAction === 'rock' && playerAction === 'paper') || (computerAction === 'scissor' && playerAction === 'rock') || (computerAction === 'paper' && playerAction === 'scissor')) {
//   console.log('你赢了');
// } else {
//   console.log('你输了');
// }


// 用类来实现
var playerAction = process.argv[process.argv.length - 1]
function Game(playerAction) {
  this.playerAction = playerAction;
  this.random = Math.random() * 3;
  this.computerAction = ''
  this.initEvent()
}
Game.prototype.initEvent = function () {
  if (this.random < 1) {
    this.computerAction = 'rock'
  } else if (this.random > 2) {
    this.computerAction = 'scissor'
  } else {
    this.computerAction = 'paper'
  }

  if (this.computerAction === this.playerAction) {
    console.log('平局');
  } else if ((this.computerAction === 'rock' && this.playerAction === 'paper') || (this.computerAction === 'scissor' && this.playerAction === 'rock') || (this.computerAction === 'paper' && this.playerAction === 'scissor')) {
    console.log('你赢了');
  } else {
    console.log('你输了');
  }
}
new Game(playerAction)