// src/server/dispatch

// dispatch api or web request to data layer

/*

"/":"GET":"*"
  RULES:
    (req,res, next) -> ( 
      if(req.isAuth)
        next();
      else
        res.redirect('/athenticate')
    ),
      


"/":"OPTIONS":"*"
"/":"OPTIONS":"application/json",
"/":"OPTIONS":"text/xml",
"/":"OPTIONS":"text/html"

"/api":"OPTIONS":"application/json",
"/api":"OPTIONS":"text/xml",
"/api":"OPTIONS":"text/html"

"/authenticate":"OPTIONS": 
"/authenticate":"OPTIONS":"application/json",
"/authenticate":"OPTIONS":"text/xml",
"/authenticate":"OPTIONS":"text/html"

"/authenticate":"GET":"text/html"

"/authenticate":"POST":"text/html"

"/authenticate/logout":"OPTIONS":"application/json",
"/authenticate/logout":"OPTIONS":"text/xml",
"/authenticate/logout":"OPTIONS":"text/html"
"/authenticate/logout":"GET":"text/html"
*/


/*
maybe have two files in this dir. a handlers.js and a rules.js
*/

/*
{

  "routes": {
    "/authenticate": {
      "resource": "/authenticate",
      "description": "authentication route for web requests",
      "context": "web",
      "methods": {
        "OPTIONS": {
          "description": "options for authentication route of web requests",
          "content-type": [
            "application/json",
            "text/xml",
            "text/html"
          ] 
        },
        "GET": {
          "description": "get login page of web app. redirects to index if logged in",
          "content-type": [
            "text/html"
          ]
        },
        "POST": {
          "description": "perform authentication of user creds. set session",
          "body": {
            "TODO": "TODO"
          },
          "content-type": [
            "text/html"
          ]
        }
      }
    },
    "/authenticate/logout": {
      "resource": "/authenticate/logout",
      "description": "authentication route for logout requests",
      "context": "web",
      "srcpath": ["authenticate"],
      "methods": {
        "OPTIONS": {
          "SHOWCLIENT": {
            "description": "options for authentication route of web requests",
            "content-type": [
              "application/json",
              "text/xml",
              "text/html"
            ]             
          },
          "IMPLEMENTATION": {
            "description": "options for authentication route of web requests",
            "content-type": [
              "application/json",
              "text/xml",
              "text/html"
            ]             
          }

        },
        "GET": {
          "description": "perform loggout",
          "content-type": [
            "text/html"
          ]
        }
      }
    }
  },

  "routeHandlers": {
    "(/authenticate).OPTIONS.(application/json)"
  }
  "domains": {
    // GET and OPTIONS request

  },

  "codomains": {

  },

  "index": {
    "exports": 
    [
      {
        "name": "router",
        "isReExport": false
      }
    ]    
  }

}*/


/*
var express = require('express'),
    router  = express.Router(),
    _       = require('lodash'),
    site    = require('./export.json'),
    options = serverRequire('middleware').options;


var resourceAccessControler = serverRequire('dispatch?');


router.options('/', resourceAccessControler('/'),  options(site));



router.get('/', function (req, res) {
  if(req.session.key) {
    res.redirect('/');
  }
  else {
    res.render('login');
  }  
});



router.post('/', function (req, res) {
  req.session.key = req.body.user.email;
  res.redirect('/');
});



router.options('/logout', options(site));



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


module.exports = {
  router: router
};
*/