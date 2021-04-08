function maxLen(str: string, arr: string[]) {
  let map = {}
  let res = ''
  for (let i of arr) {
    if (map[i] === undefined) {
      map[i] = 0
    }
    map[i]++
  }
  for (let i = 0; i < str.length; i++) {
    if (str.length - i > res.length) {
      let map1 = { ...map }
      if (map1[str[i]]) {
        let index = i
        let temp = ''
        while (map1[str[index]]) {
          map1[str[index]] = map1[str[index]] - 1
          temp = temp + str[index]
          index++
        }
        res = res.length < temp.length ? temp : res
      }
    }
  }

  return res
}

console.log(maxLen('AFDEFG', ['F', 'D', 'G', 'E']));
