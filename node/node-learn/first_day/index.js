console.log('hello world');
console.log(new Date());
console.log(Math);
console.log(setTimeout);
console.log(setInterval);


// console.log(requestAnimationframe); // 浏览器运行的下一帧，因为不是浏览器环境，所以无法打印
// console.log(setImmediate); // node环境下requestAnimationframe的替代

console.log(__filename); // 获取当前运行的脚本所在的位置
console.log(__dirname); // 获取当前运行的脚本所在的目录位置

// 进程对象
console.log(process);