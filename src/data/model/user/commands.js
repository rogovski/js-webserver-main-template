var COMMAND = dataRequire('model/base/commands').COMMAND;

/*
 * CREATES
 */
function USER_CREATE_REQUESTED(options) {
  var _options = options || {};

  COMMAND.call(this, _options);

  this.commandType = 'USER_CREATE_REQUESTED';

  this.data = _options.data || null;
}
USER_CREATE_REQUESTED.prototype = Object.create(COMMAND.prototype);
USER_CREATE_REQUESTED.prototype.constructor = USER_CREATE_REQUESTED;


/*
 * UPDATES
 */
function USER_UPDATE_REQUESTED(options) {
  var _options = options || {};

  COMMAND.call(this, _options);

  this.commandType = 'USER_UPDATE_REQUESTED';

  this.data = _options.data || null;
}
USER_UPDATE_REQUESTED.prototype = Object.create(COMMAND.prototype);
USER_UPDATE_REQUESTED.prototype.constructor = USER_UPDATE_REQUESTED;


/*
 * DELETES
 */
function USER_DELETE_REQUESTED(options) {
  var _options = options || {};

  COMMAND.call(this, _options);

  this.commandType = 'USER_DELETE_REQUESTED';

  this.data = _options.data || null;
}
USER_DELETE_REQUESTED.prototype = Object.create(COMMAND.prototype);
USER_DELETE_REQUESTED.prototype.constructor = USER_DELETE_REQUESTED;


/*
 * READS
 */
function USER_READ_REQUESTED(options) {
  var _options = options || {};

  COMMAND.call(this, _options);

  this.commandType = 'USER_READ_REQUESTED';

  this.data = _options.data || null;
}
USER_READ_REQUESTED.prototype = Object.create(COMMAND.prototype);
USER_READ_REQUESTED.prototype.constructor = USER_READ_REQUESTED;


/*
 * SAFE READS
 */
function USER_SAFEREAD_REQUESTED(options) {
  var _options = options || {};

  COMMAND.call(this, _options);

  this.commandType = 'USER_SAFEREAD_REQUESTED';

  this.data = _options.data || null;
}
USER_SAFEREAD_REQUESTED.prototype = Object.create(COMMAND.prototype);
USER_SAFEREAD_REQUESTED.prototype.constructor = USER_SAFEREAD_REQUESTED;


/*
 * PASSWORD RESET
 */
function USER_PASSWORD_RESET_REQUESTED(options) {
  var _options = options || {};

  COMMAND.call(this, _options);

  this.commandType = 'USER_PASSWORD_RESET_REQUESTED';

  this.data = _options.data || null;
}
USER_PASSWORD_RESET_REQUESTED.prototype = Object.create(COMMAND.prototype);
USER_PASSWORD_RESET_REQUESTED.prototype.constructor = USER_PASSWORD_RESET_REQUESTED;


/*
 * VALIDATION (username/password check)
 */
function USER_VALIDATION_REQUESTED(options) {
  var _options = options || {};

  COMMAND.call(this, _options);

  this.commandType = 'USER_VALIDATION_REQUESTED';

  this.data = _options.data || null;
}
USER_VALIDATION_REQUESTED.prototype = Object.create(COMMAND.prototype);
USER_VALIDATION_REQUESTED.prototype.constructor = USER_VALIDATION_REQUESTED;


/*
 * EXPORTS
 */
module.exports = {
  USER_CREATE_REQUESTED: USER_CREATE_REQUESTED,
  USER_UPDATE_REQUESTED: USER_UPDATE_REQUESTED,
  USER_DELETE_REQUESTED: USER_DELETE_REQUESTED,
  USER_READ_REQUESTED: USER_READ_REQUESTED,
  USER_SAFEREAD_REQUESTED: USER_SAFEREAD_REQUESTED,
  USER_PASSWORD_RESET_REQUESTED: USER_PASSWORD_RESET_REQUESTED,
  USER_VALIDATION_REQUESTED: USER_VALIDATION_REQUESTED
};