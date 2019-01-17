describe('Directive: todoozyBreadcrumbs', () => {
  let $compile;
  let scope;
  let element;
  let directive;

  before(beforeDirective);
  after(afterDirective);

  beforeEach(module('todoozyApp'));

  beforeEach(inject((_$compile_, _$rootScope_) => {
    $compile = _$compile_;
    scope = _$rootScope_.$new();
    element = angular.element('<div class="status-label">Test Breadcrumbs</div>');
    directive = $compile(element)(scope);
    scope.$digest();
  }));

  it('checking message label', () => {
    expect(directive.html()).to.contain('Test Breadcrumbs');
  });
});
