module.exports = {
    elements: {
      heading: 'h6[class="MuiTypography-root MuiTypography-h6"]'
    },
    commands: [
      {
        verifyViewCartDisplayed: function() {
          this
            .waitForElementVisible('@heading')
            .expect.element('@heading').text.to.be.contain('My Cart');
          return this;
        }
        ,
        reduceQuantityFromCart: function(){
            this
            this.useXpath()
            .waitForElementVisible('//*[@aria-label="add one quantity"]/child::span[@class="MuiIconButton-label"]',100000)
            var g=0
            this.getValue('//input[@name="quantity"]',function(result) {
              g=result.value
              console.log(g)
            })
            .click('xpath','//*[@aria-label="add one quantity"]/child::span[@class="MuiIconButton-label"]', function(result) {
              this.assert.strictEqual(result.status, 0)
            })
            this.pause(1000)
            this.getValue('//input[@name="quantity"]',function(result) {
              this.assert.equal(result.value,g-1)
            })
            this.useCss()
          return this
        }
      }
    ]
  };