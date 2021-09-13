// enum Direction {
//   Up = 10,
//   Down,
//   Left,
//   Right,
// }
// console.log(Direction.Up)
// console.log(Direction[0])

// 常量枚举：直接转为结果，不会生成多余的代码
const enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}
const value = 'UP'
if (value === Direction.Up) {
  console.log('go up!')
}
