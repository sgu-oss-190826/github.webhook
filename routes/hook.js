var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log('GitHub webhook incoming.', req.body);
});

module.exports = router;
