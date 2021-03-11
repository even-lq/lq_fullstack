let a = {
  test: function() {
    console.log(this.name);
  }
}
let b = {
  name: 'liqing'
}
a.test.bind(b)()