//const category1='#__next > main > div > div.makeStyles-root-87 > div.PrivateHiddenCss-xsDown-31 > div > div > div.RSFFilter-facetGroups-165 > div:nth-child(1) > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > div:nth-child(3) > button > div.RSFSwatchProductOption-checkMark-120 > svg'
const product1='#item-0 > div > div:nth-child(1) > a > div > img'
const color='#__next > main > div > form > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4 > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-7 > div > div:nth-child(1) > div.RSFProductOptionSelector-root-149 > div:nth-child(1) > div > button > div.RSFSwatchProductOption-checkMark-156'
const addtoCart='#__next > main > div > form > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4 > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-7 > div > div:nth-child(4) > button'
const viewcart='#__next > header > div > div > a.MuiButtonBase-root.MuiIconButton-root.RSFCartButton-link-24.MuiIconButton-colorInherit > span.MuiIconButton-label > span > svg'
const closepopup='body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogTitle-root > button > span.MuiIconButton-label > svg'
const removeproduct='#__next > main > div > div:nth-child(2) > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-8 > div:nth-child(1) > button > span.MuiIconButton-label > svg'
const confirmremoval='body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > button:nth-child(1) > span.MuiButton-label'
category1 ='span[class="MuiButtonBase-root MuiTab-root RSFNavTab-tab-69 MuiTab-textColorInherit RSFNavTab-link-70 Mui-selected"]'
heading= 'h2[class="MuiTypography-root MuiTypography-h6"]' 
head2='#__next > main > div > div:nth-child(2) > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-8 > div:nth-child(1) > div > div:nth-child(2) > div > input'
const addQ='#__next > main > div > div:nth-child(2) > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-8 > div:nth-child(1) > div > div:nth-child(2) > div > button.MuiButtonBase-root.MuiIconButton-root.RSFQuantitySelector-button-171.RSFQuantitySelector-add-173.MuiIconButton-sizeSmall > span.MuiIconButton-label > svg'
module.exports = {
    url:'http://localhost:3000/s/1',
    
    elements: {
         },
    commands: [
      {
        verifyRemoveProduct: function() {
          this
  
          .pause(3*1000)
          .click(category1)
          .pause(3*1000)
          .click(product1)
          .pause(3*1000)
          .click(color)
          .pause(3*1000)
          .click(addtoCart)
          .pause(3*1000)
          .click(closepopup)
          .pause(3*1000)
          .click(viewcart)
          .pause(3*1000)
          .click(removeproduct)
          .pause(3*1000)
          .click(confirmremoval)
          .pause(3*1000)
        return this;


        },

        verifyRemoveProductConfirmation: function() {
            this
    
            
            .click(product1)
            .pause(3*1000)
            .click(addtoCart)
            .pause(3*1000)
            .click(closepopup)
            .pause(3*1000)
            .click(viewcart)
            .pause(3*1000)
            .click(removeproduct)
            .pause(3*1000)
            .click(confirmremoval)
            .pause(3*1000)
            .waitForElementVisible(heading)
            .expect.element(heading).text.to.be.contain('Product 1');
          return this;
  
  
          },

          verifyAddtoCart: function() {
            this
    
            .pause(3*1000)
            .click(category1)
            .pause(3*1000)
            .click(product1)
            .pause(3*1000)
            .click(color)
            .pause(3*1000)
            .click(addtoCart)
            .pause(3*1000)
            .click(closepopup)
            .pause(3*1000)
            .click(viewcart)
            .pause(3*1000)
            .click(addQ)
            .pause(3*1000)
            .waitForElementVisible(head2)
           
          return this;
  
  
          },
        }
    ]
  };