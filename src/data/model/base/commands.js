

/*
 * SCHEMA
 */
function SCHEMA_REQUESTED(options) {
  var _options = options || {};
  this.type = 'SCHEMA_REQUESTED';
  this.eventId = _options.eventId || null;
  this.correlationId = _options.correlationId || null;
  this.timestamp = _options.timestamp || null;
  this.data = _options.data || null;
}
exports.SCHEMA_REQUESTED = SCHEMA_REQUESTED;
