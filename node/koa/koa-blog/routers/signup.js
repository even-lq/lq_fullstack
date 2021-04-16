const router = require('koa-router')();
// const userModel = require('../lib/mysql');
const controller = require('../controller/c-signup');

// 注册模板
router.get('/signup', async (ctx, next) => {
  // 加载到 views/signup.ejs 文件 
  // 第二个参数是所需要传递的参数
  await ctx.render('signup', {
    session: ctx.session
  })
})

// 注册响应
router.post('/signup', controller.postSignup)
module.exports = router