// 全局监听
window.onload = function() {
  imgLocation('container', 'box')
}

// 1. 获取当前需要摆放图片的数量
function imgLocation(parent, content) {
  var cparent = document.getElementById(parent)
  var ccontent = getChildElement(cparent, content)
  //不用  document.querySelectorAll 是因为考虑容错性，防止html结构变化获取不到

  // 获取图片宽度、可视区域的宽度：判断能放多少张图片
  var imgWidth = ccontent[0].offsetWidth
  // 向下取整
  var num = Math.floor(document.documentElement.clientWidth / imgWidth)
  cparent.style.width = `${imgWidth * num}px`
  // cparent.style.cssText = `width: ${imgWidth * num } px`

  // 2. 拿到第二行的第一张图片，放到第一行高度最小的图片的下面
  var BoxHeightArr = []
  for (var i = 0; i < ccontent.length; i++) {
    if(i < num) {
      BoxHeightArr[i] = ccontent[i].offsetHeight
    } else {
      var minHeight = Math.min.apply(null, BoxHeightArr) //math里面的min方法借给数组去用
      var minIndex = getMinHeightLocation(BoxHeightArr, minHeight)
      console.log(minHeight);
      console.log(minIndex);
      ccontent[i].style.position = 'absolute'
      ccontent[i].style.top = minHeight + 'px'
      ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px'
      BoxHeightArr[minIndex] += ccontent[i].offsetHeight
    }
  }
  console.log(BoxHeightArr);

}

function getChildElement(parent, content) {
  var contentArr = []
  var allContent = parent.getElementsByTagName('*')
  // console.log(allContent);
  for(var i = 0; i < allContent.length; i++) {
    if(allContent[i].className == content) {
      contentArr.push(allContent[i])
    }
  }

  return contentArr
}

function getMinHeightLocation(BoxHeightArr, minHeight) {
  for (var i in BoxHeightArr) {
    if (BoxHeightArr[i] === minHeight) {
      return i
    }
  }
}