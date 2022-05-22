
const qs = require('qs');
const frisby = require('frisby'); 
const testURL = 'http://localhost:3000/api/s/1/' 
const product = get(state, 'pageData.product') || {}
const Mycolor = "red"
const size = get(state, 'pageData.size') || {}
const mySize='md'
const Mycolor1='green'

describe('view products of a specific color', function(doneFn) {
    beforeEach(() => {})
    it('expect status should match', function(doneFn) {
    frisby.get(testURL)
      .expect('status',200)
      .done(doneFn)
  });
  it('select a specific color', function(doneFn) {
    frisby.get(testURL)
      .expect(function(res) {
      const query = qs.stringify({ color: Mycolor ,size: mySize}, { addQueryPrefix: true })
        fetchVariant('/api/p/${product.id}${query}')
          
        
    })
      .done(doneFn)
  });
  it('select other colors', function(doneFn) {
    frisby.get(testURL)
      .expect(function(res) {
      const query = qs.stringify({ color: Mycolor1 ,size: mySize}, { addQueryPrefix: true })
        fetchVariant('/api/p/${product.id}${query}')
          
        
    })
      .done(doneFn)

})
});