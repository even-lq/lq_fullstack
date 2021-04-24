// let arr = []
// console.log(arr.__proto__ === Array.prototype);
// console.log(Object.prototype === arr.__proto__.__proto__);

function instance_of(l, r) {
  l = l.__proto__;
  let p = r.prototype;
  while (true) {
    if (l === null) {
      return false;
    }
    if (l === p) {
      return true;
    }
    l = l.__proto__;
  }
}
let arr = [];
console.log(instance_of(arr, Array));
