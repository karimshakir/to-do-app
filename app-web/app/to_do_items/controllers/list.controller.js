angular.module('todoozyApp')
  .controller('ToDoListController', toDoListController);

toDoListController.$inject = [
  '$scope',
  'TodoozyAPI',
  'InfoHeader',
  'Cylons',
];

function toDoListController($scope, TodoozyAPI, InfoHeader, Cylons) {
  $scope.toDoItems = [];

  function initialize() {
    InfoHeader.breadcrumbs.set([
      { name: 'Home' },
    ]);

    Cylons.start('items');
    TodoozyAPI.all('to_do_items').getList().then(
      (toDoItems) => {
        Cylons.finish('items');
        $scope.toDoItems = toDoItems;
      }
    );
  }

  initialize();
}
