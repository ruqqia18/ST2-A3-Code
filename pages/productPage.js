//from selenium.webdriver.common.action_chains import ActionChains
module.exports = {
    elements: {
      heading1: 'h1[class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom"]',
      selectMenu:'#__next > main > div > div.makeStyles-root-119 > div.MuiGrid-root.MuiGrid-container > div:nth-child(4) > button > span.MuiButton-label.RSFActionButton-label-122',
      cartButton: 'svg[class="MuiSvgIcon-root RSFCartButton-icon-26"]'
    },
    commands: [
      {
        verifyProductPageDisplayed: function(){
          this
            .waitForElementVisible('@heading1',2000)
            .expect.element('@heading1').text.to.be.contain('Subcategory 2');
          return this;
        }
        ,
        clickProduct: function(){
          this
            this.useXpath()
            this.pause(1000)
            .waitForElementVisible('//*[@id="item-0"]')
            .click('xpath','//*[@id="item-0"]')
            this.useCss()
          return this;
        }
        ,
        addProduct: function(){
          this
            this.useXpath()
            this.pause(1000)
            .waitForElementVisible('//*[@aria-label="subtract one quantity"]/child::span[@class="MuiIconButton-label"]')
            this.doubleClick('xpath','//*[@aria-label="subtract one quantity"]/child::span[@class="MuiIconButton-label"]', function(result) {
              this.assert.strictEqual(result.status, 0)
            })
            this.useCss()
          return this
        },
        addtoCart: function(){
          this
            this.useXpath()
            .waitForElementVisible("//*[contains(text(),'Add to Cart')]")
            .click('xpath',"//*[contains(text(),'Add to Cart')]", function(result) {
              this.assert.strictEqual(result.status, 0)
            })
            
            this.useCss()
          return this
        }
        ,
        viewCart: function(){
          this
            this.useXpath()
            .waitForElementVisible("//*[contains(text(),'View Cart')]")
            .click('xpath',"//*[contains(text(),'View Cart')]", function(result) {
              this.assert.strictEqual(result.status, 0)
            })
            this.useCss()
          return this
        }
        ,
        clickOnCartButton: function(){
            this
              .waitForElementVisible('@cartButton',1000)
              .click('@cartButton',1000)
              .waitForElementPresent('@cartButton',1000)
        }
        ,
        checkSortByHighestRated: function(){
            this
              .waitForElementVisible('body', 2000)
              this.useXpath()
              .waitForElementVisible("//*[contains(text(),'Sort')]//following-sibling::span") 
              .click('xpath',"//*[contains(text(),'Sort')]", function(result) {
                this.assert.strictEqual(result.status, 0)
              })
              
              this.pause(1000)
              this.moveToElement("//button[4]/child::span[1]",undefined,undefined) 
              this.waitForElementVisible("//button[4]/child::span[1]") 
              this.doubleClick('xpath',"//button[4]/child::span[1]", function(result) {
                  this.assert.strictEqual(result.status, 0)
                })
              this.useCss()
              .waitForElementVisible('body', 2000)
              .expect.element('@selectMenu').text.to.be.contain('Highest Rated')
            return this     
        }
        ,selectOptionHigestRated: function(){
          this
            .useXpath()
            //*[@id="__next"]/main/div/div[2]/div[2]/div[4]/button/span[1]/span[2]
            .waitForElementVisible("//*[contains(text(),'Sort')]//following-sibling::span")
            .click('xpath',"//*[contains(text(),'Sort')]", function(result) {
                this.assert.strictEqual(result.status, 0)
            })
            .setValue('//div[4]/child::button/child::span[1]/child::span[2]',"Highest Rated")
            .useCss()
            .expect.element('@selectMenu').text.to.be.contain('Highest Rated')
          return this

        }
        ,
        checkMenuContainsHighestRatedOption: function(){
          this
          .waitForElementVisible('body', 2000)
          .waitForElementPresent('@selectMenu')
          .expect.element('@selectMenu').text.to.be.contain('Highest Rated')
          this.pause(1000)
          return this
        }
      }
    ]
  };
  