var validateStackSequences = function (pushed, popped) {
  let stack = []
  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i])
    if (stack[0] === popped[0]) {
      console.log(stack[i]);
      stack.pop()
      popped.shift()
    }
  }
  console.log(stack);
  for (let i = stack.length - 1; i > 0; i--) {
    if (stack[i] === popped[0]) {
      stack.pop()
      popped.shift()
    }
  }
  console.log(stack);

  return stack.length === 0
};

// console.log(validateStackSequences([1, 2, 3, 4, 5],
//   [4, 5, 3, 2, 1]));
console.log(validateStackSequences([2, 1, 0],
  [2, 1, 0]));