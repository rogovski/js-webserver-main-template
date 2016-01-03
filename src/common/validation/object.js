var _ = require('lodash');

/*
 * ensure object has properties. throw
 * exception if not present
 */
function ensureProps(obj, propLs) {
  _.forEach(propLs, function (e) {
    if(!_.has(obj, e)) {
      throw new Error('ensureProps FAILED');
    }
  });

  return true;
}
exports.ensureProps = ensureProps;
