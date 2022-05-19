module.exports = {
    'Filter By Size (Test Case 7)' : function (browser) {
      const sizePage = browser.page.hybridFilters();
      
      sizePage
        .navigate()
        .verifySizeSelected();
      browser
        .end();
    }
  };  
  /*
This test case checks if the right products are displayed by pressing a specific size
  */
