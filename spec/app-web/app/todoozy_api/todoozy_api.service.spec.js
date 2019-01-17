describe('Factory: TodoozyAPI', () => {
  beforeEach(module('todoozyApp'));

  let restangular;
  let todoozyApi; // eslint-disable-line no-unused-vars

  beforeEach(module(($provide) => {
    restangular = {
      setBaseUrl: sinon.spy(),
      setParentless: sinon.spy(),
      setDefaultHeaders: sinon.spy(),
    };
    $provide.value('Restangular', restangular);
  }));

  beforeEach(inject((_TodoozyAPI_) => {
    todoozyApi = _TodoozyAPI_;
  }));

  it('sets the base URL', () => {
    expect(restangular.setBaseUrl).to.have.been.calledWith('/api/v1');
  });

  it('sets default headers', () => {
    const defaultHeaders = {
      Accept: 'application/json',
      'If-Modified-Since': 'Mon, 26 Jul 1997 05:00:00 GMT',
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
    };
    expect(restangular.setDefaultHeaders).to.have.been.calledWith(defaultHeaders);
  });
});
