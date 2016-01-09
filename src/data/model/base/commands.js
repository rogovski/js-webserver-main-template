var uuid = commonRequire('crypto/uuid');


/*
 * BASE COMMAND OBJECT
 */
function COMMAND(options) {
  var _options = options || {};

  /*
   * command id
   */
  Object.defineProperty(this, 'commandId', {
    enumerable: true,
    configurable: false,
    writable: false,
    value: _options.commandId || uuid.v4()
  });

  /*
   * command timestamp
   */
  Object.defineProperty(this, 'timestamp', {
    enumerable: true,
    configurable: false,
    writable: false,
    value: _options.timestamp || Date.now()    
  });
}


/*
 * SCHEMA
 */
function SCHEMA_REQUESTED(options) {
  var _options = options || {};

  COMMAND.call(this, _options);

  this.commandType = 'SCHEMA_REQUESTED';

  this.data = _options.data || null;
}
SCHEMA_REQUESTED.prototype = Object.create(COMMAND.prototype);
SCHEMA_REQUESTED.prototype.constructor = SCHEMA_REQUESTED;


/*
 * EXPORTS
 */
module.exports = {
  COMMAND: COMMAND,
  SCHEMA_REQUESTED: SCHEMA_REQUESTED
};
