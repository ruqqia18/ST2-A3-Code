module.exports = {
    url: 'http://localhost:3000',
    elements: {
        body: 'body',
        viewCartButton:'span[class="MuiBadge-root"]',
        clickCartButton: 'svg[class="MuiSvgIcon-root RSFCartButton-icon-26"]',
        viewCategoryButton:'span[class="MuiTab-wrapper"]',
        product1:'#item-0 > div > div:nth-child(1) > a > div > img'
    },
    commands: [
        {
            homePageAndCart: function() {
                return this
                    .waitForElementVisible('@viewCartButton', 2000)
                    .click('@clickCartButton')
                    .waitForElementPresent('@clickCartButton');
            }
            ,
            SelectCategory: function(){
                this
                    .waitForElementVisible('@viewCategoryButton',2000)
                    this.useXpath()
                    .click('//*[@id="__next"]/div[2]/div/div/div[3]/div/a[2]/span[1]')
                    this.useCss()
                    .waitForElementPresent('@product1')
                    .click('@product1')
                   
                return this
            }
        }
    ]

  };