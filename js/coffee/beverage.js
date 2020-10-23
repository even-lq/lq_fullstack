// 基类/模板类
var Beverage = function() {

}
Beverage.prototype.boilWater = function() {
  console.log('把水煮开');
}
// 由子类决定冲泡的方法
Beverage.prototype.brew = function() {

}
Beverage.prototype.pourInCup = function () {

}
Beverage.prototype.addCondiments = function () {

}
Beverage.prototype.init = function () {
  this.boilWater()
  this.brew()
  this.pourInCup()
  this.addCondiments()
}

var Coffee = function() {

}
// 原型式继承
Coffee.prototype = new Beverage();
Coffee.prototype.__proto__ = Beverage.prototype

console.log(Coffee.prototype.__proto__);
// console.log(oneCoffee.__proto__);
// console.log(oneCoffee.__proto__.__proto__);
Coffee.prototype.brew = function() {
  console.log('沸水冲泡咖啡');
}
Coffee.prototype.pourInCup = function () {
  console.log('把咖啡倒进杯子');
}
var oneCoffee = new Coffee()
// 子类实例 new了一个在 【原型】 上指向一个模板类的 【原型对象】 ，则自动具有init方法
oneCoffee.init()
oneCoffee.brew()
Coffee.prototype.brew()