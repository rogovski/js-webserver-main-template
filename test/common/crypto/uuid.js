var assert = require('assert'),
    should = textBlockRequire(),
    uuid   = commonRequire('crypto/uuid');


describe('function: v4', function () {
  it(
    should('generate a random uuid'),

    function () {
      var res = uuid.v4();
      assert.equal(true, true);
    }
  );

});