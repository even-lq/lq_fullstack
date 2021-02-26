let xhr = new XMLHttpRequest()

// 初始化
// xhr.open(method, url, async) // 请求方式，地址，异步函数
xhr.open('get', 'https://api.github.com/users/github') 
// 发生请求
// xhr.send(data)
xhr.send()
// 设置状态变化回调处理请求结果
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200)  {
    // 4: 响应内容解析完成，可以在客户端调用了
    console.log(xhr.responseText);
  }
}