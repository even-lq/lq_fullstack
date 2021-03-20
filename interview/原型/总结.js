// prototype为函数独有
// __proto__为对象独有, 因为函数也是对象所以函数也有

// __proto__ 意为 对象的构造"者" => 爹 (而构造函数则为构造实例的 "工具")

// 所以 实例.__proto__ => 构造函数造出来的 => 构造函数.prototype(是一个对象)
// 所以 函数.__proto__ => Function函数造出来的 => Function.prototype(是一个对象)

// 实例对象的爹(__proto__) => 构造函数.prototype
// 函数的爹(__proto__) => Function.prototype

// prototype 意为[实例]的原型对象
// 构造函数.prototype 理解为对象的一个prototype属性 => 原型对象 => 也就是被奉为爹的东西

// 举个不太恰当但是便于理解的例子
// 构造函数.prototype => 妈妈(爹也是一样的)
// 构造函数 => 妈妈的肚子
// 实例对象 => 孩子
// new => 孩子从妈妈的肚子里生出来的过程
// 所以当孩子(实例对象)里面的属性找不到的时候就会去妈妈(构造函数.prototype)那里找