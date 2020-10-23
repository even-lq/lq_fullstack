// 面向对象js
// 对象：键值对
// object、array、function：引用类型
var bird = {
  flyTime: null, // 小鸟飞翔的定时器
  wingTimer: null, //小鸟翅膀摆动的定时器

  div: document.createElement('div'),
  showBird: function(parentObj) {
    this.div.style.width = '40px'
    this.div.style.height = '28px'
    this.div.style.backgroundImage = 'url(img/bird0.png)'
    this.div.style.backgroundRepeat = 'no-repeat'
    this.div.style.position = 'absolute'
    this.div.style.left = '50px'
    this.div.style.top = '200px'
    this.div.style.zIndex = '1'
    parentObj.appendChild(this.div)
  },
  // 控制小鸟下落的函数
  fallSpeed: 0,
  flyBird: function() {
    // setInterval定时器会影响其他回调函数的作用域，可能this要换成bird
    this.flyTime = setInterval(() => {
      this.div.style.top = this.div.offsetTop + this.fallSpeed++ + 'px'
      // 掉到地面清除定时器
      if (this.div.offsetTop >= 395 ){
        this.fallSpeed = 0
        clearInterval(this.flyTime)
        clearInterval(this.wingTimer)
      }
      // 不让小鸟非处飞出界
      if (this.div.offsetTop < 0) {
        this.div.style.top = '0px'
        this.fallSpeed = 2
      }
      if (this.fallSpeed > 12) {
        this.fallSpeed = 12
      }
    }, 60);
  },
  //控制小鸟翅膀的扇动
  wingWave: function() {
    var up = ['url(img/up_bird0.png)', 'url(img/up_bird1.png)']
    var down = ['url(img/down_bird0.png)', 'url(img/down_bird1.png)']
    var i = -1, j = 0;
    this.wingTimer = setInterval(() => {
      if (this.fallSpeed > 0) {
        i *= -1
        this.div.style.backgroundImage = down[i > 0 ? 0 : 1]
      }
      if (this.fallSpeed < 0) {
        this.div.style.backgroundImage = up[j++]
        if(j == 2) { j = 0 }
      }
    }, 120);
  }
}