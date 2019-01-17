describe('Controller: ToDoNewController', () => {
  let scope;
  let cylons;
  let httpBackend;
  let infoHeader;
  let state;

  beforeEach(module('todoozyApp'));

  beforeEach(inject(($rootScope, $controller, _$httpBackend_, _Restangular_, InfoHeader) => {
    scope = $rootScope.$new();
    httpBackend = _$httpBackend_;
    infoHeader = InfoHeader;

    state = {
      go: sinon.spy(),
    };

    cylons = {
      start: sinon.spy(),
      finish: sinon.spy(),
    };

    $controller('ToDoNewController', {
      $scope: scope,
      Cylons: cylons,
      InfoHeader: infoHeader,
      $state: state,
    });
  }));

  describe('initialize', () => {
    it('sets the breadcrumbs', () => {
      const expectedBreadcrumbs = [
        { name: 'Home', uiSref: 'items' },
        { name: 'New To Do Item' },
      ];
      expect(infoHeader.breadcrumbs.get()).to.deep.eq(expectedBreadcrumbs);
    });

    it('sets the toDoItem on the scope', () => {
      expect(scope.toDoItem).to.deep.eq({});
    });
  });

  describe('#submit', () => {
    beforeEach(() => {
      scope.toDoItem = {
        title: 'A to do item',
        description: 'I really think this needs to get done',
        priority: '5',
      };
      httpBackend.whenPOST(/to_do_items/).respond(200, {});
    });

    it('posts the toDoItem to the backend', () => {
      httpBackend.expectPOST(/to_do_items/, { to_do_item: scope.toDoItem }).respond(200, {});
      scope.submit();
      httpBackend.flush();
    });

    it('redirects to the items screen', () => {
      scope.submit();
      httpBackend.flush();
      expect(state.go).to.have.been.calledOnceWith('items');
    });

    it('triggers submitting cylons', () => {
      scope.submit();
      expect(cylons.start).to.have.been.calledOnceWith('submitting');
      httpBackend.flush();
      expect(cylons.finish).to.have.been.calledOnceWith('submitting');
    });

    it('sets submitting on the scope', () => {
      scope.submit();
      expect(scope.submitting).to.eq(true);
      httpBackend.flush();
      expect(scope.submitting).to.eq(false);
    });
  });
});
