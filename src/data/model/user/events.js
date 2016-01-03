

/*
 * CREATES
 */
function USER_CREATE_SUCCEEDED(options) {
  var _options = options || {};
  this.type = 'USER_CREATE_SUCCEEDED';
  this.eventId = _options.eventId || null;
  this.correlationId = _options.correlationId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.USER_CREATE_SUCCEEDED = USER_CREATE_SUCCEEDED;


function USER_CREATE_FAILED(options) {
  var _options = options || {};
  this.type = 'USER_CREATE_FAILED';
  this.eventId = _options.eventId || null;
  this.correlationId = _options.correlationId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.USER_CREATE_FAILED = USER_CREATE_FAILED;


/*
 * UPDATES
 */
function USER_UPDATE_SUCCEEDED(options) {
  var _options = options || {};
  this.type = 'USER_UPDATE_SUCCEEDED';
  this.eventId = _options.eventId || null;
  this.correlationId = _options.correlationId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.USER_UPDATE_SUCCEEDED = USER_UPDATE_SUCCEEDED;


function USER_UPDATE_FAILED(options) {
  var _options = options || {};
  this.type = 'USER_UPDATE_FAILED';
  this.eventId = _options.eventId || null;
  this.correlationId = _options.correlationId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.USER_UPDATE_FAILED = USER_UPDATE_FAILED;


/*
 * DELETES
 */
function USER_DELETE_SUCCEEDED(options) {
  var _options = options || {};
  this.type = 'USER_DELETE_SUCCEEDED';
  this.eventId = _options.eventId || null;
  this.correlationId = _options.correlationId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.USER_DELETE_SUCCEEDED = USER_DELETE_SUCCEEDED;


function USER_DELETE_FAILED(options) {
  var _options = options || {};
  this.type = 'USER_DELETE_FAILED';
  this.eventId = _options.eventId || null;
  this.correlationId = _options.correlationId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.USER_DELETE_FAILED = USER_DELETE_FAILED;


/*
 * READS
 */
function USER_READ_SUCCEEDED(options) {
  var _options = options || {};
  this.type = 'USER_READ_SUCCEEDED';
  this.eventId = _options.eventId || null;
  this.correlationId = _options.correlationId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.USER_READ_SUCCEEDED = USER_READ_SUCCEEDED;


function USER_READ_FAILED(options) {
  var _options = options || {};
  this.type = 'USER_READ_FAILED';
  this.eventId = _options.eventId || null;
  this.correlationId = _options.correlationId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.USER_READ_FAILED = USER_READ_FAILED;


/*
 * SAFE READ
 */
function USER_SAFEREAD_SUCCEEDED(options) {
  var _options = options || {};
  this.type = 'USER_SAFEREAD_SUCCEEDED';
  this.eventId = _options.eventId || null;
  this.correlationId = _options.correlationId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.USER_SAFEREAD_SUCCEEDED = USER_SAFEREAD_SUCCEEDED;


function USER_SAFEREAD_FAILED(options) {
  var _options = options || {};
  this.type = 'USER_SAFEREAD_FAILED';
  this.eventId = _options.eventId || null;
  this.correlationId = _options.correlationId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.USER_SAFEREAD_FAILED = USER_SAFEREAD_FAILED;


/*
 * PASSWORD RESET
 */
function USER_PASSWORD_RESET_SUCCEEDED(options) {
  var _options = options || {};
  this.type = 'USER_PASSWORD_RESET_SUCCEEDED';
  this.eventId = _options.eventId || null;
  this.correlationId = _options.correlationId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.USER_PASSWORD_RESET_SUCCEEDED = USER_PASSWORD_RESET_SUCCEEDED;


function USER_PASSWORD_RESET_FAILED(options) {
  var _options = options || {};
  this.type = 'USER_PASSWORD_RESET_FAILED';
  this.eventId = _options.eventId || null;
  this.correlationId = _options.correlationId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.USER_PASSWORD_RESET_FAILED = USER_PASSWORD_RESET_FAILED;


/*
 * VALIDATION (username/password check)
 */
function USER_VALIDATION_SUCCEEDED(options) {
  var _options = options || {};
  this.type = 'USER_VALIDATION_SUCCEEDED';
  this.eventId = _options.eventId || null;
  this.correlationId = _options.correlationId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.USER_VALIDATION_SUCCEEDED = USER_VALIDATION_SUCCEEDED;


function USER_VALIDATION_FAILED(options) {
  var _options = options || {};
  this.type = 'USER_VALIDATION_FAILED';
  this.eventId = _options.eventId || null;
  this.correlationId = _options.correlationId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.USER_VALIDATION_FAILED = USER_VALIDATION_FAILED;