// 一个类只有一个实例
class SingleDog {
  show() {
    console.log('我是一个单例对象');
  }
}

const s1 = new SingleDog()
const s2 = new SingleDog()

s1 === s2 // false
// 使其等于true


// static关键字
// 该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
class SingleDog {
  show() {
    console.log('我是一个单例对象');
  }
  // static getInstance() {
  //   if (!SingleDog.instance) {
  //     SingleDog.instance = new SingleDog()
  //   }
  //   return SingleDog.instance
  // }

  // 闭包写法
  static getInstance() {
    let instance = null
    return (function () {
      if (!instance) {
        instance = new SingleDog()
      }
      return instance
    })()

  }
}

const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()

s1 === s2 // true

