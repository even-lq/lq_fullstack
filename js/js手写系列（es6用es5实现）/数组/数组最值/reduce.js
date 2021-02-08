let arr = [1, 2, 3, 2, 0, 5]
function max(prev, next) {
  return Math.max(prev, next)
}

console.log(arr.reduce(max));