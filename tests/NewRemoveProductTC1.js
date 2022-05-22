module.exports = {
    'Remove Product (Test Case 3)' : function (browser) {
      const removeProduct = browser.page.newCartPage();
      
      removeProduct
        .navigate()
        .verifyRemoveProduct();
      browser
        .end();
    }
  };  