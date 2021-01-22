const User_col = require('../models/user')
const Password_col = require('../models/password')

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
}

module.exports = {
  login
}
