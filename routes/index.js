var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('newartists');
})
// I have this rendering newartists right now so it just doesnt display blank at the root route
// It will be refactored to display each artists info
module.exports = router;
