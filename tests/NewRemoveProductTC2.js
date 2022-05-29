module.exports = {
    'Remove Product Confirmation (Test Case 4)' : function (browser) {
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
      .verifyRemoveProductConfirmation()
      browser
        .end();
    }
  };  