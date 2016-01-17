var express = require('express'),
    router  = express.Router(),
    _       = require('lodash'),
    site    = require('./export.json'),
    options = serverRequire('middleware').options;

/*
 * OPTIONS /api/authenticate
 */
router.options('/', options(site));


/*
 * POST /api/authenticate
 */
router.post('/', function (req, res) {
  req.session.key = req.body.user.email;
  res.redirect('/');
});


/*
 * EXPORTS
 */
module.exports = {
  router: router
};