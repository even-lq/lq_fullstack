let fetch = require('node-fetch')

function* gen() {
  let r1 = yield fetch('https://api.github.com/users/github')
  let r2 = yield fetch('https://api.github.com/users/github/followers')
  let r3 = yield fetch('https://api.github.com/users/github/repos')
  console.log([r1.bio, r2[0].login, r3[0].full_name].join('\n'));
}


let g = gen()
let res1 = g.next()
res1.value.then(function(data) {
  // data就是fetch resolve出来的值
  // console.log(data);
  return data.json()
}).then(function (data) {
  // data必须传，不然无法保存r1的结果，在第七行就无法打印
  return g.next(data).value
}).then(function (data) {
  // console.log(data);
  return data.json()
}).then(function (data) {
  return g.next(data).value
}).then(function (data) {
  // console.log(data);
  return data.json()
}).then(function (data) {
  g.next(data)
})