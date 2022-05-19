const frisby = require('frisby'); 
const testURL = 'http://localhost:3000/s/2' 
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
        var data = res.body
      // data= data.slice(10*5000)
        //var obj = JSON.parse(data)
       // console.log(obj)
        var color= data.getElementsByClassName('MuiTypography-root RSFExpandableSection-title-182 RSFFacetGroup-groupTitle-169 MuiTypography-subtitle1')
        console.log(color)

       // frisby.expectBodyContains('Product 1')
       //var filterby=obj['props']['pageProps']['pageData']['id']
      //  jest.useFakeTimers('legacy')
      //  cartLength=cartItems.length
        //expect(cartLength).toBe(0)
        frisby.expect('bodyContains','Product')
      

      })
      .done(doneFn)
  });
});