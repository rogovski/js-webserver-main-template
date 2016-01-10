

var express = require('express'),
    router  = express.Router(),
    _       = require('lodash'),
    site    = require('./site_export'),
    api     = require('./api'),
    web     = require('./web'),
    options = serverRequire('middleware').options;


/*
 * OPTIONS /
 */
router.options('/', options(site));


/*
 * GET /
 */
router.get('/', function(req, res) {
  if(req.session.key) {
    res.render('index');
  }
  else {
    res.redirect('/authenticate');
  }
});


/*
 * OPTIONS /api
 */
router.options('/api', options(site));


/*
 * EXPORTS
 */
module.exports = {
  root: router,
  site: site,
  api: api,
  web: web
};