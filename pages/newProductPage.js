//const category1='#__next > main > div > div.makeStyles-root-87 > div.PrivateHiddenCss-xsDown-31 > div > div > div.RSFFilter-facetGroups-165 > div:nth-child(1) > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > div:nth-child(3) > button > div.RSFSwatchProductOption-checkMark-120 > svg'
const product1='#item-0 > div > div:nth-child(1) > a > div > img'
const color='#__next > main > div > form > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4 > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-7 > div > div:nth-child(1) > div.RSFProductOptionSelector-root-149 > div:nth-child(1) > div > button > div.RSFSwatchProductOption-checkMark-156'
category1 ='span[class="MuiButtonBase-root MuiTab-root RSFNavTab-tab-69 MuiTab-textColorInherit RSFNavTab-link-70 Mui-selected"]'
const addtoCart='#__next > main > div > form > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4 > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-7 > div > div:nth-child(4) > button'

module.exports = {
    url:'http://localhost:3000/s/5',
    
    elements: {
         },
    commands: [
      {
        verifyAddProduct: function() {
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
        

        return this;


        },

        verifyAddProductwithoutColor: function() {
            this
    
            .pause(3*1000)
            .click(category1)
            .pause(3*1000)
           .click(product1)
            .pause(3*1000)
            .click(addtoCart)
            .pause(3*1000)
  
  
          return this;
  
  
          },
  

          
        }
    ]
  };