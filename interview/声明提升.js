var name = 'Word!';

(function () {
  if (typeof name === 'undefined') {
    var name = 'Jack'
    console.log('Goodbye' + name);
  } else {
    console.log('Hello' + name);
  }
})();
// 当js代码执行的时候会产生执行环境，执行环境分为全局执行环境和函数体执行环境  
// 我们在执行环境的变量声明会提升到当前执行环境的顶部

// 如果我们在函数声明的前面调用函数，会发现函数执行成功，这是因为函数声明会整体提升
// 至当前执行环境的顶部

// 变量提升是js将声明移动至作用域的顶部
// 'GoodbyeJack'



