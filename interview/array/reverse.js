// 可能被修复了

// Google Chrome中正在发生一些看似奇怪的事情：
var f = [].reverse;
undefined
f() == window;
true
// 在Node.js上, 我得到了不同的结果：

var f = [].reverse;
undefined
f() == global;
// TypeError: Array.prototype.reverse called on null or undefined
// 为什么会这样？是否与范围有关？

// [].reverse是一个对此进行操作的函数.
// 例如, 当调用[1, 2].reverse()时, 这就是[1, 2]数组, 它返回[2, 1].
// 但是, 如果只调用f(), 则调用没有上下文的函数.在浏览器中, 这意味着窗口的默认上下文被传递(除非您处于严格模式), 并且在服务器上, 您会收到一个错误, 基本上会告诉您这是未定义的.
// 尝试f.call([1, 2])