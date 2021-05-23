// 手写Object.assign()
/*
  Object.assign()返回的对象拥有target和source的非重复属性，当属性重复时，source覆盖target
  核心思想：
    1. target变动了
    2. target是returnedTarget的浅拷贝
*/

function simpleAssign(target, source) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key];
    } 
  }
  return target;
}
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = simpleAssign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
console.log(target === returnedTarget);