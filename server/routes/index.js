var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '我改了哈哈哈哈啊啊哈哈' });//通过res.render渲染了index，跳到了index.html
});

module.exports = router;
