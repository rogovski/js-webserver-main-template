var _    = require('lodash'),
    base = dataRequire('model/base/validation');


/*
 * validate an incoming create command
 */
function validCreate(userCmd, next) {

  if(!_.has(userCmd.data, 'password')) {
    throw new base.CommandValidationError(
      'incoming command data has no password',
      [],
      { 'password': '' }
    );
  }

  return next(null, userCmd);
}
exports.validCreate = validCreate;


/*
 * validate an incoming validation command
 */
function validValidation(userCmd, next) {

  if(!_.has(userCmd.data, 'email')) {
    throw new base.CommandValidationError(
      'incoming command data has no email',
      [],
      { 'email': '' }
    );
  }

  if(!_.has(userCmd.data, 'password')) {
    throw new base.CommandValidationError(
      'incoming command data has no password',
      [],
      { 'password': '' }
    );
  }

  return next(null, userCmd);
}
exports.validValidation = validValidation;


/*
 * query result should have one item
 */
function checkSingleResult(results, next) {
  if(results.length != 1) {
    throw new base.SingleResultNotReturnedError(
      'query did not return a single result');
  }

  return next(null, results[0]);
}
exports.checkSingleResult = checkSingleResult;