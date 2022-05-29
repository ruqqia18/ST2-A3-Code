module.exports = {
    'Add Product  (Test Case 1)' : function (browser) {
      const Productpage = browser.page.ProductPage();
      const Homepage = browser.page.homePage();
      Homepage
      .navigate()
      .SelectCategory()
      Productpage
      .navigate()
      .verifyAddProduct()
      
      browser
        .end();
    }
  };  