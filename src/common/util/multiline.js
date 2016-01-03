var _     = require('lodash');

function block() {
  _.each(arguments, function (l) {
    acc.push(l);
  });

  return acc
}
exports = block;
