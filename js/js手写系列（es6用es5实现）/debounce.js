function debounce(fn, delay) {
  let timer = null;
  return function () {
    let context = this;
    let arg = [...arguments];
    clearTimeout(timer)
    timer = setTimeout(() => {
      console.log(this);
      fn(arg)
    }, delay);

    // timer = setTimeout(function() {
    //   fn.apply(context, arg)
    // }, delay);
  }
}