var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient
const util = require('util')


/* GET home page. */
router.get('/', function(req, res) {
  MongoClient.connect(util.format('mongodb://%s:%s@ds263660.mlab.com:63660/events_db',process.env.DB_USER,process.env.DB_PASSWORD), (err, database) => {
    if (err) return console.log(err);
    var db = database.db("events_db")
    var event = db.collection('events')

    var results = event.find({}).toArray(function (err, results) {

      res.render('index',{'events' : results} );

    })

});

});

module.exports = router;
