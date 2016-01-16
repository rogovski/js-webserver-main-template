var _ = require('lodash');


module.exports = function (site) {
  return function (req, res) {
    var key = req.route.path === '/' ? 
      req.baseUrl : req.baseUrl + req.route.path;

    // route is root
    if(key.length === 0) {
      key = '/';
    }

    var options = site.routes[key];

    res.set({
      'Content-Type': 'application/json',
      'Allow': _.keys(options.methods).join(', ')
    });

    res.status(200).send(options);
  };
};
