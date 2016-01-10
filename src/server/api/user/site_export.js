

module.exports = {
  '/api/user': {
    'resource': '/api/user',
    'description': 'system users',
    'methods': {
      'OPTIONS': {
        'description': 'options for user route of api requests',
        'content-type': [
          'application/json',
          'text/xml'
        ] 
      },
      'GET': {
        'description': 'get list of users',
        'content-type': [
          'application/json'
        ]
      }
    }
  }
};