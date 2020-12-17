function Bop() {
  
}
function Nop() {
  console.log('hhh');
}
Nop.prototype = Bop.prototype
let a = new Nop()
console.log(a.prototype);