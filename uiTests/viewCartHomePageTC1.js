module.exports = {
    'view Cart from home Page Test (Test Case 1)' : function (browser) {
      const homePage = browser.page.homePage();
      const cartPage=browser.page.cartPage();
  
      homePage
        .navigate()
        .homePageAndCart();
      cartPage
        .verifyViewCartDisplayed();
      browser
        .end();
    }
  };  
  /*
This test case checks whether the cart button is pressed or not on the HomePage.
and is it directed to the new page or not?
  */