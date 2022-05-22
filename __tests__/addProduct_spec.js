const frisby = require('frisby');
//jest.setTimeout(100000)
const testURL = 'http://localhost:3000/api/cart/add'
describe('Checking the status of add to Cart', function(doneFn) {
  beforeEach(() => {})
  it('Add to cart',(doneFn)=>{
    frisby.fetch(testURL, {
        method:'post',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
            product:{
                id: '10',
                color: 'red',
                size: 'lg',  
            },
            quantity: 2
        }),
    })
    .expect(function(res) {
        console.log(res.body)
        var kdata=JSON.parse(res.body)
        console.log(kdata['cart']['items'])
        console.log(kdata['cart']['items'][0]['quantity'])
        expect(res.status).toBe(200)
        expect(kdata['cart']['items'][0]['quantity']).toBe(2)
    })
  });
});