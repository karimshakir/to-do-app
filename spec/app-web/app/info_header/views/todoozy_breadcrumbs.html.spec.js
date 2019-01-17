describe('View: fox breadcrumbs', () => {
  let scope = {};
  let viewHtml;
  let formElement;
  let compiledElement;
  let viewText;

  beforeEach(module('foxTemplates'));

  beforeEach(inject(($templateCache, _$compile_, _$rootScope_) => {
    viewHtml = $templateCache.get('fox/info_header/views/fox_breadcrumbs.html');

    const $compile = _$compile_;
    scope = _$rootScope_.$new();
    formElement = angular.element(viewHtml);
    compiledElement = $compile(formElement)(scope);

    scope.$digest();
    viewText = compiledElement.text();

    it('check empty breadcrumbs', () => {
      expect(scope.breadcrumbs.length).to.eq(0);
    });

    it('Displays a bread breadcrumb', () => {
      scope.breadcrumbs = [
        { name: 'Home', uiSref: 'dashboard' },
        { name: 'somedomain', uiSref: 'sites.detail({siteID: 24})' },
      ];

      scope.$digest();
      viewText = compiledElement.text();

      expect(viewText).to.contain('somedomain');
    });
  }));
});
