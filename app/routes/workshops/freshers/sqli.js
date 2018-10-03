var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res) {

  res.redirect('https://docs.google.com/presentation/d/1BjGXKt75w-hny9zXSTwyaSlzuQUmdyIdxasmOoTel3Q/edit?usp=sharing');
});

module.exports = router;
