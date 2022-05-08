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
      }
    ]
  };