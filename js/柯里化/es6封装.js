//普通say函数
function say(company, academy, name) {
  console.log(`我的公司是${company}, 专业是${academy}, 名字是${name}`)
}
//柯里化
function say1(company) {
  return function (academy) {
    return function (name) {
      console.log(`我的公司是${company}, 专业是${academy}, 名字是${name}`)
    }
  }
}

//封装一个公用函数柯里化的方法
//参数fn:被柯里化的函数
function curry(fn) {
  //记录fn的参数个数
  let len = fn.length;
  return function temp() {
    //收集本地传递参数
    let args = [...arguments];
    if (args.length >= len) {
      return fn(...args);
    } else {
      return function () {
        return temp(...args, ...arguments);
      }
    }
  }
}

let r = curry(say)
r('a')('b')('c')