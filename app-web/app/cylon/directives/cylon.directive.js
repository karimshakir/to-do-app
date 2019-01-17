/*
* @desc cylon directive that is used to display a 'loading' state to the user
* @example <cylon for="myData" />
*/

angular.module('todoozyApp').directive('cylon', CylonDirective);

CylonDirective.$inject = ['$rootScope', 'Cylons'];

function CylonDirective($rootScope, Cylons) {
  return {
    restrict: 'AE',
    scope: {},
    templateUrl: 'todoozy/cylon/views/cylon.html',
    link,
  };

  function link(_scope, element, attrs) {
    element.hide();
    Cylons.register(
      attrs.for,
      () => element.show(),
      () => element.hide()
    );
  }
}
