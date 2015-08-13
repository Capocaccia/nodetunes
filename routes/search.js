var express = require('express');
var router = express.Router();
var url = require('url')

router.get('/', function (req, res) {
  res.render('search')
})

router.get('/results', function(req, res) {
  var collection = global.db.collection('musicinfo');
  var artistName = new RegExp(req.query.name,"i");
  collection.find({name: artistName}, function(err, cursor) {
    cursor.toArray(function(err, artists) {
      res.send(artists);
    })
    //res.render('templates/artists');
  });
});

module.exports = router;
