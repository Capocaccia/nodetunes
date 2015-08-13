var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

router.get('/', function (req, res) {
    var collection = global.db.collection('musicinfo');
  collection.find().toArray(function (err, data) {
    var formattedMusic = data.map(function (music) {
      return {
        _id: music._id,
        name: music.name,
        genre: music.genre,
        wiki: music.wiki
      };
    });
    res.render('artistindex', {music: formattedMusic});
  });
})

router.post('/delete/:id', function(req, res){
  var collection = global.db.collection('musicinfo');
  collection.remove({_id: ObjectID(req.params.id)}, function(){
    res.redirect('/aindex')
  })
});

module.exports = router;
