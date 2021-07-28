/*
  完整版assign：
    1. 目标对象 浅拷贝了 源对象的 所有可枚举属性
    2. 返回目标对象
    3. 源对象可以有多个
*/ 
Object.defineProperty(Object, "myAssign", {
  enumerable: false,
  configurable: true,
  writable: true,
  value: function (target) {
    "use strict";
    if (target === undefined || target === null)
      throw new TypeError("Cannot convert first argument to object");
    var to = Object(target);
    for (var i = 1; i < arguments.length; i++) {
      var nextSource = arguments[i];
      if (nextSource === undefined || nextSource === null) continue;
      var keysArray = Object.keys(Object(nextSource));
      for (
        var nextIndex = 0, len = keysArray.length;
        nextIndex < len;
        nextIndex++
      ) {
        var nextKey = keysArray[nextIndex];
        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable)
          to[nextKey] = nextSource[nextKey];
      }
    }
    return to;
  },
});

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.myAssign(target, source, {d: 8, e: 9});

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
