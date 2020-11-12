// 对象的创建
// 1. 对象字面量`var obj = {}`
// 2. 构造函数
  // 1) new Object()
  // 2) new 自定义的构造函数()

function Car(color) {
  this.name = 'BMW'
  this.height = '1400'
  this.long = '4900'
  this.weight = 1000

  this.health = 100
  this.run = function () {
    this.health--
  }
  this.color = color
}
var car = new Car('black')
var car1 = new Car('white')

car.name = '红旗'
car1.name = '劳斯莱斯'

car.run()
console.log(car1);