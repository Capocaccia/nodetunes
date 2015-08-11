var express = require('express');
var router = express.Router();
var $ = require('jquery');
var url = require('url')

router.get('/', function (req, res) {
  res.render('search')
})

module.exports = router;
