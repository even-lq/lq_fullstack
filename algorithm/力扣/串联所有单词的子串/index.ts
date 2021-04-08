function findSubstring<T extends string> (s: string, words: T[]) {
  let obj = {} as { [key in T]: number[] }
  let result: number[][] = []
  let res: number[] = []
  if (!words[0]) return []
  let len = words[0].length
  try {
    words.forEach(word => {
      let s1 = s
      while (~s1.lastIndexOf(word)) {
        obj[word] || (obj[word] = [])
        obj[word].push(s1.lastIndexOf(word))
        s1 = s1.slice(0, s1.lastIndexOf(word))
      }
      if (!obj[word]) throw []
    })
  } catch (e) {
    return []
  }
  let len2 = words.length
  let values = Object.values(obj) as number[][]

  function generate (nums: number[], index = 0) {
    if (index === len2) {
      result.push(nums)
      return
    }
    console.log(index, len2, values)

    values[index].forEach(item => {
      generate([...nums, item], index + 1)
    })
  }
  generate([])
  result.forEach(nums => {
    ;(Math.max(...nums) - Math.min(...nums)) / len === len2 - 1 &&
      res.push(Math.min(...nums))
  })
  return res
}
console.log(
  findSubstring('wordgoodgoodgoodbestxxxword', ['xxx', 'word', 'good', 'best'])
)
