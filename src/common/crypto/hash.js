// src/common/crypto/hash.js
var bcrypt = require('bcrypt-nodejs');


function noSaltHash(plaintext, next) {
  bcrypt.hash(plaintext, null, null, function (err, hash) {
    if(err) {
      return next(err, false);
    }
    else {
      return next(null, hash);
    }
  });
}
exports.noSaltHash = noSaltHash;


function noSaltCompare(plaintext, hash, next) {
  bcrypt.compare(plaintext, hash, function (err, res) {
    if(err) {
      return next(err, false);
    }
    else {
      return next(null, res);
    }
  });  
}
exports.noSaltCompare = noSaltCompare;