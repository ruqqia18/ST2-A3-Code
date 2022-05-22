module.exports = {
    'Quantity Added (Test Case 5)' : function (browser) {
      const removeProduct = browser.page.newCartPage();
      
      removeProduct
        .navigate()
        .verifyAddtoCart();
      browser
        .end();
    }
  };  