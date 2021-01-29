const userModel = require('../lib/mysql');
const md5 = require('md5')
const fs = require('fs')

exports.postSignup = async (ctx) => {
  // 获取前端传过来的数据
  // 插入到数据库中
  let { name, password, repeatpass, avator } = ctx.request.body
  // 把前端传过来的头像写到内存中
  let base64Data = avator.replace(/^data:image\/\w+;base64,/, ""),
    dataBuffer = new Buffer(base64Data, 'base64'),
    getName = Number(Math.random().toString().substr(3)).toString(36) + Date.now(),
    upload = await new Promise((reslove, reject) => {
      fs.writeFile('./public/images/' + getName + '.png', dataBuffer, err => {
        if (err) {
          throw err;
          reject(false)
        };
        reslove(true)
        console.log('头像上传成功')
      });
    });
  if (upload) {
    await userModel.insertData([name, md5(password), getName + '.png', new Date().getTime()])
      .then(res => {
        console.log(res);
        ctx.body = {
          code: 200,
          message: '注册成功'
        }
      })
  }
}