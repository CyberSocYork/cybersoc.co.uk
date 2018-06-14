var express = require('express');
var router = express.Router();

/* GET Contacts Page. */
router.get('/', function(req, res) {
    
  res.render('contact');
});

module.exports = router;
