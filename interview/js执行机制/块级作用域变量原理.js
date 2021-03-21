function foo() {
  var a = 1
  let b = 2
  {
    let b = 3
    var c = 4
    let d = 5
  }
  console.log(a); // 1
  console.log(b); // 3 
  console.log(b); // 2
  console.log(c); // 4
  console.log(d); // error
}
foo()
