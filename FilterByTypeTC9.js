module.exports = {
    'Filter By Type (Test Case 9)' : function (browser) {
      const typePage = browser.page.hybridFilters();
      
      typePage
        .navigate()
        .verifyTypeSelected();
      browser
        .end();
    }
  };  
  /*
This test case checks if the right products are displayed by pressing a specific  type
  */
