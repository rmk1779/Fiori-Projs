describe('sample', function () {

    it('should load the app',function() {
      expect(browser.getTitle()).toBe('demoapp');
    });
  
    it('should Click On Button',function() {
      element(by.control({
        viewName: 'demoapp.view.App',
        controlType: 'sap.m.Button',
        }))
      .click();
    });
  
    // it('should have two items in the list',function() {
    //   expect(element.all(by.control({
    //     viewName: 'sap.ui.demo.todo.view.App',
    //     controlType:'sap.m.CustomListItem'}))
    //   .count()).toBe(2);
    // });
  });
