describe('Controller: LoginController', () => {
  let apiResponse;
  let AuthService;
  let http;
  let httpBackend;
  let rootScope;
  let scope;
  let setUser;
  let makeController;
  let webStorage;

  beforeEach(module('todoozyApp'));

  beforeEach(inject(($controller, $http, $httpBackend, $rootScope, Restangular, _webStorage_) => {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    http = $http;
    scope.loginForm = {};
    webStorage = _webStorage_;
    apiResponse = { id: 42, username: 'cooldude' };
    rootScope = {
      $broadcast: sinon.spy(),
    };
    AuthService = {
      loginConfirmed: sinon.spy(),
    };
    httpBackend.whenPOST(/users\/sign_in.json/).respond(200, apiResponse);

    setUser = () => {
      scope.loginForm.$valid = true;
      scope.user.username = 'cooldude';
      scope.user.password = 'foobar';
    };

    makeController = () =>
      $controller('LoginController', {
        $scope: scope,
        $http: http,
        $rootScope: rootScope,
        $httpBackend: httpBackend,
        webStorage,
        AuthService,
      });
  }));

  describe('initialize', () => {
    it('defaults to empty values for login modal', () => {
      makeController();
      expect(scope.user.username).to.eq('');
      expect(scope.user.password).to.eq('');
    });

    it('defaults without a form error message', () => {
      makeController();
      expect(scope.formErrorMsg).to.eq('');
    });

    it('defaults to form not having been submitted', () => {
      makeController();
      expect(scope.formSubmitted).to.eq(false);
    });

    it('sets the current year for our copyright', () => {
      makeController();
      expect(scope.currentYear).to.eq(new Date().getFullYear());
    });
  });

  describe('login', () => {
    it('sets the formsubmitted to true', () => {
      http = sinon.stub();
      makeController();
      scope.login();
      expect(http.calledOnce).to.eq(false);
      expect(scope.formSubmitted).to.eq(true);
    });

    it('returns and sets form message if invalid', () => {
      http = sinon.stub();
      makeController();
      scope.login();
      expect(http.calledOnce).to.eq(false);
      expect(scope.formErrorMsg).to.eq('INVALID!');
    });

    it('stays on the login page and updates error message on error', () => {
      makeController();
      setUser();
      scope.login();
      httpBackend.expectPOST(/users\/sign_in.json/).respond(500, apiResponse);
      httpBackend.flush();
      expect(AuthService.loginConfirmed.calledOnce).to.eq(false);
      expect(scope.formErrorMsg).to.eq('login failed');
    });

    context('on success', () => {
      it('calls http with the correct parameters', () => {
        http.defaults.headers.common['X-CSRF-Token'] = 'cowauthvalue';
        makeController();
        setUser();
        scope.login();
        const expectedHeaders = {
          Accept: 'application/json, text/plain, */*',
          'X-CSRF-Token': 'cowauthvalue',
          'Content-Type': 'application/json;charset=utf-8',
        };
        httpBackend.expectPOST(/users\/sign_in.json/, { user: scope.user }, expectedHeaders).respond(200, { data: 'foo' });
        httpBackend.flush();
      });

      it('stores the username in webStorage', () => {
        webStorage = {
          set: sinon.spy(),
        };
        makeController();
        setUser();
        scope.login();
        httpBackend.flush();
        expect(webStorage.set).to.have.been.calledWith('username', 'cooldude');
      });

      it('broadcasts event:login-successful after success', () => {
        makeController();
        setUser();
        scope.login();
        httpBackend.flush();
        expect(rootScope.$broadcast).to.have.been.calledWith('event:login-successful');
      });

      it('confirms the login with the AuthService', () => {
        makeController();
        setUser();
        scope.login();
        httpBackend.flush();
        expect(AuthService.loginConfirmed).to.have.been.calledWith();
      });
    });
  });
});
