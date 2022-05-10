module.exports = {
    'sort By Highest Rated Test (Test Case 2)' : function (browser) {
      const homePage = browser.page.homePage();
      const productPage=browser.page.productPage();
      browser.windowMaximize()
      homePage
        .navigate()
        .homePageAndProduct()
      productPage
        .verifyProductPageDisplayed()
        //.selectOptionHigestRated()
        .checkSortByHighestRated()
      browser
        .end();
    }
  };  
  /*
This test case checks whether the products are sorted by highest rating or not.
  */