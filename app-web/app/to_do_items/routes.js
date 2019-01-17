angular.module('todoozyApp').config(toDoItemsRoutes);

toDoItemsRoutes.$inject = ['$stateProvider'];

function toDoItemsRoutes($stateProvider) {
  $stateProvider
    .state('items', {
      url: '/',
      views: {
        main: {
          templateUrl: 'todoozy/to_do_items/views/list.html',
          controller: 'ToDoListController',
        },
      },
    })
    .state('itemsNew', {
      url: '/items/new',
      views: {
        main: {
          templateUrl: 'todoozy/to_do_items/views/new.html',
          controller: 'ToDoNewController',
        },
      },
    })
    .state('itemsShow', {
      url: '/items/{itemId}',
      views: {
        main: {
          templateUrl: 'todoozy/to_do_items/views/show.html',
          controller: 'ToDoShowController',
        },
      },
    });
}
