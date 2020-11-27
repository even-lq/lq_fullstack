let a = [1, 3, 5, 0, 7]
let temp = 0;
for(let i = 0; i< a.length; i++) {
  if (i + 1 >= a.length) break;
  for (let j = i; j < a.length; j++) {
    if(a[i] > a[j+1]) {
      temp = a[i]
      a[i] = a[j+1]
      a[j+1] = temp
    }
  }
}
console.log(a);