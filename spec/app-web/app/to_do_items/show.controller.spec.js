describe('Controller: ToDoShowController', () => {
  let scope;
  let cylons;
  let httpBackend;
  let infoHeader;

  beforeEach(module('todoozyApp'));

  beforeEach(inject(($rootScope, $controller, _$httpBackend_, _Restangular_, InfoHeader) => {
    scope = $rootScope.$new();
    httpBackend = _$httpBackend_;
    infoHeader = InfoHeader;

    cylons = {
      start: sinon.spy(),
      finish: sinon.spy(),
    };

    const stateParams = {
      itemId: 8675309,
    };

    const toDoItem = { id: 8675309, title: 'fake item' };
    httpBackend.whenGET('/api/v1/to_do_items/8675309').respond(200, toDoItem);

    $controller('ToDoShowController', {
      $scope: scope,
      Cylons: cylons,
      InfoHeader: infoHeader,
      $stateParams: stateParams,
    });
  }));

  describe('initialize', () => {
    beforeEach(() => { httpBackend.flush(); });

    it('populates toDoItem', () => {
      expect(scope.toDoItem.title).to.eq('fake item');
      expect(scope.toDoItem.id).to.eq(8675309);
    });

    it('uses a cylon when it is loading', () => {
      expect(cylons.start).to.have.been.calledWith('item');
      expect(cylons.finish).to.have.been.calledWith('item');
    });

    it('sets the breadcrumbs', () => {
      const expectedBreadcrumbs = [
        { name: 'Home', uiSref: 'items' },
        { name: 'fake item' },
      ];
      expect(infoHeader.breadcrumbs.get()).to.deep.eq(expectedBreadcrumbs);
    });
  });
});
