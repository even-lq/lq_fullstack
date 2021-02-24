let fetch = require('node-fetch')

function* gen() {
  let r1 = yield fetch('https://api.github.com/users/github')
  let r2 = yield fetch('https://api.github.com/users/github/followers')
  let r3 = yield fetch('https://api.github.com/users/github/repos')
  console.log([r1.bio, r2[0].login, r3[0].full_name].join('\n'));
}

function run(gen) {
  let g = gen()
  function next(data) {
    let res = g.next(data)

    if (res.done) return 
    res.value.then(function (data) {
      return data.json()
    }).then(function (data) {
      next(data) 
    })
  }

  next()
}

run(gen)