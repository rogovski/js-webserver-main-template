var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    webpack = require('webpack'),
    nodemon = require('gulp-nodemon');


var webpackConfig = {
  entry: './client.js',
  output: {
    path: './public/js/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react']
        }
      }
    ]
  }
};


var compiler = webpack(webpackConfig);


gulp.task('client-bundle', function (cb) {
  compiler.run(function (err, stats) {
    if (err) {
      gutil.log(err);
    }

    gutil.log('BUNDLED');

    cb();
  });
});


gulp.task('dev-server', function () {
  nodemon({ 
    script: 'server.js',
    ext: 'html js',
    ignore: [
      'node_modules',
      'public'
    ]
  })
  .on('change', ['logit'])
  .on('restart', function () {
    gutil.log('RESTARTED');
  });
});


gulp.task('logit', function () {
  console.log('logging');
});

