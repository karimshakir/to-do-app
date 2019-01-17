angular.module('todoozyApp')
  .controller('InfoHeaderController', infoHeaderController);

infoHeaderController.$inject = [
  '$scope',
  'InfoHeader',
];

function infoHeaderController($scope, InfoHeader) {
  $scope.breadcrumbs = InfoHeader.breadcrumbs.get();
}
