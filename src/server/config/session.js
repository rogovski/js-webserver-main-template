var session       = require('express-session'),
    redisStore    = require('connect-redis')(session);

module.exports = function (redis, config) {
  return session({
    secret: config.session.secret,
    // create new redis store.
    store: new redisStore({ 
      host: config.redis.host, 
      port: config.redis.port, 
      client: redis, 
      ttl: config.session.timeout
    }),
    saveUninitialized: false,
    resave: false
  });
};