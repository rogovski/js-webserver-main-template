var Sequelize = require('sequelize');

module.exports = function (config) {
  
  var create = function (db, user, pass, host, port) {
    return new Sequelize(db, user, pass, {
      host: host,
      dialect: 'postgres',
      port: port
    });
  };

  return {
    init: create(
      config.psql.initialdb,
      config.psql.username,
      config.psql.password,
      config.psql.host,
      config.psql.port
    ),

    create: create
  };

};