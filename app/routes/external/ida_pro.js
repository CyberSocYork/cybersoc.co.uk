var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res) {

  res.redirect('https://www.hex-rays.com/products/ida/support/download_freeware.shtml');
});

module.exports = router;
