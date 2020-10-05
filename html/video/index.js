/*  1.拿到要操作的dom结构
    2.在这个dom上移动鼠标能控制滑块的位置
    3.能控制这个dom的高度发生变化
    4.根据该dom高度的值来调整视频的播放速度
*/

var speed = document.querySelector('.speed')
var bar = document.querySelector('.speed-bar')
var video = document.querySelector('.flex')

/* 注册事件 */
speed.addEventListener('mousemove', function(event) {
  // console.log(event);
  var y = event.pageY - speed.offsetTop
  var percent = y / speed.offsetHeight // 获取该dom结构自身的高度
  var min = 0.4
  var max = 4
  var height = Math.round(percent * 100) + '%'
  var playbackRate = percent * (max - min) + min /*使得式子出现在0.4至4之间*/
  // console.log(percent + '+' + playbackRate);
  bar.style.height = height
  /*playbackRate播放速度 */
  video.playbackRate = playbackRate
  bar.textContent = playbackRate.toFixed(2) + 'x'

})