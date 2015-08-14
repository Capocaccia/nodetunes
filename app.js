var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./routes/index');
var newartist = require('./routes/newartists');
var search = require('./routes/search');
var aindex = require('./routes/artistindex');
var user = require('./routes/user')
var session = require('express-session')
app.use(express.static('www'));

app.post('/artist/create', function (req, res){
  var collection = global.db.collection('musicinfo');
  collection.save(req.body, function () {
    res.redirect('/')
  });
})

require('./lib/mongodb');
app.set('view engine', 'ejs');
app.use(session({
  secret: 'nodetunesisareallyawesomeapp',
  resave: false,
  saveUninitialized: true
}))
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', index);
app.use('/newartists', newartist);
app.use('/search', search);
app.use('/aindex', aindex);
app.use('/user', user);

app.use(function requireAuth(req, res, next){
  if(req.session.userId){
    next()
  } else{
    res.redirect('/user/login')
  }
})

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%d', port);
});
