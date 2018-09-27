var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res) {

  res.redirect('https://drive.google.com/uc?export=download&id=1aBHRJykGLN_qoH5CgPHFtLn17CkDkFQb');
});

module.exports = router;
