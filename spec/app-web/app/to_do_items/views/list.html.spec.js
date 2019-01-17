describe('View: to_do_items/views/list.html', () => {
  let scope = {};
  let viewHtml;
  let viewElement;
  let compiledElement;
  let viewText;

  beforeEach(module('todoozyTemplates', 'todoozyApp'));

  beforeEach(inject(($templateCache, _$compile_, _$rootScope_) => {
    viewHtml = $templateCache.get('todoozy/to_do_items/views/list.html');
    const $compile = _$compile_;
    scope = _$rootScope_.$new();

    scope.toDoItems = [
      {
        id: 34,
        title: 'Item 1',
        priority: 57,
        complete_flag: false,
      },
      {
        id: 33,
        title: 'Item 2',
        priority: 58,
        complete_flag: false,
      },
    ];
    viewElement = angular.element(viewHtml);
    compiledElement = $compile(viewElement)(scope);
    scope.$digest();
    viewText = compiledElement.text();
  }));

  context('To Do Items List', () => {
    it('displays the to do items', () => {
      expect(viewText).to.contain('Item 1');
      expect(viewText).to.contain('Item 2');
      expect(viewText).to.contain('57');
      expect(viewText).to.contain('58');
    });

    it('links items to their show pages', () => {
      const itemLink = compiledElement.find('a:contains("Item 1")');
      expect(itemLink.attr('ui-sref')).to.eq('itemsShow({itemId: toDoItem.id})');
    });

    it('does not display to do items that are complete', () => {
      scope.toDoItems[0].complete_flag = true;
      scope.$digest();
      viewText = compiledElement.text();
      expect(viewText).to.not.contain('Item 1');
      expect(viewText).to.contain('Item 2');
      expect(viewText).to.not.contain('57');
      expect(viewText).to.contain('58');
    });
  });
});
