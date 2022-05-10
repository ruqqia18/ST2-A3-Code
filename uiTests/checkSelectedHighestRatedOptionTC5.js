module.exports = {
    'check Highest Rated Option Test (Test Case 5)' : function (browser) {
      const homePage = browser.page.homePage();
      const productPage=browser.page.productPage();
      browser.windowMaximize()
      homePage
        .navigate()
        .homePageAndProduct()
      productPage
        .verifyProductPageDisplayed()
        .checkMenuContainsHighestRatedOption()
      browser
        .end();
    }
  };  
  /*
This test case checks whether the highest Rated Option selected in Sort Dropdown Menu
  */