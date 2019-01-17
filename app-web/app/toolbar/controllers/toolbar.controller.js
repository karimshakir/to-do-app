angular.module('todoozyApp')
  .controller('ToolbarController', toolbarController);

toolbarController.$inject = [
  '$scope',
  '$http',
  '$rootScope',
  '$state',
  '$stateParams',
  'webStorage',
];

function toolbarController($scope, $http, $rootScope, $state, $stateParams, webStorage) {
  $scope.username = webStorage.get('username');
  $scope.showLogin = 'init';
  $scope.nextState = 'dashboard';
  $scope.nextParams = {};

  $scope.$on('event:login-open', (event, params) => toggleLoginDisplay('display', params));
  $scope.$on('event:login-successful', () => toggleLoginDisplay('hidden'));

  function toggleLoginDisplay(state, params = null) {
    $scope.showLogin = state;
    if (state == 'hidden') {
      $scope.username = webStorage.get('username');
      $state.go($scope.nextState, $scope.nextParams);
    } else if (params) {
      $scope.nextParams = params.stateParams;
      $scope.nextState = params.stateName === 'login' ? 'dashboard' : params.stateName;
    }
  }

  $scope.logout = () => {
    $http.delete('/users/sign_out.json', {}, {
      cache: false,
    }).then(() => {
      $scope.nextParams = $state.params;
      $scope.nextState = $state.current.name === 'login' ? 'dashboard' : $state.current.name;
      webStorage.remove('username');
      $rootScope.$broadcast('event:login-open');
      $state.go('login');
    });
  };
}
