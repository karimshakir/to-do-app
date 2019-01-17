angular.module('todoozyApp')
.directive('todoozyBreadcrumbs', todoozybreadCrumbs);

function todoozybreadCrumbs() {
  return {
    restrict: 'AE',
    scope: {
      breadcrumbs: '=',
    },
    templateUrl: 'todoozy/info_header/views/todoozy_breadcrumbs.html',
    compile: () => {
      return {
        post: (scope, element) => {
          return element.replaceWith(element.contents());
        },
      };
    },
    link: () => {},
  };
}
