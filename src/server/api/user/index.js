var express = require('express'),
    router  = express.Router(),
    _       = require('lodash'),
    site    = require('./export.json'),
    options = serverRequire('middleware').options;

/*
 * OPTIONS /api/user
 */
router.options('/', options(site));


/*
 * GET /api/user
 */
router.get('/', function (req, res) {
  console.log(req);
  res.status(501).send('not implemented');
});


/*
 * EXPORTS
 */
module.exports = {
  router: router
};