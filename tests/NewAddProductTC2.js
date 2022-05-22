module.exports = {
    'Add Product Without Color (Test Case 2)' : function (browser) {
      const addProduct = browser.page.newProductPage();
      
      addProduct
        .navigate()
        .verifyAddProductwithoutColor();
      browser
        .end();
    }
  };  