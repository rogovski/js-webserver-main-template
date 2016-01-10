

module.exports = {
  '/user': {
    'resource': '/user',
    'description': 'system users',
    'methods': {
      'OPTIONS': {
        'description': 'options for user route of web requests',
        'content-type': [
          'application/json',
          'text/xml',
          'text/html'
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