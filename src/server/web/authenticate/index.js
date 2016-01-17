var express = require('express'),
    router  = express.Router(),
    _       = require('lodash'),
    site    = require('./export.json'),
    options = serverRequire('middleware').options;

/*
 * OPTIONS /authenticate
 */
router.options('/', options(site));


/*
 * GET /authenticate
 */
router.get('/', function (req, res) {
  if(req.session.key) {
    res.redirect('/');
  }
  else {
    res.render('login');
  }  
});


/*
 * POST /authenticate
 */
router.post('/', function (req, res) {
  req.session.key = req.body.user.email;
  res.redirect('/');
});


/*
 * OPTIONS /authenticate/logout
 */
router.options('/logout', options(site));


/*
 * GET /authenticate/logout
 */
router.get('/logout',function(req,res){
  req.session.destroy(function(err){
    if(err){
      res.status(500).send('internal error');
    } 
    else {
      res.redirect('/');
    }
  });
});


/*
 * EXPORTS
 */
module.exports = {
  router: router
};