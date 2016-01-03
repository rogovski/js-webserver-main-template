var multiline = commonRequire('util/multiline');

module.exports = [

  {
    route: '/api/authenticate',
    method: 'POST',
    display: 'Api Authentication',
    description: multiline.block(
      'authenticate via api: ',
      'provide an input json object with',
      'email and password fields. If valid, ',
      'this call will return a json object',
      'containing a bool "valid" field indicating',
      'that authentication succeed or failed and',
      'a "key" field with an api key to be included',
      'in the "X-api-key" header of each subsequent request'
    )
  }

];
