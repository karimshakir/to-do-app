angular.module('todoozyApp')
  .controller('ToDoNewController', toDoNewController);

toDoNewController.$inject = [
  '$scope',
  '$state',
  'TodoozyAPI',
  'InfoHeader',
  'Cylons',
];

function toDoNewController($scope, $state, TodoozyAPI, InfoHeader, Cylons) {
  $scope.toDoItem = {};

  function initialize() {
    InfoHeader.breadcrumbs.set([
      { name: 'Home', uiSref: 'items' },
      { name: 'New To Do Item' },
    ]);
  }

  $scope.submit = () => {
    Cylons.start('submitting');
    $scope.submitting = true;
    TodoozyAPI.all('to_do_items').post({ to_do_item: $scope.toDoItem }).then(
      () => {
        $state.go('items');
      }
    )
    .finally(
      () => {
        Cylons.finish('submitting');
        $scope.submitting = false;
      });
  };

  initialize();
}
