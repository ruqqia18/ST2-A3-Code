

module.exports = {
    url:'http://localhost:3000/s/1',
    
    elements: {
      removeproduct:'#__next > main > div > div:nth-child(2) > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-8 > div:nth-child(1) > button > span.MuiIconButton-label > svg',
      confirmremoval:'body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > button:nth-child(1) > span.MuiButton-label',
      heading: 'h6[class="MuiTypography-root MuiTypography-h6"]',
      confirmation:'p[class="MuiTypography-root MuiDialogContentText-root MuiTypography-body1 MuiTypography-colorTextSecondary"]'
         },
    commands: [
      {
        verifyRemoveProduct: function() {
          this
          .waitForElementVisible('@removeproduct')
          .click('@removeproduct')
          .waitForElementVisible('@confirmremoval')
          .click('@confirmremoval')
          .waitForElementVisible('@heading')
          .expect.element('@heading').text.to.be.contain('My Cart (2 items)');
        return this;


        },

        verifyRemoveProductConfirmation: function() {
            this
            .waitForElementVisible('@removeproduct')
            .click('@removeproduct')
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