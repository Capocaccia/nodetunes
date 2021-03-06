var bcrypt = require('bcrypt');

function User(u){
  this.email = u.email;
  this.hashedPassword = u.hashedPassword;
}

User.findByEmail = function(email, cb){
  User.collection.findOne({email: email}, cb)
}

User.login = function(u, cb){
  User.findByEmail(u.email, function(err, user){
    if(user){
      //email found
      bcrypt.compare(u.password, user.hashedPassword, function(err, match){
        if(match){
          cb(null, user);
        } else {
          cb('Bad email or password')
        }
      })
    } else {
      cb('Bad email or password')
    }
  });
}

User.create = function(u, cb){
  if(u.password !== u.password_confirm){
    cb('Passwords Do Not Match');
  }

  bcrypt.hash(u.password, 8, function(err, hash) {
  u.hashedPassword = hash;
  var user = new User(u)
  User.collection.save(user, cb);
  });
}

Object.defineProperty(User, 'collection', {
  get: function(){
    return global.db.collection('user');
  }
});


module.exports = User;
