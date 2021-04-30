var a = {
  e:'lqd',
  b: function() {
    c.d();
  },
};

var c = {
  e: 'lq',
  d:() => {
    console.log(this); // window
  }
}

a.b()
// c.d()