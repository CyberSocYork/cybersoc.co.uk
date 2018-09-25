var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res) {

  res.download('./resources/magicnumber');
});

module.exports = router;
