// 整合findIndex和findLastIndex
// 关键：循环变量 i++ i-- 即 +1 -1
function createIndexFinder(dir) {
  let len = arr.length
  let index = dir > 0 ? 0 : len - 1
  for (; index >=0 && index < length; index += dir) {
    if (predicate.call(context, arr[index], index, arr)) {
      return index
    }
  }
  return -1
}

let findIndex = createIndexFinder(1)
let findLastIndex = createIndexFinder(-1)