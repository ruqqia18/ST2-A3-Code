const frisby = require('frisby');
const testURL = 'http://localhost:3000/api/cart'
describe('Checking the status of View Cart', function(doneFn) {
  it('expect status should match', function(doneFn) {
    frisby.get(testURL)
      .expect('status',200)
      .done(doneFn)
  });
  it('Checking the Empty Cart, Fails when length of cart is not 0', function(doneFn) {
    frisby.get(testURL)
      .expect(function(res) {
        //console.log("Status Code: ",res.status)
        console.log(res)
        var data = res.body
        var obj = JSON.parse(data)
        var cartItems=obj['pageData']['cart']['items']
        cartLength=cartItems.length
        //console.log(cartLength)
        expect(cartLength).toBe(0)
      })
      .done(doneFn)
  });
});