var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res) {

  res.redirect('https://docs.google.com/presentation/d/14JpoCyUDuzEBeYesttZGsH0h6GMY68cpwZOKkMB6tPU/edit?usp=sharing');
});

module.exports = router;
