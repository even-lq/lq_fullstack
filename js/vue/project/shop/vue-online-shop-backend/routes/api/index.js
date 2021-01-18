// 设计RESTFUL：一切皆资源 URL
// url + 请求谓语动词
// GET 查询
// POST 增加
// PUT 修改
// /api/v1/manufacturer GET [{name: '小米'}]
// /api/v1/manufacturer POST body {}
const express = require('express');
const router = express.Router();
const manufacturerController = require('../../controllers/manufacturer');

// 控制层，当访问/manufacturers时的操作
// url 访问的路口
router.get('/manufacturers', manufacturerController.all);
router.get('/manufacturers/:id', manufacturerController.byId);
router.post('/manufacturers', manufacturerController.create);
router.delete('/manufacturers/:id', manufacturerController.remove);
router.put('/manufacturers/:id', manufacturerController.update);
module.exports = router;