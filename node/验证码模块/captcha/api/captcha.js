const svgCaptcha = require("svg-captcha");
module.exports = {
  createCaptcha(req, res) {
    var captcha = svgCaptcha.create({
      // 翻转颜色
      inverse: false,
      // 字体大小
      fontSize: 36,
      // 噪声线条数
      noise: 2,
      // 宽度
      width: 80,
      // 高度
      height: 30,
    });
    // 保存到session,忽略大小写 会话对象：每一个用户都有一个session对应
    req.session = captcha.text.toLowerCase();
    console.log(req.session); //0xtg 生成的验证码
    //保存到cookie 方便前端调用验证
    res.cookie("captcha", req.session); // express cookie， key-value形式，还可以设置options，本质上是响应头的Set-Cookie
    res.setHeader("Content-Type", "image/svg+xml");

    res.write(String(captcha.data)); // 响应体， String(captcha.data) svg标签
    // 第一次调用 response.write() 时，它会将缓冲的响应头信息和主体的第一个数据块发送给客户端。
    // 第二次调用 response.write() 时，Node.js 假定数据将被流式传输，并分别发送新数据。
    // 也就是说，响应被缓冲到主体的第一个数据块。
    res.end();
    // 此方法向服务器发出信号，表明已发送所有响应头和主体，该服务器应该视为此消息已完成。
    // 必须在每个响应上调用此 response.end() 方法。
    // 如果指定了 data，则相当于调用 response.write(data, encoding) 之后再调用 response.end(callback)。
    // 如果指定了 callback，则当响应流完成时将调用它。
  },
};