var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res) {

  res.redirect('https://docs.google.com/document/d/199rvxCDOZpWS392A8PWb3xS0JYJs55jayCnL__l6iEg/edit?usp=sharing');
});

module.exports = router;
