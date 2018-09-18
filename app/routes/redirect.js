var express = require('express');
var router = express.Router();


/* REDIRECT page. */
router.get('/', function(req, res) {
  console.log(req.query.id);
  if (req.query.id) {
      switch (req.query.id) {
          case 'e7132d': //Banner QR code
              res.redirect('/secrets/qR_c0d3-d40c20deae3f45bc63fba4ae980a3716');
              break;
          case '09276f': // Flyer QR code
              res.redirect('/secrets/qR_c0d3-d40c20deae3f45bc63fba4ae980a3716');
              break;
          default:
              res.redirect('/');
      }

  }




});

module.exports = router;
