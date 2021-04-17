// 打造ctx

let proto = {

}

function defineGetter(prop, name) {
  // 让prop对象去代理name，代理成prop.name
  // __defineGetter__ 方法可以将一个函数绑定在当前对象的指定属性上，当那个属性的值被读取时，你所绑定的函数就会被调用
  proto.__defineGetter__(name, function() {
    // 使this代理成ctx
    return this[prop][name]
  })
}

defineGetter('request', 'url') // url == request.url
defineGetter('request', 'path')

module.exports = proto