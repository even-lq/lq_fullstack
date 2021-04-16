// exports 抛出来的是一个对象
exports.postSignin = async (ctx) => {
  // 展示登录界面
  await ctx.render('signin', {
    session: ctx.session // 模板文件生效
  })
}