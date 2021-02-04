const Router = require('koa-router')
const router = new Router()
const user_controller = require('./../../app/controllers/user_controller')
const config = require('../../config')

// router.post('/login', (ctx) => {
//   ctx.body = 'login page'
// })

router.post('/login', user_controller.login)
router.post('/register', user_controller.register)

module.exports = router