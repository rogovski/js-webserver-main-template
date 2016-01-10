

module.exports = {
  '/authenticate': {
    'resource': '/authenticate',
    'description': 'authentication route for web requests',
    'methods': {
      'OPTIONS': {
        'description': 'options for authentication route of web requests',
        'content-type': [
          'application/json',
          'text/xml',
          'text/html'
        ] 
      },
      'GET': {
        'description': 'get login page of web app. redirects to index if logged in',
        'content-type': [
          'text/html'
        ]
      },
      'POST': {
        'description': 'perform authentication of user creds. set session',
        'body': {
          'TODO': 'TODO'
        },
        'content-type': [
          'text/html'
        ]
      }
    }
  },
  '/authenticate/logout': {
    'resource': '/authenticate/logout',
    'description': 'authentication route for logout requests',
    'methods': {
      'OPTIONS': {
        'description': 'options for authentication route of web requests',
        'content-type': [
          'application/json',
          'text/xml',
          'text/html'
        ] 
      },
      'GET': {
        'description': 'perform loggout',
        'content-type': [
          'text/html'
        ]
      }
    }
  }
};