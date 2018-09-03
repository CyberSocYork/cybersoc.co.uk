var express = require('express');
var router = express.Router();


/* REDIRECT page. */
router.get('/', function(req, res) {
  console.log(req.query.id);
  if (req.query.id) {
      switch (req.query.id) {
          case '1':
              res.redirect('/');
              break;
          case '2':
              res.redirect('https://www.yusu.org/groups/cybersoc');
              break;
          default:
              res.redirect('/');
      }
    
  }
  

   
  
});

module.exports = router;
