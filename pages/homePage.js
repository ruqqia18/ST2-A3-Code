module.exports = {
    url: 'http://localhost:3000',
    elements: {
        body: 'body',
        viewCartButton:'span[class="MuiBadge-root"]',
        clickCartButton: 'svg[class="MuiSvgIcon-root RSFCartButton-icon-26"]'
    },
    commands: [
        {
            homePageAndCart: function() {
                return this
                    .waitForElementVisible('@viewCartButton', 1000)
                    .click('@clickCartButton')
                    .waitForElementPresent('@clickCartButton');
            }
        }
    ]

  };