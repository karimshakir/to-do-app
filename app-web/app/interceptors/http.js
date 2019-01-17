angular.module('todoozyApp')
  .config(($httpProvider) => {
    $httpProvider.interceptors.push(($rootScope, $q, RequestBuffer, $injector) => {
      return {
        responseError(rejection) {
          if ((rejection.status === 401) && !rejection.config.ignoreAuthModule) {
            const state = $injector.get('$state');
            $rootScope.$broadcast('event:login-open', { stateName: state.current.name, stateParams: state.params });
            state.go('login');
          }
          return $q.reject(rejection);
        },
      };
    });
  });
