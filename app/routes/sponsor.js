var express = require('express');
var router = express.Router();
var ua = require('universal-analytics');

/* Redirect to the sponsor page. */
router.get('/', function(req, res) {

  var visitor = ua('UA-121486268-1');
  visitor.event("Accenture", "Redirect").send()
  res.redirect('https://www.accenture.com/gb-en/careers/graduate-home');
});

module.exports = router;
