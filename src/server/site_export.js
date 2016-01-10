

module.exports = {
  '/': {
    'resource': '/',
    'description': 'root route for web requests',
    'methods': {
      'OPTIONS': {
        'description': 'options for root route of web requests',
        'content-type': [
          'application/json',
          'text/xml',
          'text/html'
        ] 
      },
      'GET': {
        'description': 'get index page of web app. redirects to login if not logged in',
        'content-type': [
          'text/html'
        ]
      }
    }
  },
  '/api': {
    'resource': '/api',
    'description': 'root route for api requests',
    'methods': {
      'OPTIONS': {
        'description': 'options for root route of api requests',
        'content-type': [
          'application/json',
          'text/xml',
          'text/html'
        ] 
      }
    }
  }
};