for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}


for (var i = 1; i <= 5; i++) {
  (function () {
    setTimeout(function timer() {
      console.log(i);
    }, i * 1000);
  })();
}


for (var i = 1; i <= 5; i++) {
  (function () {
    var j = i;
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })();
}


for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}
// IIFE形成的新作用域非空（形参j，实参i）
// 所以timer()函数保有对新作用域的闭包，所以可以引用变量j

// 在迭代内使用 IIFE 会为每个迭代都生成一个新的作用域，使得延迟函数的回调可以将新的
// 作用域封闭在每个迭代内部，每个迭代中都会含有一个具有正确值的变量供我们访问。


for (var i = 1; i <= 5; i++) {
  let j = i; // 是的，闭包的块作用域！
  setTimeout(function timer() {
    console.log(j);
  }, j * 1000);
}
// for是在全局作用域中的，var i也是
// timer被传入了定时器中，timer保有对全局作用域的闭包，所以要等待全局作用域下的for循环完毕后才能执行回调函数
// 而timer回调函数打印的i就是全局作用域的var i，只有一份，循环后是6，所以打印五次6

// 但是let给每一次迭代都创建了一个非空作用域：let j，该新作用域就是一个主线程
// 根据闭包原理，timer可以访问到定义时的词法作用域的let j
// 而定时器在每个主线程执行完毕后执行，所以会按顺序打印1，2，3，4，5