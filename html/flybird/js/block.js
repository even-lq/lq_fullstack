// 函数式编程
// 构造函数 Block 工厂模式
function Block() {
  // 在函数中添加属性
  this.upDivWrap = null // 上方管道的父容器
  this.downDivWrap = null// 下方管道的父容器
  this.downHeight = baseObj.randomNum(0, 150)
  this.gapHeight = baseObj.randomNum(150, 160)
  // this.upHeight = 312 - downHeight - gapHeight
  this.upHeight = 303 - this.downHeight - this.gapHeight

  // 生成管道：管道的公用属性和公共接口 为什么要这样写？ 
  this.createDiv = function(url, height, positionType, left, top) {
    var newDiv = document.createElement('div')
    newDiv.style.width = '62px'
    newDiv.style.height = height 
    newDiv.style.position = positionType
    newDiv.style.left = left
    newDiv.style.top = top + 'px'
    newDiv.style.backgroundImage = url
    return newDiv
  }

  this.createBlock = function() {
    var upDiv1 = this.createDiv('url(img/up_mod.png)', this.upHeight + 'px')
    var upDiv2 = this.createDiv('url(img/up_pipe.png)', '60px')
    // top：upDivWrap距离顶部的距离，由于是贴在顶部，所以不设置
    this.upDivWrap = this.createDiv(null, null, 'absolute', '450px')
    this.upDivWrap.appendChild(upDiv1)
    this.upDivWrap.appendChild(upDiv2)

    var downDiv1 = this.createDiv('url(img/down_pipe.png)', '60px')
    var downDiv2 = this.createDiv('url(img/down_mod.png)', this.downHeight + 'px')
    // top：downDivWrap距离顶部的距离423 - 60
    this.downDivWrap = this.createDiv(null, null, 'absolute', '450px', 363 - this.downHeight)
    this.downDivWrap.appendChild(downDiv1)
    this.downDivWrap.appendChild(downDiv2)

    jsWrapBg.appendChild(this.upDivWrap)
    jsWrapBg.appendChild(this.downDivWrap)
  }

  this.moveBlock = function() {
    this.upDivWrap.style.left = this.upDivWrap.offsetLeft - 3 + 'px'
    this.downDivWrap.style.left = this.downDivWrap.offsetLeft - 3 + 'px'
  }
}