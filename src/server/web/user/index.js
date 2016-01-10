var express = require('express'),
    router  = express.Router(),
    _       = require('lodash'),
    site    = require('./site_export.json');

/*
 * OPTIONS /user
 */
router.options('/', function (req, res) {
  var options = site['/user'];

  res.set({
    'Content-Type': 'application/json',
    'Allow': _.keys(options.methods).join(', ')
  });
  res.status(200).send(options);
});


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
  site: site,
  router: router
};