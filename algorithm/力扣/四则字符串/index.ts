function sum(str: string) {
  let stack: string[] = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '*' || str[i] === '/') {
      let tempStr = str[i]
      i++

      while (i < str.length && (str[i] !== '+' && str[i] !== '—')) {
        tempStr += str[i]
        i++
      }
      let num = ''
      while (/[0-9]/.test(stack[stack.length - 1])) {
        num = stack.pop() + num
      }
      let temp = `(${num}${tempStr})${i < str.length ? str[i] : ''}`
      stack.push(...temp)
      // i++
    }
    else {
      stack.push(str[i])
    }

  }
  return stack.join('')
}

console.log(sum('11+2-3*4+520/256*45+10/5+8'));
