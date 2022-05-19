//medium size
const size1='#__next > main > div > div.makeStyles-root-87 > div.PrivateHiddenCss-xsDown-31 > div > div > div.RSFFilter-facetGroups-165 > div:nth-child(2) > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > button:nth-child(2) > span.MuiButton-label > div > span'
// large size
const size2='#__next > main > div > div.makeStyles-root-87 > div.PrivateHiddenCss-xsDown-31 > div > div > div.RSFFilter-facetGroups-165 > div:nth-child(2) > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > button:nth-child(3) > span.MuiButton-label'
// XXL size
const size3='#__next > main > div > div.makeStyles-root-87 > div.PrivateHiddenCss-xsDown-31 > div > div > div.RSFFilter-facetGroups-165 > div:nth-child(2) > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > button:nth-child(5) > span.MuiButton-label > div > span'
///
//new type
const type1='#__next > main > div > div.makeStyles-root-87 > div.PrivateHiddenCss-xsDown-31 > div > div > div.RSFFilter-facetGroups-165 > div:nth-child(3) > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > label:nth-child(1) > span.MuiTypography-root.MuiFormControlLabel-label.MuiTypography-body1 > div > span:nth-child(1)'
// old type
const type2='#__next > main > div > div.makeStyles-root-87 > div.PrivateHiddenCss-xsDown-31 > div > div > div.RSFFilter-facetGroups-165 > div:nth-child(3) > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > label:nth-child(2) > span.MuiTypography-root.MuiFormControlLabel-label.MuiTypography-body1 > div > span:nth-child(1)'
//
const col1='#__next > main > div > div.makeStyles-root-87 > div.PrivateHiddenCss-xsDown-31 > div > div > div.RSFFilter-facetGroups-165 > div:nth-child(1) > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > div:nth-child(3) > button > div.RSFSwatchProductOption-checkMark-120 > svg'
//select blue color

const col2='#__next > main > div > div.makeStyles-root-87 > div.PrivateHiddenCss-xsDown-31 > div > div > div.RSFFilter-facetGroups-165 > div:nth-child(1) > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > div:nth-child(7) > button > div.RSFSwatchProductOption-checkMark-120'
categoryBtn ='span[class="MuiButtonBase-root MuiTab-root RSFNavTab-tab-69 MuiTab-textColorInherit RSFNavTab-link-70 Mui-selected" ]'
clickURL='#__next > header > div > div > a:nth-child(1) > svg',
nextURL='#__next > div.MuiPaper-root.MuiPaper-elevation2 > div > div > div.MuiTabs-scroller.MuiTabs-scrollable > div > a:nth-child(3) > span.MuiTab-wrapper'
module.exports = {
    url:'http://localhost:3000/s/5',
    
    elements: {

         },
    commands: [
      {
        verifyHybrids: function() {
          this
          
      //    .click(clickURL)
          .pause(4*1000)
          .click(col1)
          .pause(3*1000)
         .click(size1)
          .pause(3*1000)
          .click(type2)
          .pause(3*1000)
          .click(col2)
          .pause(3*1000)
          .click(size1)
          .pause(3*1000)
          .click(col1)
          .pause(3*1000)
          .click(type2)
          .pause(3*1000)
          .click(type1)
          .pause(3*1000)



        return this;


        },


            //testing colors here
         verifyColorPress: function() {
                this
               // .click(clickURL)
            .pause(3*1000)
            .click(col2)
            .pause(3*1000)// blue color
            .click(col1)
            .pause(3*1000) // blue +purple
            .click(col1)
            .pause(3*1000) // purple

            return this
        },

        verifySizeSelected: function() {
            this

          // testing size here
          .pause(3*1000)
          .click(size1)
          .pause(2*1000)
         .click(size2)
         .pause(2*1000)
         .click(size2)
         .pause(2*1000)
         .click(size1)
         .pause(4*1000)

          return this;

        },
        verifyTypeSelected: function() {
            this
              .pause(5*1000)
              .click(type1)
              .pause(3*1000)
              .click(type1)
              .pause(3*1000)
              .click(type2)
              .pause(3*1000)
  
             
            return this;
          },

          verifyFilterPage: function() {
            this
               
              .pause(3*1000)
              .click(clickURL)
              .pause(1*1000)
              .click(nextURL)
              .pause(3*1000)
           
            return this;
         },
        }
    ]
  };