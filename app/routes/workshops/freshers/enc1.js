var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res) {

  res.redirect('https://docs.google.com/document/d/1N14ClkEPuMh4WRj2TYe0Iix1Jfoo2F3Z0yWz_UamOdg/edit?usp=sharing');
});

module.exports = router;
