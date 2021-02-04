const User_col = require('../models/user')
const Password_col = require('../models/password')
const passport = require('../utils/passport')
const { v1:uuidv1 } = require('uuid')
const config = require('../../config')

const login = async (ctx) => {
  // ctx.body = 'aaaa'
  console.log(ctx.request.body);
  // 连接数据库，并查询数据
  let req = ctx.request.body
  const user = await User_col.findOne({
    account: req.username
  })
  // 查找账号
  if (!user) {
    ctx.status = 200
    ctx.body = {
      code: 0,
      msg: '账号不存在'
    }
    return
  }

  // 查找密码
  const userId = user.userId
  const password = await Password_col.findOne({
    userId
  }, {
    hash: 1
  })
  // 如果账号表的userId与密码表的userId相同：账号和密码都在库中
  // 判断传过来的密码是否匹配
  // 解密（bcrypt）
  const match = await passport.validate(req.password, pass.hash)
  ctx.status = 200
  if (match) {
    ctx.body = {
      code: 1,
      msg: '登录成功',
      data: user
    }
    return
  }
  ctx.body = {
    code: 0,
    msg: '密码错误',
  }
}

const register = async (ctx) => {
  let req = ctx.request.body
  const user = await User_col.findOne({
    account: req.username
  })
  // 查找账号
  ctx.status = 200
  if (user) {
    ctx.body = {
      code: 0,
      msg: '账号已存在'
    }
    return
  }

  // 插入新用户
  const userId = uuidv1()
  const newUser = await User_col.create({
    userId,
    account: req.username
  })

  if (newUser) {
    // 插入密码
    const hash = await passport.encrypt(req.password, config.saltTimes)
    const result = await Password_col.create({
      userId,
      hash
    })
    console.log(result);
    if (result) {
      ctx.body = {
        code: 1,
        msg: '注册成功',
        data: {
          userId: newUser.userId,
          account: newUser.account
        }
      }
    }
  }
}
module.exports = {
  login,
  register
}
