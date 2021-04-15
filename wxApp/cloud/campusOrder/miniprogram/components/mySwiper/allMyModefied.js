// var moved = multiple * diffX // 移动的距离

// if (diffX < 0) {
  //   if (-moved >= (distance / 2)) {
  //     tabTranslateX = leftMargin[1]
  //     ins.selectComponent('.tab-line').setStyle({
  //       transition: transition(seconds),
  //       transform: translateXZ(tabTranslateX)
  //     })
  //   } else {
  //     // console.log('else', leftMargin[1]);
  //     tabTranslateX = tabTranslateX >= leftMargin[1] ? leftMargin[1] : leftMargin[0]
  //     ins.selectComponent('.tab-line').setStyle({
  //       transition: transition(seconds),
  //       transform: translateXZ(tabTranslateX)
  //     })
  //   }

  // }

  // if (diffX > 0) {
  //   if (moved >= (distance / 2)) {
  //     tabTranslateX = leftMargin[0]
  //     ins.selectComponent('.tab-line').setStyle({
  //       transition: transition(seconds),
  //       transform: translateXZ(tabTranslateX)
  //     })
  //   } else {
  //     tabTranslateX = tabTranslateX <= leftMargin[0] ? leftMargin[0] : leftMargin[1]
  //     ins.selectComponent('.tab-line').setStyle({
  //       transition: transition(seconds),
  //       transform: translateXZ(tabTranslateX)
  //     })
  //   }
  // }

// 获取分子
function transform(a, b) {
  let fenzi = parseInt(a.toFixed(2) * 100, 10); // 分子
  let fenmu = parseInt(b.toFixed(2) * 100, 10); // 分母
  let min = Math.min(fenzi, fenmu); // 较小的
  for (let i = min; i > 1; i--) {
    if (!(fenzi % i) && !(fenmu % i)) {
      fenzi = fenzi / i;
      fenmu = fenmu / i;
      min = Math.min(fenzi, fenmu);
    }
  }
  console.log(min);
  return `${fenzi}:${fenmu}`;
}
console.log(transform(150, 300));