describe('Controller: ToolbarController', () => {
  let scope;
  let rootScope;
  let http;
  let httpBackend;
  let stateParams;
  let makeController;
  let stateService;
  let webStorage;

  beforeEach(module('todoozyApp'));

  beforeEach(inject(($controller, _$http_, _$httpBackend_, _$rootScope_, $state, $stateParams, _webStorage_) => {
    scope = _$rootScope_.$new();
    rootScope = {
      $broadcast: sinon.spy(),
    };

    scope.username = '';
    scope.loggedIn = false;

    http = _$http_;
    stateParams = {
      someParam: 12,
    };
    stateService = {
      current: {
        name: 'todoozyFacts',
      },
      params: {
        someParam: 12,
      },
      transitionTo: sinon.spy(),
      go: sinon.spy(),
    };

    httpBackend = _$httpBackend_;
    webStorage = _webStorage_;

    makeController = () =>
      $controller('ToolbarController', {
        $rootScope: rootScope,
        $scope: scope,
        $http: http,
        $state: stateService,
        $stateParams: stateParams,
        $webStorage: webStorage,
        $httpBackend: httpBackend,
      });
  }));

  describe('initialize', () => {
    it('sets the username to what is stored in webstorage', () => {
      webStorage.set('username', 'blah');
      makeController();
      expect(scope.username).to.eq('blah');
    });
  });

  describe('#logout', () => {
    it('hits the http endpoint for deleting the token', () => {
      http.defaults.headers.common['X-CSRF-Token'] = 'cowauthvalue';
      makeController();
      scope.loggedIn = true;
      scope.username = 'coolcow';
      const expectedHeaders = {
        Accept: 'application/json, text/plain, */*',
        'X-CSRF-Token': 'cowauthvalue',
      };
      scope.logout();
      httpBackend.expectDELETE(/users\/sign_out.json/, expectedHeaders).respond(200, {});
      httpBackend.flush();
    });

    it('clean ups the user on logout success', () => {
      webStorage.set('username', 'coolcow');
      makeController();
      expect(webStorage.get('username')).to.eq('coolcow');
      httpBackend.expectDELETE('/users/sign_out.json').respond(200, {});
      scope.logout();
      httpBackend.flush();
      expect(webStorage.get('username')).to.eq(null);
    });

    it('remembers the page you were on before logging out', () => {
      makeController();
      httpBackend.expectDELETE('/users/sign_out.json').respond(200, {});
      scope.logout();
      httpBackend.flush();
      expect(scope.nextState).to.eq(stateService.current.name);
      expect(scope.nextParams).to.eq(stateService.params);
    });

    it('defaults the page you were on if you were on the login page', () => {
      makeController();
      httpBackend.expectDELETE('/users/sign_out.json').respond(200, {});
      scope.nextState = 'login';
      scope.logout();
      httpBackend.flush();
      expect(scope.nextState).to.eq(stateService.current.name);
      expect(scope.nextParams).to.eq(stateService.params);
    });

    it('goes to the login page after logout', () => {
      makeController();
      httpBackend.expectDELETE('/users/sign_out.json').respond(200, {});
      scope.logout();
      httpBackend.flush();
      expect(stateService.go).to.have.been.calledWith('login');
    });

    it('broadcasts the event:login-open event on logout', () => {
      makeController();
      httpBackend.expectDELETE('/users/sign_out.json').respond(200, {});
      scope.logout();
      httpBackend.flush();
      expect(rootScope.$broadcast).to.have.been.calledWith('event:login-open');
    });
  });

  describe('broadcast events', () => {
    it('toggles login visibility on event:login-open', () => {
      makeController();
      scope.$broadcast('event:login-open', {
        stateName: 'sites.detail',
        stateParams: { siteId: 12 },
      });
      expect(scope.nextParams.siteId).to.eq(12);
      expect(scope.nextState).to.eq('sites.detail');
    });

    it('does not replace defaults on event:login-open if no params', () => {
      makeController();
      scope.$broadcast('event:login-open');
      expect(scope.nextParams).to.deep.eq({});
      expect(scope.nextState).to.eq('dashboard');
    });

    it('defaults next params as dashboard on event:login-open if passing login through params', () => {
      makeController();
      scope.$broadcast('event:login-open', {
        stateName: 'login',
        stateParams: {},
      });
      expect(scope.nextParams).to.deep.eq({});
      expect(scope.nextState).to.eq('dashboard');
    });

    it('transfers state on event:login-successful', () => {
      makeController();
      scope.nextParams = { siteId: 12 };
      scope.nextState = 'sites.detail';
      scope.$broadcast('event:login-successful');
      expect(stateService.go).to.have.been.calledWith(scope.nextState, scope.nextParams);
    });

    it('sets the username to what is stored in webstorage on login successful', () => {
      webStorage.set('username', 'blah');
      makeController();
      scope.nextParams = { siteId: 12 };
      scope.nextState = 'sites.detail';
      scope.$broadcast('event:login-successful');
      expect(scope.username).to.eq('blah');
    });
  });
});
