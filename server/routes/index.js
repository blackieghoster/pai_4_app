var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200)

  res.json({
    'name': 'Natalia',
    'msg': 'hello!'
  });
});

module.exports = router;
