function canConstruct(s: string, k: number): boolean {
  if (k === 0) return false
  let target = {}
  for (let i = 0; i < s.length; i++) {
    if (target[s[i]] === undefined) {
      target[s[i]] = 1
    } else {
      delete target[s[i]]
    }
  }
  return Object.keys(target).length <= k && s.length >= k
};




