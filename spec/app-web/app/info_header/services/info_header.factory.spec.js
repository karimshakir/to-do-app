describe('Factory: InfoHeader', () => {
  let infoHeader;

  beforeEach(module('todoozyApp'));

  beforeEach(inject((_InfoHeader_) => {
    infoHeader = _InfoHeader_;

    it('initialized the service with empty variables', () => {
      expect(infoHeader.breadcrumbs).to.eq(undefined);
    });

    describe('#breadcrumbs test', () => {
      it('checking breadcrumb array length if clear', () => {
        infoHeader.breadcrumbs.clear();
        expect(infoHeader.breadcrumbs.length).to.eq(0);
      });

      it('checking the breadcrumb array count if assigned', () => {
        infoHeader.breadcrumbs.set([
          { name: 'Home', uiSref: 'dashboard' },
          { name: 'Component 14' },
        ]);
        expect(infoHeader.breadcrumbs.length).to.eq(2);
      });
    });

    it('resets the test data if the state is changed outside of test creation', () => {
      scope.$emit('$stateChangeStart', ({ name: 'tests.list' }));
      expect(infoHeader.breadcrumbs.length).to.eq(0);
      expect(infoHeader.statusPanel.length).to.eq(0);
    });
  }));
});
