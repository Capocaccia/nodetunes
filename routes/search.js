var express = require('express');
var router = express.Router();
var url = require('url')

router.get('/', function (req, res) {
  res.render('search')
})

router.get('/results', function (req, res) {
  var params = req._parsedUrl.query.split('=')
  var key = "'" + params[0] + "'"
  var value = "'" + params[1] + "'"
  var collection = global.db.collection('musicinfo');
  collection.find({key: value}, function(err, res){
  })
res.redirect('/search')
})

module.exports = router;
