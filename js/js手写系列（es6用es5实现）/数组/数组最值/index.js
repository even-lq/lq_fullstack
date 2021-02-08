let arr = [1, 2, 3, 2, 0, 5, '6', undefined]
console.log(Math.max(...arr));
console.log(Math.min(...arr));
// Math的缺点：
// 1. undefined不能转为数值，所以不能做
// 2. Math.max() 不传参 infinity
// 3. Math.min() > Math.max()
// 4. 要解构参数
console.log(Math.max(true, '2', null)); // 2
console.log(Math.min(1, '0', {})); // NaN
