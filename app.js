var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./routes/index');
var newartist = require('./routes/newartists');
var search = require('./routes/search');
var aindex = require('./routes/artistindex');

app.post('/artist/create', function (req, res){
  var collection = global.db.collection('musicinfo');
  collection.save(req.body, function () {
    res.redirect('/')
  });
})

require('./lib/mongodb');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', index);
app.use('/newartists', newartist);
app.use('/search', search);
app.use('/aindex', aindex);
app.use(express.static('www'));

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%d', port);
});
