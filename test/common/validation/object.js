var assert = require('assert'),
    should = textBlockRequire(),
    obj    = commonRequire('validation/object');


describe('function: ensureProps', function () {
  it(
     should('return true when object contains properties',
            'specified in the list'),

     function () {
       
       var res = obj.ensureProps({
        some: 'object',
        has: 'props',
        inNeedOf: 'checks'
       }, ['some', 'has', 'inNeedOf']);

       assert.equal(res, true);
     }
  );


  it(
     should('throw error when object does not contain',
            'properties specified in the list'),

     function () {

       assert.throws(function () {
         obj.ensureProps({
          some: 'object',
          inNeedOf: 'checks'
         }, ['some', 'has', 'inNeedOf'])
       }, Error);
     }
  );

});