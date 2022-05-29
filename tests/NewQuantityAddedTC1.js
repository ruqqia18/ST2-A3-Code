module.exports = {
    'Quantity Added (Test Case 5)' : function (browser) {
      const Productpage = browser.page.ProductPage();
      const Homepage = browser.page.homePage();
      const Cartpage=browser.page.CartPage();
      Homepage
      .navigate()
      .SelectCategory()
      Productpage
      .verifyAddProductwithoutColor()
      .clickOnCartButton()
      Cartpage
      .verifyViewCartDisplayed()
      .AddQuantitytoCart()
      browser
        .end();
    }
  };  