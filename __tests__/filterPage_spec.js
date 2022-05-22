const frisby = require('frisby'); 
const { element } = require('nightwatch');
const testURL = 'http://localhost:3000/s/2'
 
const myclass ='MuiTypography-root RSFActionButton-caption-96 MuiTypography-button'
describe('Checking if filter page being viewed', function(doneFn) {
  it('expect status should match', function(doneFn) {
    frisby.get(testURL)
      .expect('status',200)
      .done(doneFn)
      frisby.timeout(10*1000)
      
  });
  it('Correct filter page displayed', function(doneFn) {
    frisby.get(testURL)
      .expect(function(res) {
        const query = qs.stringify({ color: color.id, size: size.id }, { addQueryPrefix: true })
        fetchVariant(`/api/p/${product.id}${query}`) 
      
      
      
      
      
      
      
       // var color= data.getElementsByClassName('MuiTypography-root RSFExpandableSection-title-182 RSFFacetGroup-groupTitle-169 MuiTypography-subtitle1')
        //console.log(color)

       // frisby.expectBodyContains('Product 1')
       //var filterby=obj['props']['pageProps']['pageData']['id']
      //  jest.useFakeTimers('legacy')
      //  cartLength=cartItems.length
        //expect(cartLength).toBe(0)
        

      })
      .done(doneFn)
  });
});