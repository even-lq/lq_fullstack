// enum Direction {
//   Up = 10,
//   Down,
//   Left,
//   Right,
// }
// console.log(Direction.Up)
// console.log(Direction[0])

// 上面的注释会被编译成：
// var Direction;
// (function (Direction) {
//   // JavaScript的赋值运算符的返回值是被赋予的值
//   // 即 Direction[0] = "Up"
//   Direction[(Direction["Up"] = 0)] = "Up";
//   Direction[(Direction["Down"] = 1)] = "Down";
//   Direction[(Direction["Left"] = 2)] = "Left";
//   Direction[(Direction["Right"] = 3)] = "Right";
// })(Direction || (Direction = {}));
// console.log(Direction.Up);
// console.log(Direction[0]);

var value = 'UP';
if (value === "UP" /* Up */) {
    console.log('go up!');
}
