var express = require('express');
var router = express.Router();

/* GET home page. */
// 当访问/api下的根路径时：/api/ 渲染首页
router.get('/', function (req, res, next) {
  res.json({
    mes: 'hello world'
  })
  // res.render('index', { title: 'Express' });
});

module.exports = router;
