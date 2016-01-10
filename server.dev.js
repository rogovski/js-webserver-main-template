require('./global');

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
    routes        = require('./src/server');


/*
 * setup web pack dev
 */
var webpack               = require('webpack'),
    webpackDevMiddleware  = require('webpack-dev-middleware'),
    webpackHotMiddleware  = require('webpack-hot-middleware'),
    webpackConfig         = require('./webpack.config');

var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, { 
  noInfo: true, 
  publicPath: webpackConfig.output.publicPath 
}));
app.use(webpackHotMiddleware(compiler));


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
 * root routes
 */
app.use('/', routes.root);


/*
 * web routes
 */
app.use('/authenticate', routes.web.authenticate.router);
app.use('/user', routes.web.user.router);


/*
 * api routes
 */
app.use('/api/authenticate', routes.api.authenticate.router);
app.use('/api/user', routes.api.user.router);


/*
 * start server
 */
server.listen(config.port, function () {
  console.log(chalk.green('==> 🌎 running on http://localhost:' + config.port));
});
