function makeGood(s: string): string {
  let stack: string[] = []
  for (let i of s) {
    if (isEqual(i, stack[stack.length - 1])) {
      stack.pop()
    } else {


      stack.push(i)
    }
  }
  return stack.join('')
};
function isEqual(a: string, b: string) {
  if (b && a !== b && a.toLowerCase() === b.toLowerCase()) return true
  return false
}

console.log(makeGood('abBAcC'));
