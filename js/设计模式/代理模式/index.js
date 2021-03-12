// 客户端 => dns => 代理服务器 => 目标服务器

// proxy

// obj 目标对象（妹子） handler 代理行为（婚介所）
const proxy = new Proxy(obj, handler)

// 礼物
const present = {
  type: '巧克力',
  value: 60
}


// 未知妹子
// 非实名用户不能看全部信息,实名非VIP用户不能查看真实照片
const girl = {
  name: '小美',
  aboutMe: '...',
  age: 22,
  career: 'teacher',
  fakeAvatar: 'xxx',
  avatar: 'xxx',
  phone: 123456,
  presents: [],
  bottomValue: 50, // 收到礼物价格的下限,最少不低于50
  lastPresent: present
}

// 普通信息
const baseInfo = ['age', 'career']

// 私密信息
const privateInfo = ['avatar', 'phone']


// 小敏
const user = {
  // ...
  isValidated: true, // 实名
  isVip: false
}

const lmLovers = new Proxy(girl, {
  // 代理的对象及其key
  get: function (girl, key) {
    if (baseInfo.indexOf(key) !== -1 && user.isValidated) {
      alert('未认证') // 不能看age 和 career
      return
    }
    if (user.isValidated && privateInfo.indexOf(key) !== -1 && !user.isVip) {
      alert('认证了,但是没vip')
      return0
    }
  },
  set(girl, key, val) {
    if (key === 'lastPresent') {
      if (val.value < girl.bottomValue) {
        alert('sorry,我要50以上的')
        return
      }

      girl.lastPresent = val
      girl.presents = [...girl.presents, val]
    }
  }

})