// 操作系统抽象类
class OS {
  controlHardWare() {
    throw new Error('抽象工厂方法不允许直接调用，必须重写')
  }
}
class AndroidOs extends OS {
  controlHardWare() {
    console.log('我会用安卓的方式操作硬件');
  }
}
class AppleOS extends OS {
  controlHardWare() {
    console.log('我会用苹果的方式操作硬件');
  }
}

// ---------------------------------------------------------
// 硬件抽象类
class HardWare {
  operateByOrder() {
    throw new Error('抽象工厂方法不允许直接调用，必须重写')
  }
}
class QualcommHardWare extends HardWare {
  operateByOrder() {
    console.log('我会以高通的方式去运转');
  }
}
class HuaweiHardWare extends HardWare {
  operateByOrder() {
    console.log('我会以华为的方式去运转');
  }
}

// ---------------------------------------------------------
// 手机：操作系统 + 硬件
class MobilePhoneFactory {
  // 提供操作系统
  createOS() {
    throw new Error('抽象工厂方法不允许直接调用，必须重写')
  }


  // 提供硬件
  createHardWare() {
    throw new Error('抽象工厂方法不允许直接调用，必须重写')
  }
}

class FakeStar extends MobilePhoneFactory {
  // 提供操作系统
  createOS() {
    // throw new Error('抽象工厂方法不允许直接调用，必须重写')
    // 具体产品类
    return new AndroidOs()
  }

  // 提供硬件
  createHardWare() {
    // throw new Error('抽象工厂方法不允许直接调用，必须重写')
    return new QualcommHardWare()
  }
}

const myPhone = new FakeStar()
const myOS = myPhone.createOS()
const myHardWare = myPhone.createHardWare()
myOS.controlHardWare()
myHardWare.operateByOrder()


class AkisaStarFactory extends MobilePhoneFactory {
  // 提供操作系统
  createOS() {
    // throw new Error('抽象工厂方法不允许直接调用，必须重写')
    // 具体产品类
    return new AndroidOs()
  }

  // 提供硬件
  createHardWare() {
    // throw new Error('抽象工厂方法不允许直接调用，必须重写')
    return new QualcommHardWare()
  }
}