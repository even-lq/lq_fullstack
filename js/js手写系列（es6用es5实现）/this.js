let a = {
  b: function () {
    // name(() => {
    //   console.log(this);
    // })
    let fdss = 'fdsf'
    // c.d(e.f);
    c.d(() => {
      console.log(this, fdss);
    })
  },
};



// let c = {
//   d: function (callback) {
//     callback();
//   },
// };

// let e = {
//   f: function () {
//     console.log(this);
//   },
// };

a.b();
