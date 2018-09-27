var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res) {

  res.redirect('https://drive.google.com/open?id=1IjcdrxYNUu1Y7m3Gtm7GZxMTpf3ZxFvQ');
});

module.exports = router;
