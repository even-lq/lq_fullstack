function slide(wrap) {
  // 手势触发顺序：touchstart -> move -> end -> click
  let startX = 0, startY = 0;
  wrap.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
    // 当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发。
    event.preventDefault();
  })

  wrap.addEventListener('touchmove', (event) => {
    let diffx = event.touches[0].clientX - startX;
    let diffy = event.touches[0].clientY - startY;
    // console.log(diffx);
    // console.log(diffy);
    if (Math.abs(diffx) > Math.abs(diffy)) {
      if (diffx ** 2 + diffy ** 2 < 200) return;
      // if ((Math.abs(diffx) < 100) || (diffx ** 2 + diffy ** 2 > 100)) return;
      if (diffx > 0) {
        console.log('右滑动');
      } else {
        console.log('左滑动');
      }
    }
  })
  wrap.addEventListener('touchend', () => {
    console.log('我是end');
  })
  wrap.addEventListener('click', () => {
    console.log('click');
  })
}