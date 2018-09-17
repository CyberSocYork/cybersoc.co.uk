var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {

  res.download('./secrets/filestore/downloader');
});

module.exports = router;
