function a(){
  let b = 3
  setTimeout(() => {
    console.log(b);
  });
  return ()=>{
    b++
  }
}
a()()