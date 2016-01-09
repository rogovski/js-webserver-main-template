var uuid = commonRequire('crypto/uuid');


/*
 * BASE EVENT OBJECT
 */
function EVENT(options) {
  var _options = options || {};

  /*
   * event id
   */
  Object.defineProperty(this, 'eventId', {
    enumerable: true,
    configurable: false,
    writable: false,
    value: _options.eventId || uuid.v4()
  });

  /*
   * event timestamp
   */
  Object.defineProperty(this, 'timestamp', {
    enumerable: true,
    configurable: false,
    writable: false,
    value: _options.timestamp || Date.now()    
  });
}


/*
 * UNKNOWN EVENT RECEIVED
 */
function UNKNOWN_EVENT_RECEIVED(options) {
  var _options = options || {};

  EVENT.call(this, _options);

  this.eventType = 'UNKNOWN_EVENT_RECEIVED';

  this.correlationId = _options.correlationId || null;

  this.data = _options.data || null;
}
UNKNOWN_EVENT_RECEIVED.prototype = Object.create(EVENT.prototype);
UNKNOWN_EVENT_RECEIVED.prototype.constructor = UNKNOWN_EVENT_RECEIVED;


/*
 * SCHEMA
 */
function SCHEMA_SUCCEEDED(options) {
  var _options = options || {};

  EVENT.call(this, _options);

  this.eventType = 'SCHEMA_SUCCEEDED';

  this.correlationId = _options.correlationId || null;

  this.data = _options.data || null;
}
SCHEMA_SUCCEEDED.prototype = Object.create(EVENT.prototype);
SCHEMA_SUCCEEDED.prototype.constructor = SCHEMA_SUCCEEDED;


function SCHEMA_FAILED(options) {
  var _options = options || {};

  EVENT.call(this, _options);
  
  this.eventType = 'SCHEMA_FAILED';

  this.correlationId = _options.correlationId || null;

  this.data = _options.data || null;
}
SCHEMA_FAILED.prototype = Object.create(EVENT.prototype);
SCHEMA_FAILED.prototype.constructor = SCHEMA_FAILED;


/*
 * EXPORTS
 */
module.exports = {
  EVENT: EVENT,
  UNKNOWN_EVENT_RECEIVED: UNKNOWN_EVENT_RECEIVED,
  SCHEMA_SUCCEEDED: SCHEMA_SUCCEEDED,
  SCHEMA_FAILED: SCHEMA_FAILED
};