// 构建咖啡类
// es5 类 大写的函数
// 把水煮开 => 沸水冲泡 => 把咖啡倒进杯子 => +糖、牛奶

// 构造函数
var Coffee = function(type) {
  // 被new出来后this指向实例
  this.type = type
}

// 基于原型的面向对象，给类添加方法要在原型上添加
Coffee.prototype.boilWater = function() {
  console.log('把水煮开');
}
Coffee.prototype.brewCoffeeGriends = function() {
  console.log('沸水冲泡咖啡');
}
Coffee.prototype.pourInCup = function() {
  console.log('把咖啡倒进杯子');
}
Coffee.prototype.addSugarAndMilk = function () {
  console.log('+糖、牛奶');
}
Coffee.prototype.init = function() {
  this.boilWater();
  this.brewCoffeeGriends();
  this.pourInCup();
  this.addSugarAndMilk();
}
var oneCoffee = new Coffee('猫屎咖啡');
console.log(oneCoffee.type);
// 原型对象
// 任何实例化后的对象都有私有属性：__proto__
console.log(oneCoffee.__proto__);
// console.log(oneCoffee.__proto__ == Coffee.prototype);
// 任何函数都有prototype属性：原型对象
console.log(Coffee.prototype);
console.log(Coffee)
// oneCoffee.boilWater();
// oneCoffee.brewCoffeeGriends();
// oneCoffee.pourInCup();
// oneCoffee.addSugarAndMilk();
oneCoffee.init();
// JS类是怎么构建起来的 = 火车头 构造函数（首字母大写），构造函数和普通函数的区别是，构造函数可以new出来
// 好多节车厢 prototype
// 函数是一等对象
// JS本没有类，es5：函数+原型链 = 类，任何函数都有一个prototype属性
// console.log(Coffee.prototype.constructor == Coffee);
console.log(oneCoffee)
console.log(oneCoffee.__proto__)
console.log(oneCoffee.__proto__.__proto__)
// console.log(Coffee.prototype.__proto__)
