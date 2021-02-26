let Vue = null;
class Store {
  constructor (options) {
    // this.state = options.state || {}
    this.vm = new Vue({
      data: {
        state: options.state
      }
    })
    let getters = options.getters || {}
    // 没搞懂为什么要多一个let getters出来，直接用 this.getters不行？
    this.getters = {}
    // 取到options.getters里面的所有key
    // 把所有函数都添加到this.getters
    // 当调用this.getters的某个函数时，不用写()
    this.setGetters(getters)

    let mutations = options.mutations || {}
    this.mutations = {}
    this.setMutations(mutations)

    let actions = options.actions || {}
    this.actions = {}
    this.setActions(actions)

    this.commit = (method, arg) => {
      this.mutations[method](arg)
    }

  }

  // 属性自动触发器 this.$store.state即可代替this.$store.vm.state
  get state() {
    return this.vm.state
  }
  // 在constructor外面只能写函数声明而不能写函数表达式
  // commit = (method, arg) => {
  //   this.mutations[method](arg)
  // }

  dispatch(method, arg) {
    this.actions[method](arg)
  }

  setGetters(getters) {
    Object.keys(getters).forEach(getterName => {
      Object.defineProperty(this.getters, getterName, {
        get:() => {
          return getters[getterName](this.state)
        }
      })
    })
  }
  setMutations(mutations) {
    Object.keys(mutations).forEach(mutationName => {
      this.mutations[mutationName] = (arg) => {
        mutations[mutationName](this.state, arg)
      }
    })
  }

  setActions(actions) {
    Object.keys(actions).forEach(actionName => {
      this.actions[actionName] = (arg) => {
        actions[actionName](this, arg)
      }
    })
  }
}

let install = function(vue) {
  Vue = vue
  // 1.接收vue实参
  // 

  // 全局混入
  Vue.mixin({
    // 控制组件都要用beforeCreate()
    beforeCreate() {
      // $options判断当前组件是谁 
      // 所有组件共用同一个store
      // 根组件的store在main.js中的new Vue({})中
      if (this.$options && this.$options.store) {
        // 一开始有的证明一定是根组件
         this.$store = this.$options.store
      } else {
        this.$store = this.$parent && this.$parent.$store
      }
    },
  })
}

let Vuex = {
  Store,
  install
}

export default Vuex