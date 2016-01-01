// src/server/web

// web routes

var express = require('express'),
    router = express.Router();


router.get('/', function(req, res) {
  if(req.session.key) {
    console.log(req.session.key);
    res.render('index');
  }
  else {
    res.redirect('/login');
  }
});


router.get('/login', function (req, res) {
  if(req.session.key) {
    res.redirect('/');
  }
  else {
    res.render('login');
  }  
});


router.post('/authenticate', function (req, res) {
  req.session.key = req.body.user.email;
  res.redirect('/');
});


router.get('/logout',function(req,res){
  req.session.destroy(function(err){
    if(err){
      console.log(err);
    } 
    else {
      res.redirect('/');
    }
  });
});


router.get('/long', function (req, res) {
  setTimeout(function () {
    res.send('ok');
  }, 5000);
});


module.exports = router;