module.exports = {
    'Add Product  (Test Case 1)' : function (browser) {
      const addProduct = browser.page.newProductPage();
      
      addProduct
        .navigate()
        .verifyAddProduct();
      browser
        .end();
    }
  };  