var arr = [0, 1, 2]
arr[10] = 10

arr.filter(function(x) {
  return x === undefined
})

// filter的callback 只会在已经赋值的索引，上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用
console.log(arr.filter(function (x) {
  return x === undefined
}));// []