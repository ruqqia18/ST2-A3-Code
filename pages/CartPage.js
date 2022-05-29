

module.exports = {
    url:'http://localhost:3000',
    
    elements: {
      confirmremoval:'span[class="MuiButton-label"]',
      heading: 'h6[class="MuiTypography-root MuiTypography-h6"]',
      confirmation:'p[class="MuiTypography-root MuiDialogContentText-root MuiTypography-body1 MuiTypography-colorTextSecondary"]',
      RemoveButton: 'span[class="MuiIconButton-label"]'
         },
    commands: [
      {
        verifyRemoveProduct: function() {
          this
          .waitForElementPresent('@RemoveButton')
          this.useXpath()
          .click('//*[@id="__next"]/main/div/div[2]/div/div[1]/div[1]/button/span[1]')
          this.useCss()
          .waitForElementVisible('@confirmremoval')
          this.useXpath()
          .click('/html/body/div[4]/div[3]/div/div[3]/button[1]/span[1]')
          this.useCss()
          .waitForElementVisible('@heading')
          .expect.element('@heading').text.to.be.contain('My Cart (2 items)');
        return this;


        },

        verifyRemoveProductConfirmation: function() {
            this
            .waitForElementPresent('@RemoveButton')
            this.useXpath()
            .click('//*[@id="__next"]/main/div/div[2]/div/div[1]/div[1]/button/span[1]')
            this.useCss()
            .waitForElementVisible('@confirmremoval')
            this.useXpath()
            .click('/html/body/div[4]/div[3]/div/div[3]/button[1]/span[1]')
            this.useCss()
            .waitForElementVisible('@heading')
            .expect.element('@confirmation').text.to.be.contain('Are you sure that you want to remove selected item?');
          return this;
  
  
          },
          verifyViewCartDisplayed: function() {
            this
              .waitForElementVisible('@heading')
              .expect.element('@heading').text.to.be.contain('My Cart')
              this.pause(1000)
            return this;
          }
          ,

          AddQuantitytoCart: function(){
              this
              this.useXpath()
              .waitForElementVisible('//*[@aria-label="subtract one quantity"]/child::span[@class="MuiIconButton-label"]',100000)
              var g=0
              this.getValue('//input[@name="quantity"]',function(result) {
                g=result.value
                console.log(g)
              })
              .click('xpath','//*[@aria-label="subtract one quantity"]/child::span[@class="MuiIconButton-label"]', function(result) {
                this.assert.strictEqual(result.status, 0)
              })
              this.pause(1000)
              this.getValue('//input[@name="quantity"]',function(result) {
                this.assert.equal(result.value,parseInt(g)+1)
              })
              this.useCss()
            return this
          }
         
        }
    ]
  };