let fetch = require('node-fetch')

function* gen() {
  let url = 'https://api.github.com/users/github'
  let result = yield fetch(url)
  console.log(result.bio);
}

let g = gen() // 返回遍历器对象
let res = g.next() // 执行异步任务的第一阶段 fetch(url), 也就是执行到yield的位置的代码，然后停止，等到下一个next再执行到下一个yield的位置的代码
console.log(res); // { value: Promise { <pending> }, done: false }
res.value.then(function(data) {
  return data.json()
})
.then(function (data) {
  g.next(data)
})