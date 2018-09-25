var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res) {

  res.redirect('http://www.nationalcrimeagency.gov.uk/publications/760-a-guide-to-the-computer-misuse-act/file');
});

module.exports = router;
