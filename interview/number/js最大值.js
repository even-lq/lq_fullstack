var END = Math.pow(2, 53) // 9007199254740992 js的最大值
var START = END - 100
var count = 0
for (var i = START; i <= END; i++) {
  count++
}
console.log(count); // for无限执行， 当i== end时 9007199254740992 == 9007199254740992 再加+1还是9007199254740992，导致死循环
