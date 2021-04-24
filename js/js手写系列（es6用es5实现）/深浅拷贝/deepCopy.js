let deepCopy = function (obj) {
  var newObj = obj instanceof Array ? [] : {}
  // 只拷贝对象
  if (typeof obj !== 'object') {
    return;
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // hasOwnProperty排除原型上的属性或方法对象 
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj
}


var object = {
  name: "my",
  getName: {
    b: "fds",
  },
};

let a = deepCopy(object);
object.name = "fds";

console.log(a);
console.log(object);