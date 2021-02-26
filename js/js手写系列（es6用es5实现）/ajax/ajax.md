#### readyState的五种状态（axios的拦截操作原理）

0 - (未初始化) 还没有调用send()方法
1 - (载入)已调用send()方法， 正在发送请求
2 - (载入完成) send()方法执行完成，已经接收到全部响应内容
3 - (交互)正在解析响应内容
4 - (完成)响应内容解析完成，可以在客户端调用了

#### encodeURIComponent()

encodeURIComponent()函数通过将一个, 两个，三个或四个表示字符的UTF-8编码的转义序列替换某些字符的每个实例来编码URI(对于由两个“代理”字符组成的字符而言，将仅是四个转义序列)。

UTF-8 => 字符实例

```js
// encodes characters such as ?,=,/,&,:
console.log(`?x=${encodeURIComponent('test?')}`);
// expected output: "?x=test%3F"

console.log(`?x=${encodeURIComponent('шеллы')}`);
// expected output: "?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"
```

#### xhr.send

get的send不需要传值，直接拼接在url后面open即可

