function generateParenthesis(n: number): string[] {
  let res: string[] = []
  function generate(l: number, r: number, str: string) {
    if (str.length === 2 * n) {
      res.push(str)
      return
    }
    l > 0 && generate(l - 1, r, str + '(')
    l < r && generate(l, r - 1, str + ")")
  }
  generate(n, n, '')
  return res
};
console.log(generateParenthesis(3));
