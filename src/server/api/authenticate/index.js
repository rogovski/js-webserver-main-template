var express = require('express'),
    router  = express.Router(),
    _       = require('lodash'),
    site    = require('./site_export.json');

/*
 * OPTIONS /api/authenticate
 */
router.options('/', function (req, res) {
  var options = site['/api/authenticate'];

  res.set({
    'Content-Type': 'application/json',
    'Allow': _.keys(options.methods).join(', ')
  });
  res.status(200).send(options);
});


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
  site: site,
  router: router
};