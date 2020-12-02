function light(time) {
  if (time > 4) return;
  setTimeout(() => {
    green();
    setTimeout(() => {
      yellow();
      setTimeout(() => {
        red()
        light(time + 1)
      }, 1000);
    }, 1000);
  }, 1000);
}