angular.module('todoozyApp')
  .controller('ToDoEditController', toDoEditController);

toDoEditController.$inject = [
  '$scope',
  '$state',
  '$stateParams',
  'TodoozyAPI',
  'InfoHeader',
  'Cylons',
];

function toDoEditController($scope, $state, $stateParams, TodoozyAPI, InfoHeader, Cylons) {
  $scope.toDoItem = {};

  function initialize() {
    Cylons.start('item');
    TodoozyAPI.one('to_do_items', $stateParams.itemId).get().then(
      (toDoItem) => {
        Cylons.finish('item');
        $scope.toDoItem = toDoItem;

        InfoHeader.breadcrumbs.set([
          { name: 'Home', uiSref: 'items' },
          { name: toDoItem.title, uiSref: `itemsShow({itemId: ${toDoItem.id}})` },
          { name: 'Edit To Do Item' },
        ]);
      }
    );
  }

  $scope.submit = () => {
    Cylons.start('submitting');
    $scope.submitting = true;
    TodoozyAPI.one('to_do_items', $stateParams.itemId).patch({ to_do_item: $scope.toDoItem }).then(
      () => {
        $state.go(`items/${$scope.toDoItem.id}`);
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
