function groupArgument(strs) {
  let copyStr = [...strs]
  let map = {}
  for (let i = 0; i < copyStr.length; i++) {
    copyStr[i] =  [...copyStr[i]].sort((a,b)=>a.charCodeAt()-b.charCodeAt()).join('')
  }
  for(let i=0;i<copyStr.length;i++){
    if(!map[copyStr[i]]){
      map[copyStr[i]] = []
    }
    map[copyStr[i]].push(strs[i])
  }
  return Object.values(map)
}

console.log(groupArgument(["eat", "tea", "tan", "ate", "nat", "bat"]));

// let x = 'cba'

// console.log([...x].sort((a,b)=>{
//   console.log(a.charCodeAt());
//   console.log(b);
// }));