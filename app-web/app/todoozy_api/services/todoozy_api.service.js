angular.module('todoozyApp')
  .constant('API_BASE', '/api/v1')
  .factory('TodoozyAPI', todoozyAPI);

todoozyAPI.$inject = [
  'Restangular',
  'API_BASE',
];

function todoozyAPI(Restangular, API_BASE) {
  Restangular.setBaseUrl(API_BASE);
  Restangular.setDefaultHeaders({
    Accept: 'application/json',
    'If-Modified-Since': 'Mon, 26 Jul 1997 05:00:00 GMT',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
  });
  return Restangular;
}
