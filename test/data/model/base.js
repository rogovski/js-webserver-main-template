var assert = require('assert'),
    should = textBlockRequire(),
    base   = dataRequire('model/base'),
    _      = require('lodash')


describe('Object: COMMAND', function () {
  it(
    should('contain a commandId and a timestamp'),

    function () {
      var cmd = new base.commands.COMMAND();
      assert.equal(_.has(cmd, 'commandId', 'timestamp'), true);
    }
  );

});


describe('Object: EVENT', function () {
  it(
    should('contain an eventId and a timestamp'),

    function () {
      var evt = new base.events.EVENT();
      assert.equal(_.has(evt, 'eventId', 'timestamp'), true);
    }
  );

});