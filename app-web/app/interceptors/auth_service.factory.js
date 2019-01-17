angular.module('todoozyApp').factory('AuthService', authService);

authService.$inject = [
  'RequestBuffer',
];

function authService(requestBuffer) {
  requestBuffer.registerUpdater((config) => {
    if (!config.params) {
      config.params = {};
    }
    return config;
  });
  return {
    loginConfirmed() {
      const updater = config => config;
      requestBuffer.registerUpdater(updater);
      return requestBuffer.retryAll();
    },
  };
}
