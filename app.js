var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./routes/index');
var newartist = require('./routes/newartists');
var search = require('./routes/search');
var aindex = require('./routes/artistindex');

require('./lib/mongodb');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', index);
app.use('/newartists', newartist);
app.use('/search', search);
app.use('/aindex', aindex);

app.post('/artist/create', function (req, res){
  var collection = global.db.collection('musicinfo');
  collection.save(req.body, function () {
    res.redirect('/')
  });
})

app.get('/search/results', function (req, res) {
  res.write('Hello World')
  console.log(req.params)
})


var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%d', port);
});
