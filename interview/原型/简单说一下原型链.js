// 每个函数都有prototype属性，该属性指向原型，原型就是创建该函数的工厂。
// 除了Function.prototype.bind这个属性指向原型，
// 每个对象都有__proto__属性，指向的是创建这个对象的构造函数的原型（[[prototype]]）,
// [[prototype]]是无法访问的内部属性，所以具体由__proto__访问，对象可以通过 __proto__来寻找不属于该对象的属性，__proto__将对象链接起来组成了原型链   