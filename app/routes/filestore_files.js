var fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {

  var file = req.query['file'];
  var user = req.query['user'];
  var pass = req.query['pass'];
  console.log(file);
  switch(file) {
    case "passwords.txt":
      if (user === 'master') {
        if (user === 'master' && pass === 'Cyb3rsocisAwe50me') {
          var troll_face = fs.readFileSync('./secrets/filestore/passwords.txt');
          res.send(troll_face);
        }
        else res.send('Incorrect password');
      }
      else res.send('You do not have permission to view this file');
      break;
    case "test.txt":
      if (user === 'master' || user === 'test') {
        if ((user === 'master' && pass === 'Cyb3rsocisAwe50me') ||
            (user === 'test' && pass === 'Password123')) {
          var test_file = fs.readFileSync('./secrets/filestore/test.txt');
          res.send(test_file);
        }
        else res.send('Incorrect password');
      }
      else res.send('You do not have permission to view this file')
      break;
    case undefined:
      var file_list = fs.readFileSync('./secrets/filestore/file_list.txt');
      res.send(file_list);
      break;
    default:
      res.send('This file does not exist');
      break;
  }
});

module.exports = router;
