var rpxWindowWidth = 0,
  pxWindowWidth = 0,
  diffX = 0; // swiper移动的距离
startX = 0, // 鼠标按下的X坐标
  translateX = 0, // 最终X的坐标
  leftMargin = [], // tab边距数组
  multiple = 0, // tab移动距离相对于swiper的倍数
  distance = 0, // tab移动的最大距离
  tabTranslateX = 0; // tab最终X坐标
tempTabTranslateX = 0; // 暂时的tabX坐标
startPoint = null, // 鼠标按下的实例
  seconds = '' // transition的秒数

function touchstart(e, ins) {
  startPoint = e.changedTouches[0] || e.touches[0]
  startX = translateX;
  leftMargin = ins.selectComponent('.tab').getDataset().leftmargin
  tabTranslateX = tabTranslateX || leftMargin[0]
  tempTabTranslateX = tempTabTranslateX || leftMargin[0]

  // console.log(tabTranslateX, 'start');
  ins.selectComponent('.mySwiperList').setStyle({
    transition: transition(seconds),
    transform: translateXZ(translateX)
  })
  ins.selectComponent('.tab-line').setStyle({
    transition: transition(seconds),
    transform: translateXZ(tabTranslateX)
  })

  var data = {
    windowWidth: e.target.dataset.width
  }
  pxWindowWidth = pxWindowWidth || data.windowWidth
  rpxWindowWidth = rpxWindowWidth || pxWindowWidth * getRpx(pxWindowWidth)

  distance = leftMargin[1] - leftMargin[0]
  multiple = (leftMargin[1] - leftMargin[0]) / rpxWindowWidth

  return false
}
function touchmove(e, ins) {
  var nowPoint = e.changedTouches[0];
  var data = {
    len: e.target.dataset.len
  }

  if (startPoint) {
    diffX = (nowPoint.pageX - startPoint.pageX) * getRpx(pxWindowWidth)
  }

  translateX = startX + diffX

  var tabItem = ins.selectAllComponents('.tab-item')
  var moved = multiple * diffX // 移动的距离
  var slide = - multiple * diffX // 移动的距离

  if (translateX >= 0) {
    ins.selectComponent('.mySwiperList').setStyle({
      transform: 'translateX(0rpx) translateZ(0rpx)'
    })
  } else if (translateX < -rpxWindowWidth * (data.len - 1)) {
    ins.selectComponent('.mySwiperList').setStyle({
      transform: translateXZ(-rpxWindowWidth * (data.len - 1))
    })
  } else {
    ins.selectComponent('.mySwiperList').setStyle({
      transform: translateXZ(translateX)
    })

    var index = Math.abs(Math.round(moved / distance))
    tabTranslateX = tempTabTranslateX + slide
    ins.selectComponent('.tab-line').setStyle({
      transform: translateXZ(tabTranslateX)
    })
    if (diffX < 0) {
      if (- moved >= (distance / 2)) {
        tabItem[index - 1].removeClass('active')
        tabItem[index].addClass('active')
      } else {
        tabItem[index + 1].removeClass('active')
        tabItem[index].addClass('active')
      }

    }

    if (diffX > 0) {
      if (moved >= (distance / 2)) {
        tabItem[index].removeClass('active')
        tabItem[index - 1].addClass('active')
      } else {
        tabItem[index].removeClass('active')
        tabItem[index + 1].addClass('active')
      }
    }

  }


  return false
}
function touchend(e, ins) {
  var data = {
    len: e.target.dataset.len
  }

  // 获取手指停止时的X
  translateX = Math.min(0, translateX) // 第一个不能往左滑
  translateX = Math.max(-rpxWindowWidth * (data.len - 1), translateX) // 最后一个不能往右滑
  var num = Math.round(translateX / rpxWindowWidth)
  seconds = '.3'
  translateX = num * rpxWindowWidth
  ins.selectComponent('.mySwiperList').setStyle({
    transition: transition(seconds),
    transform: translateXZ(translateX)
  })

  // console.log(leftMargin[1] - tabTranslateX < tabTranslateX - leftMargin[0] ? 'true' : 'false');
  leftMargin[1] - tabTranslateX < tabTranslateX - leftMargin[0] ? tabTranslateX = leftMargin[1] : tabTranslateX = leftMargin[0]

  tempTabTranslateX = tabTranslateX
  ins.selectComponent('.tab-line').setStyle({
    transition: transition(seconds),
    transform: translateXZ(tabTranslateX)
  })


  return false
}
function clickTab(e, ins) {
  ins.callMethod('clickTab', e)
  var index = e.target.dataset.index
  var leftMargin = ins.selectComponent('.tab').getDataset().leftmargin
  var tabItem = ins.selectAllComponents('.tab-item')
  var secondes = '.3'

  pxWindowWidth = pxWindowWidth || ins.selectComponent('.tab').getDataset().width
  rpxWindowWidth = rpxWindowWidth || pxWindowWidth * getRpx(pxWindowWidth)

  if ((index || index === 0) && leftMargin.length !== 0) {
    index = Number(index)
    ins.selectComponent('.tab-line').setStyle({
      transform: translateXZ(leftMargin[index])
    })

    if (index === 1) {
      tabItem[1].addClass('active')
      tabItem[0].removeClass('active')
    } else {
      tabItem[0].addClass('active')
      tabItem[1].removeClass('active')
    }


    var clickTranslateX = -index * rpxWindowWidth
    ins.selectComponent('.mySwiperList').setStyle({
      transition: transition(secondes),
      transform: translateXZ(clickTranslateX)
    })
    tabTranslateX = clickTranslateX < 0 ? leftMargin[1] : leftMargin[0]
    translateX = -index * rpxWindowWidth
  }
  return false

}
function getRpx(windowWidth) {
  return 750 / windowWidth
}
function translateXZ(x, z) {
  if (z === undefined) {
    z = 0
  }
  return 'translateX(' + x + 'rpx) translateZ(' + z + 'rpx)'
}
function transition(seconds) {
  return '' + seconds + 's'
}

module.exports = {
  touchstart: touchstart,
  touchmove: touchmove,
  touchend: touchend,
  clickTab: clickTab
}
