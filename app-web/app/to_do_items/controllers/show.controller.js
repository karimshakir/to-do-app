angular.module('todoozyApp')
  .controller('ToDoShowController', toDoShowController);

toDoShowController.$inject = [
  '$scope',
  '$stateParams',
  'TodoozyAPI',
  'InfoHeader',
  'Cylons',
];

function toDoShowController($scope, $stateParams, TodoozyAPI, InfoHeader, Cylons) {
  $scope.toDoItem = {};

  function initialize() {
    Cylons.start('item');
    TodoozyAPI.one('to_do_items', $stateParams.itemId).get().then(
      (toDoItem) => {
        Cylons.finish('item');
        $scope.toDoItem = toDoItem;

        InfoHeader.breadcrumbs.set([
          { name: 'Home', uiSref: 'items' },
          { name: toDoItem.title },
        ]);
      }
    );
  }

  initialize();
}
