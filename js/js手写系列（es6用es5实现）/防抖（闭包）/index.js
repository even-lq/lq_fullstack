// 在一定的时间内，如果持续重复发送请求，则减少发送的次数
function debounce(fn, delay) {
  let timer = null
  return function () {
    // let arg = arguments
    // clearTimeout(timer)
    // timer = setTimeout(() => {
    //   console.log(this); // this没被改变，还是button
    //   fn(arg)
    // }, delay);

    // 不用箭头函数
    let context = this
    // console.log(context); // button的dom结点
    let arg = arguments
    clearTimeout(timer)
    timer = setTimeout(function(){
      console.log(this); // window，this被改变了
      // fn(arg)
      fn.apply(context, arg)
    }, delay);
  }
}