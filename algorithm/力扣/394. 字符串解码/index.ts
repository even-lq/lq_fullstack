function decodeString(s: string) {
  let queue = [];
  for (let i = s.length - 1; i >= 0; i--) {
    if (!/[\[0-9]/.test(s[i])) queue.push(s[i]);
    if (s[i] === '[') {
      let s1 = '';
      while (queue.length) {
        let pop = queue.pop();
        if (pop === ']') {
          queue.push(s1.repeat(+s[i - 1]));
          break;
        } else {
          s1 += pop;
        }
      }
    }
  }
  return queue.reverse().join('');
}
console.log(decodeString('3[a2[c]]'));
