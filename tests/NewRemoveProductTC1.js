module.exports = {
    'Remove Product (Test Case 3)' : function (browser) {
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
      .verifyRemoveProduct()
      browser
        .end();
    }
  };  