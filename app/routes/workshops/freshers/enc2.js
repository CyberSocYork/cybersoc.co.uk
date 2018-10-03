var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res) {

  res.redirect('https://docs.google.com/document/d/1E961sTHSCjgR0--XqLD0fif9MGqXHZWADyOzifkBCxo/edit?usp=sharing');
});

module.exports = router;
