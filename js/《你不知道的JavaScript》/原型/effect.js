// 提取公有属性
Car.prototype.name = 'BBMW'
Car.prototype.lang = 4900
Car.prototype.height = 1400
function Car(color, owner) {
  this.color = color
  this.owner = owner
  // 重复，耦合度高，代码复用性低
  // this.name = 'BMW'
  // this.lang = 4900
  // this.height = 1400
}

var car = new Car('red', 'tim')
var car1 = new Car('green', 'sandy')

console.log(car.name, car1.lang);