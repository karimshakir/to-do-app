describe('Controller: ToDoListController', () => {
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

    const toDoItems = [
      { id: 8675309, title: 'fake item' },
    ];
    httpBackend.whenGET('/api/v1/to_do_items').respond(200, toDoItems);

    $controller('ToDoListController', {
      $scope: scope,
      Cylons: cylons,
      InfoHeader: infoHeader,
    });
  }));

  describe('initialize', () => {
    beforeEach(() => { httpBackend.flush(); });

    it('populates toDoItems', () => {
      expect(scope.toDoItems[0].title).to.eq('fake item');
      expect(scope.toDoItems[0].id).to.eq(8675309);
    });

    it('uses a cylon when it is loading', () => {
      expect(cylons.start).to.have.been.calledWith('items');
      expect(cylons.finish).to.have.been.calledWith('items');
    });

    it('sets the breadcrumbs', () => {
      const expectedBreadcrumbs = [
        { name: 'Home' },
      ];
      expect(infoHeader.breadcrumbs.get()).to.deep.eq(expectedBreadcrumbs);
    });
  });
});
