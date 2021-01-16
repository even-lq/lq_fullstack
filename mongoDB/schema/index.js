// 数据库驱动
const mongoose = require('mongoose');
// 讲物理的数据存储转变为JSON对象
// Schema类 表的映射
const Schema = mongoose.Schema;
const articleSchema = new Schema({
  title: String,
  date: Date,
  content: String
})
const linkSchema = new Schema({
  name: String,
  href: String,
  newPage: Boolean
})
const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
  emailCode: String,
  createTime: Number,
  articles: [articleSchema],
  links: [linkSchema]
})

// model层 创建名为User的userSchema模型，返回类
const Customer = mongoose.model('Customer', userSchema);
// 表的实例
new Customer({
  name: 'tmp',
  password: '0000',
  email: 'lizhun@163.com',
  emailCode: '12345',
  createTime: Date.now(), // Number类型
  articles: [],
  links: []
}).save(function() {
  // save映射到数据库中
})
// url+端口+数据库名称
mongoose.connect('mongodb://127.0.0.1:27017/test');

var db = mongoose.connection;
db.on('error', function() {
  console.log('db error');
})
// 只打开一次
db.once('open', function () {
  console.log('db opened');
})

