module.exports = {
    url: 'http://localhost:3000',
    elements: {
        body: 'body',
        viewCartButton:'span[class="MuiBadge-root"]',
        clickCartButton: 'svg[class="MuiSvgIcon-root RSFCartButton-icon-26"]',
        viewCategory2Button:'span[class="MuiTab-wrapper"]',
        clickCategory2Button:"#__next > div.MuiPaper-root.MuiPaper-elevation2 > div > div > div.MuiTabs-scroller.MuiTabs-scrollable > div > a:nth-child(2) > span.MuiTab-wrapper"
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
            homePageAndProduct: function(){
                return this
                    .waitForElementVisible('@viewCategory2Button',2000)
                    .click('@clickCategory2Button')
                    .waitForElementPresent('@clickCategory2Button')
            }
        }
    ]

  };