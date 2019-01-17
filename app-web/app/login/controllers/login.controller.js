angular.module('todoozyApp')
  .controller('LoginController', loginController);

loginController.$inject = [
  '$scope',
  '$http',
  '$rootScope',
  'webStorage',
  'AuthService',
];

function loginController($scope, $http, $rootScope, webStorage, AuthService) {
  $scope.formErrorMsg = '';
  $scope.formSubmitted = false;
  $scope.user = {
    username: '',
    password: '',
  };
  $scope.currentYear = new Date().getFullYear();

  $scope.login = () => {
    $scope.formSubmitted = true;
    if (!$scope.loginForm.$valid) {
      $scope.formErrorMsg = 'INVALID!';
      return;
    }
    $http.post('/users/sign_in.json', { user: $scope.user }, {
      ignoreAuthModule: true,
      cache: false,
    }).then((response) => {
      webStorage.set('username', response.data.username);
      $rootScope.$broadcast('event:login-successful');
      AuthService.loginConfirmed();
    }, (() => {
      $scope.formErrorMsg = 'login failed';
    }));
  };
}
