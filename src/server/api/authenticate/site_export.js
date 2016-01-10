

module.exports = {
  '/api/authenticate': {
    'resource': '/api/authenticate',
    'description': 'authentication route for api requests',
    'methods': {
      'OPTIONS': {
        'description': 'options for authentication route of api requests',
        'content-type': [
          'application/json',
          'text/xml'
        ] 
      },
      'POST': {
        'description': 'perform authentication of user creds. return api key',
        'body': {
          'TODO': 'TODO'
        },
        'content-type': [
          'application/json'
        ]
      }
    }
  }
};
