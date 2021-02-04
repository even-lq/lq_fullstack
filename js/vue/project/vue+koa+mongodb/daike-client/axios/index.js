import apiLogin from './interface/login'
import apiRegister from './interface/register'

// Object.defineProperties() 
// 该方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
// Vue的use方法(Vue.use)只认install，所以名字不能改
const install = Vue => {
  // 属性拦截
  // 拦截Vue原型
  Object.defineProperties(Vue.prototype, {
    $http: {
      get() {
        return Object.assign(
          {},
          apiLogin,
          apiRegister,
          // ...
        )
      }
    }
  })
}

export default install