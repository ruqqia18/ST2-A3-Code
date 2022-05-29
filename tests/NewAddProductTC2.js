module.exports = {
  'Add Product without selection (Test Case 2)' : function (browser) {
    const Productpage = browser.page.ProductPage();
    const Homepage = browser.page.homePage();
    Homepage
    .navigate()
    .SelectCategory()
    Productpage
    .verifyAddProductwithoutColor()
    
    browser
      .end();
  }
};  