var express = require('express'),
    router  = express.Router(),
    _       = require('lodash'),
    site    = require('./export.json'),
    options = serverRequire('middleware').options;

/*
 * OPTIONS /user
 */
router.options('/', options(site));


/*
 * GET /user
 */
router.get('/', function (req, res) {
  res.status(501).send('not implemented');
});


/*
 * EXPORTS
 */
module.exports = {
  router: router
};