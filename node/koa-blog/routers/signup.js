const router = require('koa-router')();
const userModel = require('../lib/mysql');
// const controller = require('../controller/c-signin');

router.get('/signup', async (ctx, next) => {
  // 加载到 views/signup.ejs 文件 
  // 第二个参数是所需要传递的参数
  await ctx.render('signup', {
    session: ctx.session
  })
})

module.exports = router