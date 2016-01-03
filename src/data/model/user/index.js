var base       = dataRequire('model/base'),
    events     = require('./events'),
    commands   = require('./commands'),
    _          = require('lodash'),
    promise    = require('bluebird'),
    validation = promise.promisifyAll(require('./validation')),
    uuid       = commonRequire('crypto/uuid'),
    hash       = promise.promisifyAll(commonRequire('crypto/hash'));


/*
 * user schema
 */
function schema(types) {
  return {
    name: 'user',
    def: {
      email: {
        type: types.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: types.STRING,
        allowNull: false
      },
      firstName: {
        type: types.STRING,
      },
      lastName: {
        type: types.STRING
      },
      isSuper: {
        type: types.BOOLEAN, 
        allowNull: false, 
        defaultValue: false
      }
    }
  };
}


/*
 * helper for userCreateRequested
 * hash data.password and overwrite field
 */
function hashPassword(vCommand) {
  return hash
    .noSaltHashAsync(vCommand.data.password)
    .then(function (hash) {
      vCommand.data.password = hash;
      return vCommand;
    });
}


/*
 * create a user.
 * fail if user email alread exists
 */
function userCreateRequested(user, command) {
  return validation
    .validCreateAsync(command)
    .then(function (vCommand) {
      return hashPassword(vCommand);
    })
    .then(function (vCommand) {
      return user.create(vCommand.data);
    })
    .then(function (result) {
      return new events.USER_CREATE_SUCCEEDED({
        data: result
      });
    })
    .catch(function (e) {
      return new events.USER_CREATE_FAILED({
        data: e
      });
    });
}


function userUpdateRequested(user, command) {

}


function userDeleteRequested(user, command) {

}


/*
 * read from user object.
 * the event type returned depends on 
 * what is received in the command.data property
 */
function userReadRequested(user, command) {
  return user
    .findAndCountAll(command.data)
    .then(function (queryRes) {
      return new events.USER_READ_SUCCEEDED({
        data: queryRes
      });
    })
    .catch(function (e) {
      return new events.USER_READ_FAILED({
        data: e
      });
    });
}


/*
 * read from user object.
 * the event type returned depends on 
 * what is received in the command.data property
 * exclude 'sensitive' data
 */
function userSafeReadRequested(user, command) {
  return user
    .findAndCountAll(command.data)
    .then(function (queryRes) {
      return new events.USER_SAFEREAD_SUCCEEDED({
        data: {
          count: queryRes.count,
          rows:  _.map(queryRes.rows, function (u) {
            return _.omit(u.dataValues, 'password');
          })
        }
      });
    })
    .catch(function (e) {
      return new events.USER_SAFEREAD_FAILED({
        data: e
      });
    });
}


function userPasswordResetRequested(user, command) {

}


/*
 * given an email and a plaintext password
 * determine if the corresponding user exists
 * and passwords match
 */
function userValidationRequested(user, command) {
  return validation
    .validValidationAsync(command)
    .then(function (vCommand) {
      return user.findAll({
        where: { email: vCommand.data.email }
      });
    })
    .then(function (queryRes) {
      return validation.checkSingleResultAsync(queryRes);
    })
    .then(function (userSingle) {
      return hash.noSaltCompareAsync(
        command.data.password, 
        userSingle.password
      );
    })
    .then(function (isValid) {
      if(isValid) {
        return new events.USER_VALIDATION_SUCCEEDED({
          data: isValid
        });        
      }
      else {
        return new events.USER_VALIDATION_FAILED({
          data: isValid
        });
      }
    })
    .catch(function (e) {
      return new events.USER_VALIDATION_FAILED({
        data: e
      });
    });  
}


/*
 * apply a single command to a user object
 */
function apply(user, command) {
  switch(command.type) {

    case 'USER_CREATE_REQUESTED':
      return userCreateRequested(user, command);

    case 'USER_UPDATE_REQUESTED':
      return userUpdateRequested(user, command);

    case 'USER_DELETE_REQUESTED':
      return userDeleteRequested(user, command);

    case 'USER_READ_REQUESTED':
      return userReadRequested(user, command);

    case 'USER_SAFEREAD_REQUESTED':
      return userSafeReadRequested(user, command);

    case 'USER_PASSWORD_RESET_REQUESTED':
      return userPasswordResetRequested(user, command);

    case 'USER_VALIDATION_REQUESTED':
      return userValidationRequested(user, command);

    default:
      return new base.events.UNKNOWN_EVENT_RECEIVED();
  }
}


module.exports = {
  schema: schema,
  apply: apply,
  events: events,
  commands: commands
};
