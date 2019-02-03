var express = require('express');
var router = express.Router();

/* GET CTF page. */
router.get('/', function(req, res) {
    
  res.render('CTF');
});



module.exports = router;
