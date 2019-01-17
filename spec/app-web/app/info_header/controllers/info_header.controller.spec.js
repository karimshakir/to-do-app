describe('Controller: InfoHeaderController', () => {
  let scope;
  let infoHeader;

  beforeEach(module('todoozyApp'));

  beforeEach(inject(($controller, $rootScope, InfoHeader) => {
    scope = $rootScope.$new();
    infoHeader = InfoHeader;

    infoHeader.breadcrumbs.set([
      { name: 'Home', uiSref: 'dashboard' },
      { name: 'Asset Library' },
    ]);

    $controller('InfoHeaderController', {
      $scope: scope,
      InfoHeader: infoHeader,
    });

    it('test the - bread crumb', () => {
      expect(scope.breadcrumbs[0].name).to.eq('Home');
    });
  }));
});
