// 建一个函数，将str传入输出666
// 法一：
let obj = {
  a: {
    b: {
      c: 666
    }

  }
}
var str = 'a.b.c';
function objMethod(str, obj) {
  let a;
  str.split('.').forEach(element => {
    if (obj.hasOwnProperty(element)) {
      a = obj[element]
      obj = a
    }
  });
  return a;
}
objMethod(str, obj)
// 法二：
eval('obj.' + str)