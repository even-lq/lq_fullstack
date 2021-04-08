function validateStackSequences(pushed: number[], popped: number[]): boolean {
  if (popped.length === pushed.length) {

    let i = 0
    while (pushed.length) {

      let current = popped[i]
      let index = pushed.indexOf(current)

      let next = popped[++i]
      if (next === pushed[index + 1] || next === pushed[index - 1]) {
        pushed.splice(index, 1)
      } else {
        return false
      }
    }
    return true
  }
  return false
};

console.log(validateStackSequences([], []));
