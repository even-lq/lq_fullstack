let shallowCopy = function(obj) {
  // 只拷贝对象
  if (typeof obj !== 'object') {
    return;
  }

  // 数组 ？ 对象
  let newObj = obj instanceof Array ? [] : {}
  // 遍历对象：forin （会遍历至原型）
  // 遍历数组： forof （没有迭代器，不可以遍历对象）
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // hasOwnProperty排除原型上的属性或方法对象
      newObj[key] = object[key];
    }
  }
  return newObj
}