

var express = require('express'),
    router  = express.Router(),
    _       = require('lodash'),
    site    = require('./export.json'),
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
  api: api,
  web: web
};