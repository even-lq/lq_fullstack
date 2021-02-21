let Vue = null;
class HistoryRoute {
  constructor () {
    this.current = null
  }
}
class VueRouter {
  constructor (options) {
    this.mode = options.mode || 'hash'
    this.routes = options.routes || []
    this.routesMap = this.createMap(this.routes)

    this.history = new HistoryRoute() // 当前路由的状态
    this.init()
  }
  init() {
    if (this.mode === 'hash') {
      location.hash ? '' : location.hash = '/'
      window.addEventListener('load', () => {
         this.history.current = location.hash.slice(1)
      })
      window.addEventListener('hashchange', () => {
        this.history.current = location.hash.slice(1)
      })
    } else {
      location.pathname ? '' : location.pathname = '/'
      window.addEventListener('load', () => {
        this.history.current = location.pathname
      })
      window.addEventListener('popState', () => {
        this.history.current = location.pathname
      })
    }
  }
  createMap(routes) {
    return routes.reduce((pre, cur) => {
      pre[cur.path] = cur.component // { '/home': Home }
      return pre
    }, {})
  }
}
VueRouter.install = function(v) {
  Vue = v
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.router) { // 如果是根组件
        this._root = this
        this._router = this.$options.router

        Vue.util.defineReactive(this, 'xxx', this._router.history)
      } else { // 如果是子组件
        this._root = this.$parent && this.$parent._root
      }
      // 没有则添加$route属性
      Object.defineProperty(this, '$router', {
        get() {
          return this._root._router // 其实就是VueRouter实例
        }
      })
      Object.defineProperty(this, '$route', {
        get() {
          return this._root._router.history.current // 其实就是VueRouter实例
        }
      })
    },
  })
  Vue.component('router-link', {
    // 编译成a标签
    props: {
      to: String
    },
    render(h) {
      // return h('a', {}, '首页')
      let mode = this._self._root._router.mode
      let to = mode === 'hash' ? '#' + this.to : this.to
      // h(编译成什么，添加什么属性, 渲染的内容（插槽）)
      return h('a', {attrs: { href: to }}, this.$slots.default)
    }
  })

  Vue.component('router-view', {
    // 编译成a标签
    // render(h) {
    //   return h('h1', {}, '首页视图')
    // }
    render(h) {
      let current = this._self._root._router.history.current
      let routeMap = this._self._root._router.routesMap
      return h(routeMap[current])
    }
  })
}
export default VueRouter

// class Vue {
//   constructor() {
//     _installedPlugins: ''
//   }
// }
// // Vue.use 源码：帮助组件去执行
// // use只认install
// // plugin要不就是对象里面具备install，要不本身被作为install方法
// // 最终目的都是为了把Vue传给plugin
// Vue.use = function(plugin) {
//   // 保证一个插件只使用一次
//   const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
//   if (installedPlugins.indexOf(plugin) > -1) {
//     return this
//   }
//   const args = toArray(arguments, 1)
//   // 装载Vue至数组头部
//   args.unshift(this)
//   if (typeof plugin.install === 'function') {
//     plugin.install.apply(plugin, args)
//   } else if (typeof plugin === 'function') { 
//     // 如果plugin本身就是函数，就将其作为install方法
//     plugin.apply(null, plugin, args)
//   }
//   installedPlugins.push(plugin)
//   return this
// }