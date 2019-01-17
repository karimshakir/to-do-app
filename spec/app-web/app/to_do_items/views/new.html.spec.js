describe('View: to_do_items/views/new.html', () => {
  let scope = {};
  let viewHtml;
  let viewElement;
  let compiledElement;

  beforeEach(module('todoozyTemplates', 'todoozyApp'));

  beforeEach(inject(($templateCache, _$compile_, _$rootScope_) => {
    viewHtml = $templateCache.get('todoozy/to_do_items/views/new.html');
    const $compile = _$compile_;
    scope = _$rootScope_.$new();

    scope.toDoItem = {};
    scope.submitting = false;

    viewElement = angular.element(viewHtml);
    compiledElement = $compile(viewElement)(scope);
    scope.$digest();
  }));

  context('To Do Items New', () => {
    it('has the submit button enabled', () => {
      const submitButton = compiledElement.find('button:contains("Submit")');
      expect(submitButton.attr('disabled')).to.eq(undefined);
    });

    it('has the submit button disabled', () => {
      scope.submitting = true;
      scope.$digest();
      const submitButton = compiledElement.find('button:contains("Submit")');
      expect(submitButton.attr('disabled')).to.eq('disabled');
    });
  });
});
