var path = require('path');


/*
 * convenience import statement for 'client'
 */
global.clientRequire = function(name) {
  if(name === void 0) {
    return require(path.join(__dirname, 'src/client'));
  }
  return require(path.join(__dirname, 'src/client', name));
};


/*
 * convenience import statement for 'common'
 */
global.commonRequire = function(name) {
  if(name === void 0) {
    return require(path.join(__dirname, 'src/common'));
  }
  return require(path.join(__dirname, 'src/common', name));
};


/*
 * convenience import statement for 'console'
 */
global.consoleRequire = function(name) {
  if(name === void 0) {
    return require(path.join(__dirname, 'src/console'));
  }
  return require(path.join(__dirname, 'src/console', name));
};


/*
 * convenience import statement for 'data'
 */
global.dataRequire = function(name) {
  if(name === void 0) {
    return require(path.join(__dirname, 'src/data'));
  }
  return require(path.join(__dirname, 'src/data', name));
};


/*
 * convenience import statement for 'server'
 */
global.serverRequire = function(name) {
  if(name === void 0) {
    return require(path.join(__dirname, 'src/server'));
  }
  return require(path.join(__dirname, 'src/server', name));
};