var express = require('express'),
    router  = express.Router(),
    _       = require('lodash'),
    site    = require('./site_export.json');

/*
 * OPTIONS /authenticate
 */
router.options('/', function (req, res) {
  var options = site['/authenticate'];

  res.set({
    'Content-Type': 'application/json',
    'Allow': _.keys(options.methods).join(', ')
  });
  res.status(200).send(options);
});


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
router.options('/logout', function (req, res) {
  var options = site['/logout'];

  res.set({
    'Content-Type': 'application/json',
    'Allow': _.keys(options.methods).join(', ')
  });
  res.status(200).send(options);
});


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
  site: site,
  router: router
};