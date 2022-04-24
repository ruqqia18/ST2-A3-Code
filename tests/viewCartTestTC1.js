module.exports = {
    'view Cart Test (Test Case 1)' : function (browser) {
      const viewCartPage = browser.page.viewCartPageTC1();
      const viewCartPageResults=browser.page.viewCartPageResultsTC1();
  
      viewCartPage
        .navigate()
        .homePageAndCart();
      viewCartPageResults
        .verifyViewCartDisplayed();
      browser
        .end();
    }
  };  