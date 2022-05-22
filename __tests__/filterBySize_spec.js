
const qs = require('qs');
const frisby = require('frisby'); 
const testURL = 'http://localhost:3000/api/s/1/size'
const product = get(state, 'pageData.product') || {}
const size = get(state, 'pageData.size') || {}
const mySize='md'

describe('view products of a specific size', function(doneFn) {
    beforeEach(() => {})
    it('expect status should match', function(doneFn) {
    frisby.get(testURL)
      .expect('status',200)
      .done(doneFn)
  });
  it('select a specific size', function(doneFn) {
    frisby.get(testURL)
      .expect(function(res) {
      const query = qs.stringify({ size: mySize}, { addQueryPrefix: true })
        fetchVariant('/api/p/${product.id}${query}')
          
        
    })
      .done(doneFn)
  });
});