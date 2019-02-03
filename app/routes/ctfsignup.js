var express = require('express');
var router = express.Router();



/* Redirect to sign up instructions. */
router.get('/', function(req, res) {
    
    res.redirect('https://docs.google.com/document/d/1EmIccviHPWjD0LnLJ1zUecMU3frtjhhfVyKzTni98Gg/edit?usp=sharing');
  });
  

module.exports = router;
