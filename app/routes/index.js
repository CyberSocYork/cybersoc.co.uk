var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient


/* GET home page. */
router.get('/', function(req, res) {
  MongoClient.connect('mongodb://localhost:27017', (err, database) => {
    if (err) return console.log(err);
    var db = database.db("events_DB")
    var event = db.collection('event')

    var results = event.find({}).toArray(function (err, results) {

      res.render('index',{'events' : results} );

    })

});

});

module.exports = router;
