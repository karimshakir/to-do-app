describe('Factory: RequestBuffer', () => {
  let requestBuffer;

  beforeEach(module('todoozyApp'));

  beforeEach(inject((RequestBuffer) => {
    requestBuffer = RequestBuffer;
  }));

  describe('#registerUpdater', () => {
    it('adds the updater to the updaters array', () => {
      expect(requestBuffer.registerUpdater('bloop')).to.eq(1);
      expect(requestBuffer.registerUpdater('applesauce')).to.eq(2);
    });
  });

  describe('#retryAll', () => {
    it('returns an empty array if buffer is empty', () => {
      expect(requestBuffer.retryAll()).to.deep.eq([]);
    });
  });

  describe('#append', () => {
    it('calls updater on config if there is one updater ', () => {
      const updaterSpy = sinon.spy();
      const processorStub = sinon.stub();
      requestBuffer.registerUpdater(updaterSpy);
      requestBuffer.append('config', false, processorStub);
      requestBuffer.retryAll();
      expect(updaterSpy).to.have.been.calledWith('config');
    });

    it('calls every updater on a particular config; the output of the first updater is the input of the second updater', () => {
      const updaterSpy1 = sinon.stub().returns('foo');
      const updaterSpy2 = sinon.spy();
      const processorStub = sinon.stub();
      requestBuffer.registerUpdater(updaterSpy1);
      requestBuffer.registerUpdater(updaterSpy2);
      requestBuffer.append('config', false, processorStub);
      requestBuffer.retryAll();
      expect(updaterSpy1).to.have.been.calledWith('config');
      expect(updaterSpy2).to.have.been.calledWith('foo');
    });

    it('calls config only once with multiple identical configs, updater only gets called one time', () => {
      const updaterSpy1 = sinon.stub().returns('config');
      const updaterSpy2 = sinon.spy();
      const processorStub = sinon.stub();
      requestBuffer.registerUpdater(updaterSpy1);
      requestBuffer.registerUpdater(updaterSpy2);
      requestBuffer.append('config', false, processorStub);
      requestBuffer.retryAll();
      expect(updaterSpy1).to.have.been.calledWith('config');
      expect(updaterSpy2).to.have.been.calledWith('config');
    });
  });
});
