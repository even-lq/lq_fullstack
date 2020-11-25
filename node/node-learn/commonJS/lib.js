// var playerAction = process.argv[process.argv.length - 1]
// // console.log(playerAction);

// // 电脑随机生成石头剪刀布
// var random = Math.random() * 3
// if (random < 1) {
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

// exports模块化抛出一个对象
// exports.hello = 'world'
// exports.add = function(a, b) {
//   return a + b
// }
// 模块抛出方法
// module.exports = function minus(a, b) {
//   return a - b
// }

setTimeout(() => {
  console.log(exports);
}, 1000);

