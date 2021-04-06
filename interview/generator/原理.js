function generator(cb) {
  return (function() {
    var object = {
      next: 0,
      stop: function() {
        
      }
    }
    return {
      next: function () {
        var res = cb(object)
        if (res === undefined) return { value: undefined, done: true }
        return {
          value: res,
          done: false
        }
      }
    }
  })()
}
generator()