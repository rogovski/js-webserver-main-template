function CommandValidationError(message, errors, fields) {
  this.name = 'CommandValidationError';
  this.message = message || 'Command Invalid';
  this.errors = errors || [];
  this.fields = fields || {};
}
CommandValidationError.prototype = Object.create(Error.prototype);
CommandValidationError.prototype.constructor = CommandValidationError;

exports.CommandValidationError = CommandValidationError;


function SingleResultNotReturnedError(message, errors, fields) {
  this.name = 'SingleResultNotReturnedError';
  this.message = message || 'Command Invalid';
  this.errors = errors || [];
  this.fields = fields || {};
}
SingleResultNotReturnedError.prototype = Object.create(Error.prototype);
SingleResultNotReturnedError.prototype.constructor = SingleResultNotReturnedError;

exports.SingleResultNotReturnedError = SingleResultNotReturnedError;
