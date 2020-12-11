// 在一定的时间内，如果持续重复发送请求，则减少发送的次数
function debounce(fn, delay) {
  let timer = null
  return function () {
    // let arg = arguments
    // clearTimeout(timer)
    // timer = setTimeout(() => {
    //   fn(arg)
    // }, delay);
    // 不用箭头函数
    let context = this
    let arg = arguments
    clearTimeout(timer)
    timer = setTimeout(function(){
      // fn(arg)
      fn.apply(context, arg)
    }, delay);
  }
}