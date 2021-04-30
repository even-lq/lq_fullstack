const express = require("express");
const path = require('path');
const api = require("./api/captcha");
const app = express();
const port = 3000;

// cookie解析
// const cookieParase = require("cookie-parser");
// app.use(cookieParase());

// 引入ejs模板引擎
app.set("views", path.join(__dirname, "views")); // 声明模板的路径
app.set("view engine", "ejs"); // 设置模板引擎为ejs

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/captcha", (req, res) => {
  api.createCaptcha(req, res);
});


app.get("/login", (req, res) => {
  res.render('login', {

  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
