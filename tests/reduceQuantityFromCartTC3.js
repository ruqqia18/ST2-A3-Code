module.exports = {
    'Reduce Quantity From Cart Test (Test Case 3)' : function (browser) {
      const homePage = browser.page.homePage();
      const productPage=browser.page.productPage();
      const cartPage=browser.page.cartPage();
      browser.windowMaximize()
      homePage
        .navigate()
        .homePageAndProduct()
      productPage
        .verifyProductPageDisplayed()
        .clickProduct()
        .addProduct()
        .addtoCart()
        .viewCart()
      cartPage
        .verifyViewCartDisplayed()
        .reduceQuantityFromCart()
      browser
        .end();
    }
  };  
  /*
This test case checks whether the products'quantity reduces by 1'.
  */