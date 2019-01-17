describe('View: to_do_items/views/show.html', () => {
  let scope = {};
  let viewHtml;
  let viewElement;
  let compiledElement;
  let viewText;

  beforeEach(module('todoozyTemplates', 'todoozyApp'));

  beforeEach(inject(($templateCache, _$compile_, _$rootScope_) => {
    viewHtml = $templateCache.get('todoozy/to_do_items/views/show.html');
    const $compile = _$compile_;
    scope = _$rootScope_.$new();

    scope.toDoItem = {};

    viewElement = angular.element(viewHtml);
    compiledElement = $compile(viewElement)(scope);
    scope.$digest();
    viewText = compiledElement.text();
  }));

  context('To Do Items Show', () => {
    it('displays the waiting message', () => {
      expect(viewText).to.contain('Waiting for data....');
    });

    it('shows the to do item info', () => {
      scope.toDoItem = {
        id: 34,
        title: 'Item 1',
        description: 'Long long long',
        complete_flag: false,
      };
      scope.$digest();
      viewText = compiledElement.text();
      expect(viewText).to.contain('To Do: Item 1');
      expect(viewText).to.contain('Long long long');
      expect(viewText).to.contain('Not Completed');
    });

    it('shows the info for a completed item', () => {
      scope.toDoItem = {
        id: 34,
        title: 'Item 1',
        description: 'Long long long',
        complete_flag: true,
      };
      scope.$digest();
      viewText = compiledElement.text();
      expect(viewText).to.contain('To Do: Item 1');
      expect(viewText).to.contain('Long long long');
      expect(viewText).to.not.contain('Not Completed');
      expect(viewText).to.contain('Completed!');
    });
  });
});
