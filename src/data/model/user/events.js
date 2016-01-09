var EVENT = dataRequire('model/base/events').EVENT;

/*
 * CREATES
 */
function USER_CREATE_SUCCEEDED(options) {
  var _options = options || {};

  EVENT.call(this, _options);

  this.eventType = 'USER_CREATE_SUCCEEDED';

  this.correlationId = _options.correlationId || null;

  this.data = _options.data || null;
}
USER_CREATE_SUCCEEDED.prototype = Object.create(EVENT.prototype);
USER_CREATE_SUCCEEDED.prototype.constructor = USER_CREATE_SUCCEEDED;


function USER_CREATE_FAILED(options) {
  var _options = options || {};

  EVENT.call(this, _options);
  
  this.eventType = 'USER_CREATE_FAILED';

  this.correlationId = _options.correlationId || null;

  this.data = _options.data || null;
}
USER_CREATE_FAILED.prototype = Object.create(EVENT.prototype);
USER_CREATE_FAILED.prototype.constructor = USER_CREATE_FAILED;


/*
 * UPDATES
 */
function USER_UPDATE_SUCCEEDED(options) {
  var _options = options || {};

  EVENT.call(this, _options);

  this.eventType = 'USER_UPDATE_SUCCEEDED';

  this.correlationId = _options.correlationId || null;

  this.data = _options.data || null;
}
USER_UPDATE_SUCCEEDED.prototype = Object.create(EVENT.prototype);
USER_UPDATE_SUCCEEDED.prototype.constructor = USER_UPDATE_SUCCEEDED;


function USER_UPDATE_FAILED(options) {
  var _options = options || {};

  EVENT.call(this, _options);

  this.eventType = 'USER_UPDATE_FAILED';

  this.correlationId = _options.correlationId || null;

  this.data = _options.data || null;
}
USER_UPDATE_FAILED.prototype = Object.create(EVENT.prototype);
USER_UPDATE_FAILED.prototype.constructor = USER_UPDATE_FAILED;


/*
 * DELETES
 */
function USER_DELETE_SUCCEEDED(options) {
  var _options = options || {};

  EVENT.call(this, _options);

  this.eventType = 'USER_DELETE_SUCCEEDED';

  this.correlationId = _options.correlationId || null;

  this.data = _options.data || null;
}
USER_DELETE_SUCCEEDED.prototype = Object.create(EVENT.prototype);
USER_DELETE_SUCCEEDED.prototype.constructor = USER_DELETE_SUCCEEDED;


function USER_DELETE_FAILED(options) {
  var _options = options || {};

  EVENT.call(this, _options);

  this.eventType = 'USER_DELETE_FAILED';

  this.correlationId = _options.correlationId || null;

  this.data = _options.data || null;
}
USER_DELETE_FAILED.prototype = Object.create(EVENT.prototype);
USER_DELETE_FAILED.prototype.constructor = USER_DELETE_FAILED;


/*
 * READS
 */
function USER_READ_SUCCEEDED(options) {
  var _options = options || {};

  EVENT.call(this, _options);

  this.eventType = 'USER_READ_SUCCEEDED';

  this.correlationId = _options.correlationId || null;

  this.data = _options.data || null;
}
USER_READ_SUCCEEDED.prototype = Object.create(EVENT.prototype);
USER_READ_SUCCEEDED.prototype.constructor = USER_READ_SUCCEEDED;


function USER_READ_FAILED(options) {
  var _options = options || {};

  EVENT.call(this, _options);

  this.eventType = 'USER_READ_FAILED';

  this.correlationId = _options.correlationId || null;

  this.data = _options.data || null;
}
USER_READ_FAILED.prototype = Object.create(EVENT.prototype);
USER_READ_FAILED.prototype.constructor = USER_READ_FAILED;


/*
 * SAFE READ
 */
function USER_SAFEREAD_SUCCEEDED(options) {
  var _options = options || {};

  EVENT.call(this, _options);

  this.eventType = 'USER_SAFEREAD_SUCCEEDED';

  this.correlationId = _options.correlationId || null;

  this.data = _options.data || null;
}
USER_SAFEREAD_SUCCEEDED.prototype = Object.create(EVENT.prototype);
USER_SAFEREAD_SUCCEEDED.prototype.constructor = USER_SAFEREAD_SUCCEEDED;


function USER_SAFEREAD_FAILED(options) {
  var _options = options || {};

  EVENT.call(this, _options);

  this.eventType = 'USER_SAFEREAD_FAILED';

  this.correlationId = _options.correlationId || null;

  this.data = _options.data || null;
}
USER_SAFEREAD_FAILED.prototype = Object.create(EVENT.prototype);
USER_SAFEREAD_FAILED.prototype.constructor = USER_SAFEREAD_FAILED;


/*
 * PASSWORD RESET
 */
function USER_PASSWORD_RESET_SUCCEEDED(options) {
  var _options = options || {};

  EVENT.call(this, _options);

  this.eventType = 'USER_PASSWORD_RESET_SUCCEEDED';

  this.correlationId = _options.correlationId || null;

  this.data = _options.data || null;
}
USER_PASSWORD_RESET_SUCCEEDED.prototype = Object.create(EVENT.prototype);
USER_PASSWORD_RESET_SUCCEEDED.prototype.constructor = USER_PASSWORD_RESET_SUCCEEDED;


function USER_PASSWORD_RESET_FAILED(options) {
  var _options = options || {};

  EVENT.call(this, _options);

  this.eventType = 'USER_PASSWORD_RESET_FAILED';

  this.correlationId = _options.correlationId || null;

  this.data = _options.data || null;
}
USER_PASSWORD_RESET_FAILED.prototype = Object.create(EVENT.prototype);
USER_PASSWORD_RESET_FAILED.prototype.constructor = USER_PASSWORD_RESET_FAILED;


/*
 * VALIDATION (username/password check)
 */
function USER_VALIDATION_SUCCEEDED(options) {
  var _options = options || {};

  EVENT.call(this, _options);

  this.eventType = 'USER_VALIDATION_SUCCEEDED';

  this.correlationId = _options.correlationId || null;

  this.data = _options.data || null;
}
USER_VALIDATION_SUCCEEDED.prototype = Object.create(EVENT.prototype);
USER_VALIDATION_SUCCEEDED.prototype.constructor = USER_VALIDATION_SUCCEEDED;


function USER_VALIDATION_FAILED(options) {
  var _options = options || {};

  EVENT.call(this, _options);

  this.eventType = 'USER_VALIDATION_FAILED';

  this.correlationId = _options.correlationId || null;

  this.data = _options.data || null;
}
USER_VALIDATION_FAILED.prototype = Object.create(EVENT.prototype);
USER_VALIDATION_FAILED.prototype.constructor = USER_VALIDATION_FAILED;


/*
 * EXPORTS
 */
module.exports = {
  USER_CREATE_SUCCEEDED: USER_CREATE_SUCCEEDED,
  USER_CREATE_FAILED: USER_CREATE_FAILED,
  USER_UPDATE_SUCCEEDED: USER_UPDATE_SUCCEEDED,
  USER_UPDATE_FAILED: USER_UPDATE_FAILED,
  USER_DELETE_SUCCEEDED: USER_DELETE_SUCCEEDED,
  USER_DELETE_FAILED: USER_DELETE_FAILED,
  USER_READ_SUCCEEDED: USER_READ_SUCCEEDED,
  USER_READ_FAILED: USER_READ_FAILED,
  USER_SAFEREAD_SUCCEEDED: USER_SAFEREAD_SUCCEEDED,
  USER_SAFEREAD_FAILED: USER_SAFEREAD_FAILED,
  USER_PASSWORD_RESET_SUCCEEDED: USER_PASSWORD_RESET_SUCCEEDED,
  USER_PASSWORD_RESET_FAILED: USER_PASSWORD_RESET_FAILED,
  USER_VALIDATION_SUCCEEDED: USER_VALIDATION_SUCCEEDED,
  USER_VALIDATION_FAILED: USER_VALIDATION_FAILED
};
