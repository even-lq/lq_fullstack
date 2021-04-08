function validPalindrome(s: string): boolean {
  let dirty = false
  while (s.length) {
    if (s[0] === s[s.length - 1]) {
      s = s.slice(1, -1)
    } else {
      if (dirty === true) {
        console.log(s);

        return false
      } else {
        dirty = true
        if (s[0] === s[s.length - 2]) {
          s = s.slice(1, -2)
        }
        else if (s[1] === s[s.length - 1]) {
          s = s.slice(2, -1)
        } else {
          return false
        }
      }
    }

  }
  return true
};

console.log(validPalindrome('asabccbsa'));
