const router = require('koa-router')()
const { userLogin, findUser, userRegister } = require('../controllers/mySqlConfig')
const { findNoteList, findNoteDetail } = require('../controllers/findNote')
const { inserNote } = require('../controllers/inserNote')

router.prefix('/users')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })
router.post('/userLogin', async (ctx, next) => {
  // 数据库查询是异步的，所以async
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd

  // 查询
  await userLogin(_username, _userpwd).then(res => {
    console.log(res);
    let r = '';
    if (res.length) {
      r = 'ok';
      let result = {
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].username,
      }
      ctx.body = {
        code: '80000',
        data: result,
        mess: '登录成功'
      }
    } else {
      r = 'error';
      ctx.body = {
        code: '80004',
        data: r,
        mess: '账号或密码错误'
      }
    }
  }).catch(err => {
    ctx.body = {
      code: '80002',
      data: err
    }
  })
})

router.post('/userRegister', async (ctx, next) => {
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd
  let _nickname = ctx.request.body.nickname
  if (!_username || !_userpwd || !_nickname) {
    ctx.body = {
      code: '80001',
      mess: '用户名密码和昵称不能为空'
    }
    return
  }
  await findUser(_username).then(async (res) => {
    console.log(res);
    if (res.length === 0) {
      return await userRegister([_username, _userpwd, _nickname])
    }
  })
    .then(res => {
      console.log(res);
      if (res === undefined) {
        console.log('真邪门');
        ctx.body = {
          code: '80005',
          mess: '该用户已被注册'
        }
        return
      }
      let r = ''
      if (res.affectedRows != 0) {
        r = 'ok'
        ctx.body = {
          code: '80000',
          data: r,
          mess: '注册成功'
        }
        return
      }
    }).catch(err => {
      ctx.body = {
        code: '80007',
        data: err
      }
    })

})

// 根据分类查找文章的列表
router.post('/findNoteListByType', findNoteList)

// 根据文章id查找文章详情
router.post('/findNoteDetailById', findNoteDetail)

// 发布笔记
router.post('/inserNote', inserNote)


module.exports = router
