function restoreIpAddresses(s: string): string[] {
  const res: string[] = []
  const dfs = (subRes: string[], len: number) => {
    if (subRes.length === 4 && len === s.length) {
      res.push(subRes.join('.'))
      return
    }
    if (subRes.length === 4 && len < s.length) {
      return
    }
    for (let i = 1; i <= 3; i++) {
      if (len + i > s.length) return
      let str = s.slice(len, len + i)
      if (+str > 255) return
      if (String(+str).length !== str.length) return
      subRes.push(str)
      dfs(subRes, len++)
      subRes.pop()
    }
  }

  dfs([], 0)
  return res
};