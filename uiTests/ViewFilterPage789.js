
module.exports = {
    'view Filter Page Test (Test Case 7)' : function (browser) {
      const filterPage = browser.page.hybridFilters();
      
      filterPage
        .navigate()
        .verifyFilterPage();
      browser
        .end();
    }
  };  
  /*
This test case checks if the filter page is being displayed for a category and subcategory
  */
