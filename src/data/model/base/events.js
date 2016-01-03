

/*
 * UNKNOWN EVENT RECEIVED
 */
function UNKNOWN_EVENT_RECEIVED(options) {
  var _options = options || {};
  this.type = 'UNKNOWN_EVENT_RECEIVED';
  this.eventId = _options.eventId || null;
  this.correlationId = _options.correlationId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.UNKNOWN_EVENT_RECEIVED = UNKNOWN_EVENT_RECEIVED;


/*
 * SCHEMA
 */
function SCHEMA_SUCCEEDED(options) {
  var _options = options || {};
  this.type = 'SCHEMA_SUCCEEDED';
  this.eventId = _options.eventId || null;
  this.correlationId = _options.correlationId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.SCHEMA_SUCCEEDED = SCHEMA_SUCCEEDED;


function SCHEMA_FAILED(options) {
  var _options = options || {};
  this.type = 'SCHEMA_FAILED';
  this.eventId = _options.eventId || null;
  this.correlationId = _options.correlationId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.SCHEMA_FAILED = SCHEMA_FAILED;