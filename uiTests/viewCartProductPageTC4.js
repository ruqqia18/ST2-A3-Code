module.exports = {
    'view Cart from Product Page Test (Test Case 4)' : function (browser) {
      const homePage = browser.page.homePage();
      const productPage=browser.page.productPage();
      const cartPage=browser.page.cartPage();
      browser.windowMaximize()
      homePage
        .navigate()
        .homePageAndProduct()
      productPage
        .verifyProductPageDisplayed()
        .clickOnCartButton()
      cartPage
        .verifyViewCartDisplayed()
      browser
        .end();
    }
  };  
  /*
This test case checks whether the cart button is pressed or not on the productPage.
and is it directed to the new page or not?
  */