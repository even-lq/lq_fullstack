let arr = ["1", 1, 2, 3, 4, 5, 6, 1, 2, 3];
function unique(arr) {
  var obj = {};
  return arr.filter(function (item, index, arr) {
    return obj.hasOwnProperty(typeof item + item)
      ? false
      : (obj[typeof item + item] = true);
  });
}
// var arr = [
//   1,
//   1,
//   "true",
//   "true",
//   true,
//   true,
//   15,
//   15,
//   false,
//   false,
//   undefined,
//   undefined,
//   null,
//   null,
//   NaN,
//   NaN,
//   "NaN",
//   0,
//   0,
//   "a",
//   "a",
//   {},
//   {},
// ];
console.log(unique(arr));
// unique(arr);
// console.log(arr);
// console.log(unique(arr));