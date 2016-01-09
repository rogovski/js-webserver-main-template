require('./global');

var readln = require('readline-sync');

/* HOW TO
*/
var config = require('./config.json'),
    psql   = dataRequire('sql_datasource/psql')(config),
    models = dataRequire('model');

/* setup postgres datasource */ /* 
var mdlSchema = models.user.schema(psql.dbStatic());
var mdl = psql.createModel(psql.initConn, mdlSchema, { freezeTableName: true });
*/

/* TODO: refactor as test
psql.syncModel(mdl).then(function (res) {
  console.log('ok');
});
*/

/* TODO: console app login
var username = readln.question('username> ');

var password = readln.question('password> ', {
  hideEchoBack: true
});
*/

/* TODO: refactor as test */ /* 
models.user.apply(mdl, new models.user.commands.USER_CREATE_REQUESTED({
  data: {
    email: 'email@email.com',
    password: 'passwd'
  }
})).then(function (res) {
  var str = JSON.stringify(res, null, 2);
  console.info(str);
})
*/

/* TODO: refactor as test
models.user.apply(mdl, new models.user.commands.USER_CREATE_REQUESTED()).then(function (res) {
  var str = JSON.stringify(res, null, 2);
  console.info(str);
})
*/

/* TODO: refactor as test
models.user.apply(mdl, new models.user.commands.USER_SAFEREAD_REQUESTED({
  data: { }
})).then(function (res) {
  var str = JSON.stringify(res, null, 2);
  console.info(str);
});
*/

/* TODO: refactor as test
models.user.apply(mdl, new models.user.commands.USER_VALIDATION_REQUESTED({
  data: { 
    email: 'email@email.com,
    password: 'passwd'
  }
})).then(function (res) {
  var str = JSON.stringify(res, null, 2);
  console.info(str);
});
*/
