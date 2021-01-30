const router = require('koa-router')()
const { userLogin } = require('../controllers/mySqlConfig')

router.prefix('/users')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })
router.post('/userLogin', async() => {
  // 数据库查询是异步的，所以async
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd

  // 查询
  await userLogin(_username, _userpwd).then(res => {
    console.log(res);
  })
})

module.exports = router
