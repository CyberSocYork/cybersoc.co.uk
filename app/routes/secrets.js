var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res) {

  res.render('secrets');
});

module.exports = router;
