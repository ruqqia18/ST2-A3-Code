module.exports = {
    url: 'http://localhost:3000/p/1',
    elements: {
      cartButton: 'svg[class="MuiSvgIcon-root RSFCartButton-icon-26"]',
      heading:'h2[class="MuiTypography-root MuiTypography-h6"]'
         },
    commands: [
      {
        verifyAddProduct: function() {
          this
          
          this.useXpath()
          .waitForElementPresent('//div[3]//child::div[1]//child::div//child::button//child::div[1]',2000)
          .click('//div[3]//child::div[1]//child::div//child::button//child::div[1]')
          .waitForElementVisible('//*[contains(text(),"Add to Cart")]')
          .click('//*[contains(text(),"Add to Cart")]')
          this.useCss()
          .waitForElementVisible('@heading')
          .expect.element('@heading').text.to.be.contain('Item added to cart');
         

        return this;


        },

        verifyAddProductwithoutColor: function() {
            this
            this.useXpath()
            .waitForElementPresent('//*[contains(text(),"Add to Cart")]')
            .click('//*[contains(text(),"Add to Cart")]')
            this.useCss()
            .waitForElementVisible('@heading')
            .expect.element('@heading').text.to.be.contain('Item added to cart');
          return this;
  
  
          },

          clickOnCartButton: function(){
            this
              .waitForElementVisible('@cartButton',1000)
              .click('@cartButton',1000)
              .waitForElementPresent('@cartButton',1000)
        }
          
        }
    ]
  };