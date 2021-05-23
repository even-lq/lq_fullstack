let arr = ["1", 1, 2, 3, 4, 5, 6, 1, 2, 3];
//1 for循环法 O(n^2)
/*function unique(arr) {
  if (!Array.isArray(arr)) {
    return arr;
  }
  let res = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    let flag = true
    for (let j = 0; j < res.length; j++) {
      if (arr[i] === res[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      res.push(arr[i]);
    }
  }
  return res;
}*/

//2 api寻址
// 1. indexOf
/*function unique(arr) {
  if (!Array.isArray(arr)) {
    return arr;
  }

  let res = [];
  for (let i = 0; i < arr.length; i++) {
    (res.indexOf(arr[i]) === -1) && res.push(arr[i])
  }
  return res
}*/

// 2. filter
/*function unique(arr) {
  if (!Array.isArray(arr)) {
    return arr;
  }

  // Array.prototype.filter.call
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
  });
}*/

// 3. includes
/*function unique(arr) {
  if (!Array.isArray(arr)) {
    return arr;
  }

  let res = [arr.shift()]
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (!res.includes(element)) {
      res.push(element);
    }

  }
  return res;
}*/

//3 对象法：1. Object.keys O(2n)
// Object.keys返回的数组是唯一的
/*function unique(arr) {
  let obj = {};
  arr.forEach((item) => {
    obj[item] = "";
  });
  let arr1 = Object.keys(obj)
  let arr2 = arr1.map((item) => {
    item = parseInt(item);
    return item;
  })
  return arr2;
}*/

// 2. 对象(或者map)
//   1. map/对象
// function unique(arr) {
//   if (!Array.isArray(arr)) {
//     return arr;
//   }

//   let res = [],
//     map = new Map(), obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     // if (!map.has(arr[i])) {
//     //   res.push(arr[i]);
//     //   map.set(arr[i], '');
//     // }

//     // 不适用map无法区分字符串和数字，'1'和1被认为是重复的
//     // [ '1', 2, 3, 4, 5, 6 ]
//     /*if (!obj[arr[i]]) {
//       res.push(arr[i]);
//       obj[arr[i]] = 1;
//     }*/

//     // 正确用法
//     if (!obj[typeof(arr[i]) + arr[i]]) {
//       obj[typeof(arr[i]) + arr[i]] = arr[i]
//     }
//   }
//   // return res;
//   return Object.values(obj)
// }

//   2. 对象终极解法
/*function unique(arr) {
  let obj = {};
  return arr.filter(function (item, index) {
    obj.hasOwnProperty(typeof item + item)
      ? false
      : (obj[typeof item + item] = true);
  });
}*/

//  2. set
/*function unique(arr) {
  if (!Array.isArray(arr)) {
    return arr;
  }

  // 转数组:ES6 [...]
  //        ES5 Array.from(new Set(arr))
  // return [...new Set(arr)];
  return Array.from(new Set(arr));
}*/

// 4 排序
function unique(arr) {
  if (!Array.isArray(arr)) {
    return arr;
  }
  let res = [];
  arr = arr.sort()
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      res.push(arr[i]);
    }
  }
  return res
}

console.log(unique(arr));
