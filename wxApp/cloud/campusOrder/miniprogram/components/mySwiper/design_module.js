var rpxWindowWidth = 0,
  pxWindowWidth = 0,
  len = 0, // swiperItem的长度
  leftMargin = [], // tab边距数组
  diffX = 0; // 移动的差值

startPoint = null, // 鼠标按下的实例
  startX = 0, // 起始的swiperX坐标
  translateX = 0, // 最终的swiperX坐标

  multiple = 0, // tab移动距离相对于swiper的倍数
  distance = 0, // tab移动的最大距离
  halfDistance = 0, // tab移动距离的中位
  tabTranslateX = null; // 最终的tabX坐标
starTabX = 0; // 起始的tabX坐标
index = 0, // 移动的tab下标
  part = 0, // 移动的tab部分（分子）
  seconds = ''; // transition的秒数
function myNew() {
  var obj = {}
  var constructor = Array.prototype.shift.call(arguments);
  obj.__proto__ = constructor.prototype

  var result = constructor.apply(obj, arguments)
  return Object.prototype.toString.call(result) === '[object Object]' ? result : obj
}
function SwiperTab(st) {
  this.instance = null; // 单例

  // 全局公共常量
  this.pxWindowWidth = this.pxWindowWidth || st.windowWidth; // px屏幕宽度
  this.rpxWindowWidth = this.rpxWindowWidth || this.pxWindowWidth * this.getRpx(pxWindowWidth); // rpx屏幕宽度
  this.len = this.len || st.len // swiperItem的个数
  this.leftMargin = this.leftMargin || st.leftMargin // 左边距数组

  // tab
  this.distance = this.leftMargin[1] - this.leftMargin[0]; // tab移动的最大距离
  this.halfDistance = this.distance / 2; // tab移动距离的中位
  this.multiple = (this.leftMargin[1] - this.leftMargin[0]) / this.rpxWindowWidth; // tab移动距离相对于swiper的倍数

}
SwiperTab.start = function (start, ins) {
  // var self = this;
  var self = this.instance;
  this.seconds = ''; // transition秒数

  // touch三模块公共变量
  this.startPoint = start.startPoint; // touch起始位置

  // swiper
  this.translateX = 0; // 最终的swiperX坐标
  this.startX = this.translateX; // 起始的swiperX坐标
  // tab
  this.tabTranslateX = null; // 最终的tabX坐标
  this.starTabX = this.tabTranslateX || this.leftMargin[0]; // 起始的tabX坐标

  ins.selectComponent('.mySwiperList').setStyle({
    transition: self.transition(self.seconds),
    transform: self.translateXZ(self.translateX)
  })
  ins.selectComponent('.tab-line').setStyle({
    transition: self.transition(self.seconds),
    transform: self.translateXZ(self.tabTranslateX)
  })
};
SwiperTab.move = function (move, ins) {
  this.index = 0; // 移动的tab下标
  this.part = 0; // 移动的tab部分（分子）

  var self = this.instance;
  var nowPoint = move.nowPoint;

  if (this.startPoint) {
    this.diffX = (nowPoint.pageX - this.startPoint.pageX) * this.getRpx(pxWindowWidth)
  }

  this.translateX = this.startX + this.diffX

  var tabItem = ins.selectAllComponents('.tab-item')
  var move = - this.multiple * this.diffX // 移动的距离
  var lastX = -this.rpxWindowWidth * (this.len - 1) // translateX的边距

  if (this.translateX >= 0) {
    ins.selectComponent('.mySwiperList').setStyle({
      transform: self.translateXZ()
    })
  } else if (this.translateX < lastX) {
    ins.selectComponent('.mySwiperList').setStyle({
      transform: self.translateXZ(lastX)
    })
  } else {
    ins.selectComponent('.mySwiperList').setStyle({
      transform: self.translateXZ(self.translateX)
    })

    this.tabTranslateX = this.starTabX + move
    ins.selectComponent('.tab-line').setStyle({
      transform: self.translateXZ(self.tabTranslateX)
    })

    part = Math.abs(move) < this.halfDistance ? this.index * this.halfDistance : (this.diffX < 0 ? (this.index + 1) * halfDistance : (this.index - 1) * this.halfDistance)
    tabItem.forEach(function (item, index, arr) {
      index === self.getNumerator(part, self.distance) ? tabItem[index].addClass('active') : tabItem[index].removeClass('active')
    })
  }
}
SwiperTab.getInstance = function (st) {
  if (this.instance) {
    return this.instance;
  } else {
    this.instance = myNew(SwiperTab, st);
    // console.log(this.instance);
    return this.instance
  }
}
SwiperTab.end = function (ins) {
  // 获取手指停止时的X
  var self = this.instance;
  var lastX = -this.rpxWindowWidth * (this.len - 1) // translateX的边距
  this.translateX = Math.min(0, self.translateX) // 第一个不能往左滑
  this.translateX = Math.max(lastX, self.translateX) // 最后一个不能往右滑
  var num = Math.round(self.translateX / self.rpxWindowWidth)
  this.seconds = '.3'
  this.translateX = num * this.rpxWindowWidth
  ins.selectComponent('.mySwiperList').setStyle({
    transition: self.transition(self.seconds),
    transform: self.translateXZ(self.translateX)
  })

  var maxLen = leftMargin.length - 1
  this.leftMargin[1] - this.tabTranslateX < this.tabTranslateX - this.leftMargin[0] ? (this.index < maxLen && ++self.index) : (this.index > 0 && --self.index)
  this.tabTranslateX = this.leftMargin[this.index]

  ins.selectComponent('.tab-line').setStyle({
    transition: self.transition(self.seconds),
    transform: self.translateXZ(self.tabTranslateX)
  })
}

function touchstart(e, ins) {
  leftMargin = ins.selectComponent('.tab').getDataset().leftmargin;
  var data = {
    windowWidth: e.target.dataset.width,
    len: e.target.dataset.len,
  };

  var swiperTab = SwiperTab.getInstance({
    windowWidth: data.windowWidth,
    len: e.target.dataset.len,
    leftMargin: leftMargin
  })

  swiperTab.start({
    startPoint: e.changedTouches[0] || e.touches[0],
  }, ins)

  return false
}
function touchmove(e, ins) {
  var nowPoint = e.changedTouches[0];

  swiperTab.move({
    nowPoint
  }, ins)


  return false
}
function touchend(e, ins) {

  swiperTab.end(ins)

  return false
}
function clickTab(e, ins) {
  index = Number(e.target.dataset.index)
  seconds = '.3'
  var leftMargin = ins.selectComponent('.tab').getDataset().leftmargin
  var tabItem = ins.selectAllComponents('.tab-item')

  pxWindowWidth = pxWindowWidth || ins.selectComponent('.tab').getDataset().width
  rpxWindowWidth = rpxWindowWidth || pxWindowWidth * getRpx(pxWindowWidth)

  if (!isNaN(index) && leftMargin.length !== 0) {
    tabTranslateX = leftMargin[index]
    ins.selectComponent('.tab-line').setStyle({
      transition: transition(seconds),
      transform: translateXZ(tabTranslateX)
    })

    tabItem.forEach(function (item, sub, arr) {
      sub === index ? tabItem[sub].addClass('active') : tabItem[sub].removeClass('active')
    })

    translateX = -index * rpxWindowWidth
    ins.selectComponent('.mySwiperList').setStyle({
      transition: transition(seconds),
      transform: translateXZ(translateX)
    })
  }
  return false

}
SwiperTab.getRpx = function (windowWidth) {
  return 750 / windowWidth
}
function getRpx(windowWidth) {
  return 750 / windowWidth
}
SwiperTab.translateXZ = function (x, z) {
  if (z === undefined) {
    z = 0
  }
  if (x === undefined) {
    x = 0
  }
  return 'translateX(' + x + 'rpx) translateZ(' + z + 'rpx)'
}
function translateXZ(x, z) {
  if (z === undefined) {
    z = 0
  }
  if (x === undefined) {
    x = 0
  }
  return 'translateX(' + x + 'rpx) translateZ(' + z + 'rpx)'
}
SwiperTab.transition = function (seconds) {
  return '' + seconds + 's'
}
function transition(seconds) {
  return '' + seconds + 's'
}
SwiperTab.getNumerator = function (a, b) { // 获取分子 => 转变为下标
  var fenzi = parseInt(a.toFixed(2) * 100, 10); // 分子
  var fenmu = parseInt(b.toFixed(2) * 100, 10); // 分母
  var min = Math.min(fenzi, fenmu); // 较小的
  for (var i = min; i > 1; i--) {
    if (!(fenzi % i) && !(fenmu % i)) {
      fenzi = fenzi / i;
      fenmu = fenmu / i;
      min = Math.min(fenzi, fenmu);
    }
  }
  return fenzi;
}
function getNumerator(a, b) { // 获取分子 => 转变为下标
  var fenzi = parseInt(a.toFixed(2) * 100, 10); // 分子
  var fenmu = parseInt(b.toFixed(2) * 100, 10); // 分母
  var min = Math.min(fenzi, fenmu); // 较小的
  for (var i = min; i > 1; i--) {
    if (!(fenzi % i) && !(fenmu % i)) {
      fenzi = fenzi / i;
      fenmu = fenmu / i;
      min = Math.min(fenzi, fenmu);
    }
  }
  return fenzi;
}
module.exports = {
  touchstart: touchstart,
  touchmove: touchmove,
  touchend: touchend,
  clickTab: clickTab
}