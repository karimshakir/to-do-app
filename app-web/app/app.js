const dependencies = [
  'todoozyTemplates',
  'ngRoute',
  'ngTable',
  'ui.bootstrap',
  'webStorageModule',
  'ui.router',
  'restangular',
  'tableSort',
];

angular.module('todoozyApp', dependencies)

.config(($sceProvider) => { $sceProvider.enabled = false; })

.config(($compileProvider) => {
  $compileProvider.debugInfoEnabled(false);
})

.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('login', {
      url: '/login',
      views: {
        full: {
          templateUrl: 'todoozy/login/views/login.html',
          controller: 'LoginController',
        },
      },
    });
});
