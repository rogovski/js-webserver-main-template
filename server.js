var express       = require('express'),
    app           = express(),
    http          = require('http'),
    server        = http.Server(app),
    chalk         = require('chalk'),
    redis         = require('redis'),
    createSession = require('./src/server/config/session'),
    bodyParser    = require('body-parser'),
    redisClient   = redis.createClient(),
    path          = require('path'),
    config        = require('./config.json'),
    webroute      = require('./src/server/web');

/*
 * setup redis as session store
 */
app.use(createSession(redisClient, config));


/*
 * setup body parser middleware
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


/*
 * use ejs as template engine
 */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/server/views'));


/*
 * setup web routes
 */
app.use('/', webroute);


/*
 * start server
 */
server.listen(config.port, function () {
  console.log(chalk.green('==> 🌎 running on http://localhost:' + config.port));
});
