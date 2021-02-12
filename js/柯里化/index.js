function add(a, b) {
  return a + b
}
add(1, 2)

// let addCurry = curry(add)
// addCurry(1)(2)  

function ajax(type, url, data) {
  let xhr = new XMLHttpRequest()
  xhr.open(type, url, data)
  xhr.open(data)
}

ajax('POST', 'www.test.com', 'name="wn"')
ajax('POST', 'www.test2.com', 'name="wn"')
ajax('POST', 'www.test3.com', 'name="wn"')

// curry
let ajaxCurry = curry(ajax) 

// post请求
let post = ajaxCurry('POST')
// post('www.test3.com', 'name="wn"')

// 如果都是post请求并且发往同一个地址，则用postFormTest即可
let postFormTest = post('www.test3.com')
postFormTest('name="wn"')



let person = [{name: 'a'}, {name: 'tt'}]
let name = person.map(function(item) {
  return item.name
})

let prop = curry(function(key, obj) {
  return obj[key]
})
let name2 = person.map(prop('name'))



