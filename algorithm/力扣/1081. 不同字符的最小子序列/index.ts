function smallestSubsequence(s: string): string {
  let str = ''
  let map = new Map<string, string>()
  for (let i of str) {
    if (!map.has(i)) {
      map.set(i, i)
      str += i
    }
  }
  return str

};