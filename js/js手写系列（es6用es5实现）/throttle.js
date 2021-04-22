function throttle(fn, delay) {
  let pre = Date.now();

  return function () {
    let now = Date.now();
    let context = this;
    let arg = [...arguments];

    if (now - pre >= delay) {
      console.log(context);
      fn.apply(context, arg);
      pre = Date.now();
    }
  };
}
