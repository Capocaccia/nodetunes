var express = require('express')
var app = express()
var bodyParser = require('body-parser');

require('./lib/mongodb');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.render('newartists');
})
// I have this rendering newartists right now so it just doesnt display blank at the root route
// It will be refactored to display each artists info

app.get('/newartist', function (req, res) {
  res.render('newartists')
})

app.post('/artist/create', function (req, res){
  var collection = global.db.collection('musicinfo');

  collection.save(req.body, function () {
    res.redirect('/')
  });
})

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%d', port);
});
