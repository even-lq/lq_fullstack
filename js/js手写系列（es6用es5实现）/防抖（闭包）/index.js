// 在一定的时间内，如果持续重复发送请求，则减少发送的次数
function debounce(fn, delay) {
  let timer = null;
  return function () {
    // let arg = arguments
    // clearTimeout(timer)
    // timer = setTimeout(() => {
    //   console.log(this); // this没被改变，还是button
    //   fn(arg)
    // }, delay);

    // 不用箭头函数
    let context = this;
    let arg = [...arguments]; // 获取参数e
    clearTimeout(timer);
    // 1. setTimeout会形成覆盖外层funtion的闭包
    // 2. 回调函数就是一个普通变量
    // 3. 回调函数作为普通变量，单独调用使用的就是默认绑定（无论回调传入的是对象方法，还是函数）
    // 由于箭头函数本身没有this，它只会从自己的作用域链的上一层继承this，所以setTimieout的回调函数的this指向外层function的this
    // 而外层function的this指向的就是btn

    // 如果setTimeout的回调是普通function(不是箭头)，那么因为它是普通变量
    // 当一个普通变量作为独立函数进行调用，其this应用的就是默认绑定
    timer = setTimeout(function () {
      // console.log(this); // window，this被改变了
      fn.apply(context, arg);
    }, delay);
  };
}
