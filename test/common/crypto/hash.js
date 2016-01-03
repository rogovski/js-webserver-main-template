var assert = require('assert'),
    should = textBlockRequire(),
    hash   = commonRequire('crypto/hash');


describe('function: noSaltHash', function () {
  it(
    should('hash a plaintext password'),

    function (done) {
      hash.noSaltHash('pass', function (err, hash) {
        if(err) throw err;

        done();
      });
    }
  );

});


describe('function: noSaltCompare', function () {
  it(
    should('hash a plaintext password'),

    function (done) {
      var hashed = '$2a$10$ENOZ6r4HG11CTQjHzyd8QO2cJN29dGgQzZnGEXS9vWuUxj/F.FLza';

      hash.noSaltCompare('pass', hashed, function (err, res) {
        if(err) throw err;

        assert.equal(res, true); 
        done();
      });
    }
  );

});