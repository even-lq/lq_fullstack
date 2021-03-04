// stack
const stack = []
stack.push('a')
stack.push('b')
stack.push('c')
stack.push('d')
while (stack.length) {
  const top = stack[stack.length - 1]
  console.log(top);
  stack.pop()
}
