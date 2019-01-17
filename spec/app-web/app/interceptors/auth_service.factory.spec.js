describe('Factory: AuthService', () => {
  let authService;
  let requestBuffer;

  beforeEach(module('todoozyApp'));

  beforeEach(inject((AuthService, RequestBuffer) => {
    authService = AuthService;
    requestBuffer = RequestBuffer;
  }));

  describe('loginConfirmed', () => {
    it('confirms login', () => {
      sinon.stub(requestBuffer, 'registerUpdater').returns(1);
      sinon.stub(requestBuffer, 'retryAll').returns(1);
      expect(authService.loginConfirmed({}));
      assert(requestBuffer.registerUpdater.calledOnce);
      assert(requestBuffer.retryAll.calledOnce);
    });
  });
});
