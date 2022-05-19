module.exports = {
    'Filter By Color (Test Case 8)' : function (browser) {
      const colorPage = browser.page.hybridFilters();
      
      colorPage
        .navigate()
        .verifyColorPress();
      browser
        .end();
    }
  };  
  /*
This test case checks if the right products are displayed by pressing a specific color
  */
