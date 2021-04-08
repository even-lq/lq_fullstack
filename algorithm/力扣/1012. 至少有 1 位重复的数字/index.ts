function numDupDigitsAtMostN(N: number) {
  let key = 0
  for (let i = 0; i <= N; i++) {
    if ([...String(i)].length !== Array.from(new Set([...String(i)])).length) {
      key++
    }
  }
  return key
};
console.log(numDupDigitsAtMostN(38707));

function numDupDigitsAtMostN2(N: number) {
  let key = 0
  let str = String(N)
  let len = str.length
  if (N <= 10) return 0
  function getNumber(max: number, res: string) {
    let len1 = String(+res).length
    let len2 = Array.from(new Set([...String(+res)])).length
    if (len1 !== len2) {
      if (str.indexOf(res) !== 0) key += Math.pow(10, len - res.length)
      else key += +str.slice(res.length) + 1
    } else {
      if (len - res.length > 1) {
        for (let i = 0; i <= max; i++) {
          if (str.indexOf(res + i) !== 0) getNumber(9, res + i)
          else getNumber(+str.slice((res + i).length)[0], res + i)
        }
      } else if (len - res.length === 1) {
        key += len1
      }
    }
  }
  getNumber(+str[0], '')
  if (str.slice(0, -1).length !== Array.from(new Set([...str.slice(0, -1)])).length) {
    return key - 1
  } else {
    let key1 = 0
    for (let i = 0; i < str.slice(0, -1).length; i++) {
      if (str[i] > str[str.length - 1]) {
        key1++
      }
    }
    return key - 1 - key1
  }
};

console.log(numDupDigitsAtMostN2(38707));