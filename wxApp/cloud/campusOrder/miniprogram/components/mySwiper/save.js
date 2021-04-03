var pxWindowWidth = 0,
  startX = 0, // 鼠标按下的X坐标
  translateX = 0, // 最终X的坐标
  startPoint = null, // 鼠标按下的实例
  seconds = '', // transition的秒数
  isFirstMax = 0, // 是否第一次达到最大值
  tabWidth = 0, // tab宽度
  tabMaxPoint = null, // tab到达最大长度后的起始实例
  tabMaxWidth = 0, // 记录tab移动的最大长度
  confirmMax = true, // 当达到tabMaxWidth后，只允许缩小
  rightIndex = 0 // rightMargin的下标

function touchstart(e, ins) {
  startPoint = e.changedTouches[0] || e.touches[0]
  startX = translateX;
  ins.selectComponent('.mySwiperList').setStyle({
    transition: '' + seconds + '',
    transform: 'translateX(' + translateX + 'rpx) translateZ(0rpx)'
  })

  var data = {
    windowWidth: e.target.dataset.width,
    tab: e.target.dataset.tab
  }
  pxWindowWidth = data.windowWidth
  tabWidth = data.tab.tabWidth // 初始化tab宽度
  // console.log(data.tab.rightMargin);

  var tabLine = ins.selectComponent('#tab').selectComponent('.tab-line')
  var rmLength = data.tab.rightMargin.length


  if (rightIndex === rmLength) {
    tabLine.setStyle({
      background: rightIndex === rmLength ? 'linear-gradient(to right, #2ba4f5, ' + data.tab.tabColor + ')' : 'linear-gradient(to right, #9ED5FA, #9ED5FA)',
      transform: 'translateX(' + (-data.tab.rightMargin[rightIndex - 1]) + 'rpx) translateZ(0)',
      transition: ''
    })
  }


  return false
}
function touchmove(e, ins) {
  var diffX = 0;
  var tabDiffX = 0; // tab到达最大长度后缩小的值
  var nowPoint = e.changedTouches[0];

  var data = {
    tab: e.target.dataset.tab
  }

  if (startPoint) {
    diffX = (nowPoint.pageX - startPoint.pageX) * getRpx(pxWindowWidth)
  }

  translateX = startX + diffX
  ins.selectComponent('.mySwiperList').setStyle({
    transform: 'translateX(' + translateX + 'rpx) translateZ(0rpx)'
  })

  var rmLength = data.tab.rightMargin.length
  // 获取tab线的实例
  var tabLine = ins.selectComponent('#tab').selectComponent('.tab-line')
  // 获取tab线CSS的实例
  var tabCSS = tabLine.getComputedStyle(['width'])
  var nowTabWidth = tabCSS.width.split('px')[0]
  // tabWidth不能往右滑动
  // console.log(rightIndex,  789);


  if (nowTabWidth <= data.tab.tabMaxWidth && confirmMax) {

    // 左滑 tabWidth - diffX 大，右滑 tabWidth + diffX 大
    var changeTabWidth = Math.max(tabWidth + diffX, tabWidth - diffX)
    tabLine.setStyle({
      // tabWidth不能比原来的小，如果比原来的小说明是第一个
      background: rightIndex === rmLength ? (diffX > 0 ? 'linear-gradient(to right, #9ED5FA, ' + data.tab.tabColor + ')' : 'linear-gradient(to right, #2ba4f5, ' + data.tab.tabColor + ')') : (diffX > 0 ? 'linear-gradient(to right, #9ED5FA, #9ED5FA)' : 'linear-gradient(to right, #9ED5FA,' + data.tab.tabColor + ')'),
      // 说明是最后一个
      transform: rightIndex === rmLength ? 'translateX(' + (-data.tab.rightMargin[rightIndex - 1]) + 'rpx) translateZ(0)' : '',
      width: rightIndex === rmLength ? (diffX > 0 ? changeTabWidth : tabWidth) + 'rpx' : (rightIndex === 0 ? (diffX > 0 ? tabWidth : changeTabWidth) : changeTabWidth) + 'rpx'

      // 是最后一个吗？ {
      //   是：允许左滑，不允许右滑
      //   不是：{

      //     是第一个吗？ {
      //       是：允许右滑，不允许左滑
      //       不是：任意左右滑动
      //     }

      //   }
      // }

    })
  } else {
    // 初始化tab的最长长度
    confirmMax = false
    if (++isFirstMax === 1) {
      tabMaxPoint = nowPoint
      tabMaxWidth = nowTabWidth * getRpx(pxWindowWidth)
      tabLine.setStyle({
        background: 'linear-gradient(to right, #9ED5FA, ' + data.tab.tabColor + ')',
        width: nowTabWidth + 'px'
      })
      return
    }
    // 达到最长的长度后重新计算
    tabDiffX = (nowPoint.pageX - tabMaxPoint.pageX) * getRpx(pxWindowWidth)
    if (tabDiffX > 0) {
      tabLine.removeClass('right')
      tabLine.addClass('left')
      // 不能超过最后一个tab
      if (nowTabWidth > (tabWidth / getRpx(pxWindowWidth))) {
        tabLine.setStyle({
          width: tabMaxWidth - tabDiffX + 'rpx',
          background: 'linear-gradient(to right, #9ED5FA, ' + data.tab.tabColor + ')',
          transform: 'translateX(' + data.tab.rightMargin[rmLength - rightIndex] + 'rpx) translateZ(0)'
        })
      } else {
        tabLine.setStyle({
          width: Math.max(tabWidth, tabMaxWidth - tabDiffX) + 'rpx',
          transform: 'translateX(' + data.tab.rightMargin[rmLength - rightIndex] + 'rpx) translateZ(0)',
          background: 'linear-gradient(to right, #9ED5FA, #9ED5FA)'
        })
      }
      rightIndex = --rightIndex <= 0 ? 0 : rightIndex

    }
    if (tabDiffX < 0) {
      // console.log(rightIndex);
      tabLine.removeClass('left')
      tabLine.addClass('right')
      // 不能超过最后一个tab
      if (nowTabWidth > (tabWidth / getRpx(pxWindowWidth))) {
        tabLine.setStyle({
          width: tabMaxWidth + tabDiffX + 'rpx',
          background: 'linear-gradient(to right, #9ED5FA, ' + data.tab.tabColor + ')',
          transform: 'translateX(' + (-data.tab.rightMargin[rightIndex]) + 'rpx) translateZ(0)'
        })
      } else {
        tabLine.setStyle({
          width: Math.max(tabWidth, tabMaxWidth + tabDiffX) + 'rpx',
          transform: 'translateX(' + (-data.tab.rightMargin[rightIndex]) + 'rpx) translateZ(0)',
          background: 'linear-gradient(to right, ' + data.tab.tabColor + ', ' + data.tab.tabColor + ')'
        })
      }
      rightIndex = ++rightIndex >= rmLength ? rmLength : rightIndex

    }



  }


  return false
}
function touchend(e, ins) {
  var data = {
    len: e.target.dataset.len,
    tab: e.target.dataset.tab
  }
  var rpxWindowWidth = pxWindowWidth * getRpx(pxWindowWidth)

  // 获取手指停止时的X
  translateX = Math.min(0, translateX) // 第一个不能往左滑
  translateX = Math.max(-rpxWindowWidth * (data.len - 1), translateX) // 最后一个不能往右滑
  var num = Math.round(-translateX / rpxWindowWidth)
  seconds = '.3s'
  translateX = -num * rpxWindowWidth
  ins.selectComponent('.mySwiperList').setStyle({
    transition: '' + seconds + '',
    transform: 'translateX(' + translateX + 'rpx) translateZ(0rpx)'
  })


  // tab线的终点态
  var tabLine = ins.selectComponent('#tab').selectComponent('.tab-line')

  isFirstMax = 0
  confirmMax = true

  switch (rightIndex) {
    case 1:
      // console.log(rightIndex);
      tabLine.setStyle({
        background: 'linear-gradient(to right,' + data.tab.tabColor + ',' + data.tab.tabColor + ')',
        transform: 'translateX(' + (-data.tab.rightMargin[rightIndex - 1]) + 'rpx) translateZ(0)',
        transition: '' + seconds + ''
      })

      break;
    case 0:
      // console.log('我是0');
      tabLine.setStyle({
        background: 'linear-gradient(to right,#9ED5FA, #9ED5FA)',
        transform: 'translateX(' + data.tab.rightMargin[rightIndex - 1] + 'rpx) translateZ(0)',
        transition: '' + seconds + ''
      })

      break;
    default:
      // console.log('我是default');
      tabLine.setStyle({
        background: 'linear-gradient(to right,#9ED5FA, #9ED5FA)',
        transform: 'translateX(' + data.tab.rightMargin[rightIndex] + 'rpx) translateZ(0)',
        transition: '' + seconds + ''
      })
      break;
  }

  return false
}

function getRpx(windowWidth) {
  return 750 / windowWidth
}
module.exports = {
  touchstart: touchstart,
  touchmove: touchmove,
  touchend: touchend
}