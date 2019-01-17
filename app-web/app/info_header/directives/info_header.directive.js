angular.module('todoozyApp')
  .directive('todoozyInfoHeader', todoozyInfoHeaderDirective);

function todoozyInfoHeaderDirective() {
  return {
    restrict: 'AE',
    controller: 'InfoHeaderController',
    scope: {},
    templateUrl: 'todoozy/info_header/views/info_header.html',
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
