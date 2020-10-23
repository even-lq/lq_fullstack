// 把水煮开 => 沸水浸泡茶叶 => 把茶水倒进杯子 => 加柠檬

const Tea = function(type) {
  this.type = type
}

Tea.prototype.boilWater = function() {
  console.log('把水煮开');
}
Tea.prototype.brewTeaGriends = function() {
  console.log('沸水浸泡茶叶');

}
Tea.prototype.pourInCup = function() {
  console.log('把茶水倒进杯子');

}
Tea.prototype.addLemon = function() {
  console.log('加柠檬');

}

Tea.prototype.init = function() {
  console.log('把水煮开');
  console.log('沸水浸泡茶叶');
  console.log('把茶水倒进杯子');
  console.log('加柠檬');

}

var oneTea = new Tea()
oneTea.init()
var sTea = new Tea('红茶')
console.log(sTea.type)


