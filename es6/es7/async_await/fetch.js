// 异步获取数据写法对比
// fetch promise
// function fetchData() {} // 获取数据

// function fetch() {
//   return {
//     fetchData()
//     .then(() => {
//       return 'done'
//     })
//   }
// }

// fetch async
// async function fetch() {
//   await fetchData()
//   return 'done'
// }

// 普通错误处理
// function fetch() {
//   try {
//     fetchData()
//     .then(result => {
//       const data = JSON.parse(result)
//     })
//     .catch(err => {
//       console.log(err); // 接口请求错误
//     })
//   } catch (error) {
//     console.log(error); // 代码执行错误
//   }
// }

// async 错误处理
async function fetch() {
  try {
    // 因为fetchData()返回是有resolve或reject的方法的promise对象，而async没有分支情况
    // 所以直接捕获resolve或reject的结果
    const data = JSON.parse(await fetchData())
  } catch (error) {
    console.log(error); // 代码执行错误
  }
}
