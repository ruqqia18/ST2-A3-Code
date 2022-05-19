module.exports = {
    'Filter  (Test Case 7,8,9)' : function (browser) {
      const hybrid = browser.page.hybridFilters();
      
      hybrid
        .navigate()
        .verifyHybrids();
      browser
        .end();
    }
  };  
  /*
This test case checks if the right products are displayed by pressing type, size and color simulataneously
  */
