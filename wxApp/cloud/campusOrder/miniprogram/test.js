// var a = '64px'
// console.log(a.split('px')[0]);

var b = 0
var len = 2
// b = b >= len ? len : ++b 
// var arr = [1, 2]
// console.log(arr[b]);
b = ++b >= len ? len : b
console.log(b);

// var a = {}
// var b = Object.create({})
// console.log(a.__proto__ === Object.prototype);
// console.log(b.__proto__ === Object.prototype);




// 滑到底之后不准滑
  // var isTabEnd = data.tab.rightMargin[rightIndex]
  // if (!isTabEnd) {
  //   tabLine.setStyle({
  //     background: 'linear-gradient(to right,' + data.tab.tabColor + ',' + data.tab.tabColor + ')',
  //     transform: 'translateX(' + (-data.tab.rightMargin[rightIndex - 1]) + 'rpx) translateZ(0)',
  //     transition: ''
  //   })
  //   return
  // }