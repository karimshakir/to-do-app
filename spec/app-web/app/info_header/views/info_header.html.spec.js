describe('View: Info header', () => {
  let scope = {};
  let viewHtml;
  let formElement;
  let compiledElement;

  beforeEach(module('todoozyTemplates'));

  beforeEach(inject(($templateCache, _$compile_, _$rootScope_) => {
    viewHtml = $templateCache.get('todoozy/info_header/views/info_header.html');

    const $compile = _$compile_;
    scope = _$rootScope_.$new();
    formElement = angular.element(viewHtml);
    compiledElement = $compile(formElement)(scope);

    scope.statusPanel.deactivate();
    scope.$digest();

    it('Displays a breadcrumbs', () => {
      expect(compiledElement.find('[breadcrumbs="breadcrumbs"]').length).to.eq(1);
    });
  }));
});
