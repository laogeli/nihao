var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('second', function(req, res, next) {
  var a = 123;
});

module.exports = router;
