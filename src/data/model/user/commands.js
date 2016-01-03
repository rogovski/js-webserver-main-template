
/*
 * CREATES
 */
function USER_CREATE_REQUESTED(options) {
  var _options = options || {};
  this.type = 'USER_CREATE_REQUESTED';
  this.commandId = _options.commandId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.USER_CREATE_REQUESTED = USER_CREATE_REQUESTED;


/*
 * UPDATES
 */
function USER_UPDATE_REQUESTED(options) {
  var _options = options || {};
  this.type = 'USER_UPDATE_REQUESTED';
  this.commandId = _options.commandId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.USER_UPDATE_REQUESTED = USER_UPDATE_REQUESTED;


/*
 * DELETES
 */
function USER_DELETE_REQUESTED(options) {
  var _options = options || {};
  this.type = 'USER_DELETE_REQUESTED';
  this.commandId = _options.commandId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.USER_DELETE_REQUESTED = USER_DELETE_REQUESTED;


/*
 * READS
 */
function USER_READ_REQUESTED(options) {
  var _options = options || {};
  this.type = 'USER_READ_REQUESTED';
  this.commandId = _options.commandId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.USER_READ_REQUESTED = USER_READ_REQUESTED;


/*
 * SAFE READS
 */
function USER_SAFEREAD_REQUESTED(options) {
  var _options = options || {};
  this.type = 'USER_SAFEREAD_REQUESTED';
  this.commandId = _options.commandId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.USER_SAFEREAD_REQUESTED = USER_SAFEREAD_REQUESTED;


/*
 * PASSWORD RESET
 */
function USER_PASSWORD_RESET_REQUESTED(options) {
  var _options = options || {};
  this.type = 'USER_PASSWORD_RESET_REQUESTED';
  this.commandId = _options.commandId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.USER_PASSWORD_RESET_REQUESTED = USER_PASSWORD_RESET_REQUESTED;


/*
 * VALIDATION (username/password check)
 */
function USER_VALIDATION_REQUESTED(options) {
  var _options = options || {};
  this.type = 'USER_VALIDATION_REQUESTED';
  this.commandId = _options.commandId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.USER_VALIDATION_REQUESTED = USER_VALIDATION_REQUESTED;

