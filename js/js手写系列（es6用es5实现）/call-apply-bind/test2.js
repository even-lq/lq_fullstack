let obj = {
  fn: function(params) {
    this.name = params
  },
  ftest: function() {
    var self = this
    var fnBound = function(name) {
      this.name = name
      console.log(self.prototype);
    }
    return fnBound
  }
}
obj.fn('liqing')
console.log(obj);
let a = obj.ftest()
let b = new a('djsakd')
// console.log(b);

function name(params) {
  
}
console.log(name.prototype);