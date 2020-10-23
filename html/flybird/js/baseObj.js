var baseObj = {
  randomNum: function (min, max) {
    return parseInt(Math.random() * (max - min + 1) + min)
  },
  // 判断两个dom距离是否为0：小鸟撞击管道
  rectangleCrashExamine: function (obj1, obj2) {  
    var obj1Left = obj1.offsetLeft
    var obj1Width = obj1.offsetLeft + obj1.offsetWidth
    var obj1Top = obj1.offsetTop
    var obj1Height = obj1.offsetTop + obj1.offsetHeight

    var obj2Left = obj2.offsetLeft
    var obj2Width = obj2.offsetLeft + obj2.offsetWidth
    var obj2Top = obj2.offsetTop
    var obj2Height = obj2.offsetTop + obj2.offsetHeight
    // 第一个第二个上管道和下管道都需要判断（x轴）
    // y轴：上管道判断第四个，下管道判断第三个
    if (!(obj1Left > obj2Width || obj1Width < obj2Left || obj1Top > obj2Height || obj1Height < obj2Top)) {
      return true
    }
    return false
  }
}