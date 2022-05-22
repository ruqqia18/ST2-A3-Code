module.exports = {
    'Remove Product Confirmation (Test Case 4)' : function (browser) {
      const removeProduct = browser.page.newCartPage();
      
      removeProduct
        .navigate()
        .verifyRemoveProductConfirmation();
      browser
        .end();
    }
  };  