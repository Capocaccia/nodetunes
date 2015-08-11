var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    var collection = global.db.collection('musicinfo');
  collection.find().toArray(function (err, data) {
    var formattedMusic = data.map(function (music) {
      return {
        _id: music._id,
        name: music.name
      };
    });
    res.render('artistindex', {music: formattedMusic});
  });
})

module.exports = router;
