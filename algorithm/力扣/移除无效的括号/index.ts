function minRemoveToMakeValid(s: string): string {
  let stack: string[] = []
  let queue: string[] = []
  let res = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ')') {
      stack.push(s[i])
    }
    else {
      while (stack.length) {
        let s1 = stack.pop()
        if (s1 === '(') {
          stack.push('A')
          while (queue.length) {
            stack.push(queue.pop())
          }
          stack.push('B')
          break;
        } else {
          queue.push(s1)
        }
      }
      while (queue.length) {
        stack.push(queue.pop())
      }
    }
  }
  return res = stack.join('').replace(/[\(\)]/g, '').replace(/A/g, '(').replace(/B/g, ')')
};


console.log(minRemoveToMakeValid("a)b(c)d"));
