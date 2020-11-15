let data = [
  { value: '麻烦给我的爱人来一杯mojito', time: 5, color: 'red', speed: 1, fontSize: 22 },
  { value: '周杰伦真帅', time: 10, color: '#00a1f5', speed: 1, fontSize: 30 },
  { value: '我喜欢看她微醺时的眼眸', time: 14, color: '#00a1f5' },
  { value: '我的咖啡，糖不用太多', time: 20 },
  
]

let canvas = document.getElementById('canvas')
let video = document.getElementById('video')
let $txt = document.getElementById('text')
let $btn = document.getElementById('btn')
let $color = document.getElementById('color')
let $range = document.getElementById('range')


// 创建渲染弹幕的类 es6新增
class CanvasBarrage {
  constructor(canvas, video, opts = {}) {
    if (!canvas || !video)  return 

    // 将传进来的参数挂载到this上
    this.video = video
    this.canvas = canvas
    // 设置canvas的宽高和video宽高一致
    this.canvas.width = video.width
    this.canvas.height = video.height

    // 获取画布，操作画布
    this.ctx = canvas.getContext('2d')

    // 设置默认参数，如果用户没传，我就给它带上
    let defOpts = {
      color: 'e91e63',
      speed: 1.5,
      opacity: 0.5,
      fontSize: 20,
      // data用于存放弹幕信息
      data: [] 
    }

    // 把opts融合到defOpts中，如果有冲突，则取opts，再把融合后的东西挂载到this中
    Object.assign(this, defOpts, opts)

    // 判断播放暂停，默认true是暂停
    this.isPaused = true

    // 获取所有弹幕的信息
    this.barrages = this.data.map(item => new Barrage(item, this))

    // 渲染弹幕
    this.render()


  }
  // 渲染canvas绘制的弹幕
  render() {
    // 1. 清除原来的画布
    this.clear()
    // 2. 渲染
    this.renderBarrage()

  }

  clear() {
    // 0, 0 左上角
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  renderBarrage() {
    // 1. 拿到当前视频播放的时间
    let time = this.video.currentTime
    this.barrages.forEach(barrage => {
      if(time >= barrage.time && !barrage.isOut) {
        // 判断弹幕是否初始化
        if (!barrage.isInit) {
          barrage.init()
          barrage.isInit = true
        }

        // 2. 弹幕从右往左渲染
        barrage.x -= barrage.speed
        // 3. 渲染每一条弹幕
        barrage.everyRender()

        if (barrage.x < -barrage.width) {
          barrage.isOut = true
        }

      }
    });

  }
}

class Barrage {
  constructor(obj, ctx) {

  }
}