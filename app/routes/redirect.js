var express = require('express');
var router = express.Router();


/* REDIRECT page. */
router.get('/', function(req, res) {
  console.log(req.query.id);
  if (req.query.id) {
      switch (req.query.id) {
          case 'e7132d': 
              //res.redirect('/secrets/qR_c0d3-d40c20deae3f45bc63fba4ae980a3716');
              // redirect to homepage until finished 
              res.redirect('/');
              break;
          case '09276f': //redirect to yusu sign up
              res.redirect('https://www.yusu.org/groups/cybersoc');
              break;
          default:
              res.redirect('/');
      }

  }




});

module.exports = router;
