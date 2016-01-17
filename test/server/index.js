var assert  = require('assert'),
    should  = textBlockRequire(),
    path    = require('path'),
    promise = require('bluebird'),
    fs      = require('fs'),
    //fs      = promise.promisifyAll(require('fs')),
    srv     = serverRequire(),
    _       = require('lodash');

var baseFilePath        = path.join(__dirname, '../..', 'src', 'server'),
    displayFileBasePath = path.join('src', 'server');


function checkModuleRoutes(exportRoutes, displayFilePath, srvRoutes) {
  describe('Routes Defined in ' + displayFilePath, function () {
    // TODO: loop over srvRoutes.stack
    it(
      should('<names>'),

      function () {
        
        assert.equal(true, true);
      }
    );
  });
}


function buildRouteCheck(filePath, displayFilePath, srvObj) {
  
  var exportPath = path.join(filePath, 'export.json'),
      exportDisplay = path.join(displayFilePath, 'export.json'),
      exists = fs.existsSync(exportPath),
      exportContents = null;
  
  describe(exportDisplay, function () {
    it(
      should('exist'),

      function () {
        assert.equal(exists, true);
      }
    );

    if(exists) {
      exportContents = JSON.parse(fs.readFileSync(exportPath, 'utf8'));
      
      it(
         should('export at least one valid object'),

         function () {
           assert.equal(exportContents.index.exports.length >= 1, true);
         }
      )
    }
  });

  var recurseWith = [];

  if(exists && 
     !_.isNull(exportContents) && 
     exportContents.index.exports.length >= 1) {

    _.forEach(exportContents.index.exports, function (e) {
      if(e.isReExport) {
        recurseWith.push([
          path.join(filePath, _.last(e.exportPath)),
          path.join(displayFilePath, _.last(e.exportPath)),
          e.name // modulename
        ]);
      }
      else {
        checkModuleRoutes(exportContents.routes, displayFilePath, srvObj[e.name]);
      }
    });

    if(recurseWith.length > 0) {
      _.forEach(recurseWith, function (args) {
        buildRouteCheck(args[0], args[1], srvObj[args[2]]);
      });
    }
  }
}


buildRouteCheck(baseFilePath, displayFileBasePath, srv);



/*
console.log(srv.root.stack[0].route);
console.log(srv.root.stack[1].route);
console.log(srv.root.stack[2].route);
*/